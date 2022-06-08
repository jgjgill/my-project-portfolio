import { useEffect, useState } from 'react'
import Icon from '@components/study/icon'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { asyncFetchNotionPage, createNotion, getThemePage, getThemePageNameGroup, ThemePage } from '@libs/client/notion'
import { UpdateBlockResponse } from '@notionhq/client/build/src/api-endpoints'
import client from '@libs/server/client'
import { Post } from '@prisma/client'
import useSWR from 'swr'
import Head from 'next/head'
import MemoList from '@components/study/memoList'
import FilteredList from '@components/study/filteredList'
import { upsertPosts } from 'utils/notions'

type ThemeContent = {
  pageId: string
  theme: string
  title: string
  toggle: boolean
  createdAt: string
}

export type TextGroup = PostWithCount['theme']

export interface PostWithCount extends Post {
  _count: {
    comments: number
    likes: number
  }
}

interface posts {
  ok: boolean
  posts: PostWithCount[]
}

export const getStaticProps: GetStaticProps = async () => {
  const notion = createNotion()
  const PAGE_ID = process.env.NOTION_PAGE_ID!
  const mainPage = await asyncFetchNotionPage(notion, PAGE_ID)
  const themeNameGroup = getThemePageNameGroup(mainPage)
  const themePageGroup = await getThemePage(notion, themeNameGroup)

  const themeContent: ThemeContent[] = []
  themePageGroup.map(({ themePageBlocks, themeName }: ThemePage) =>
    themePageBlocks.results.map((study: UpdateBlockResponse) => {
      // const blockObjectResponse = study as BlockObjectResponse;
      const blockObjectResponse = study as any

      if (blockObjectResponse.type !== 'child_page') return null

      return themeContent.push({
        pageId: study.id,
        theme: themeName,
        title: blockObjectResponse.child_page.title,
        toggle: false,
        createdAt: blockObjectResponse.created_time,
      })
    })
  )

  upsertPosts(themeContent)

  const posts = await client.post.findMany({
    orderBy: [{ createdAt: 'desc' }],
    include: { _count: { select: { comments: true, likes: true } } },
  })

  const stringPosts = JSON.stringify(posts)

  return {
    props: { stringPosts },
  }
}

const THEME_GROUP = ['FrontEnd', 'Clean Code', 'BackEnd', 'UX/UI']

const Study: NextPage = ({ stringPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useSWR<posts>('/api/posts')
  const [postData, setPostData] = useState<PostWithCount[]>([])
  const [filteredIcon, setfilteredIcon] = useState<TextGroup[]>([])
  const [filteredList, setFilteredList] = useState<PostWithCount[]>([])

  const posts: PostWithCount[] = JSON.parse(stringPosts)

  const onToggleList = (item: TextGroup) => () => {
    filteredIcon.includes(item)
      ? setfilteredIcon(filteredIcon.filter((icon) => icon !== item))
      : setfilteredIcon(filteredIcon.concat(item))

    setPostData((prev) => prev.map((post) => (post.theme === item ? { ...post, toggle: !post.toggle } : post)))
  }

  useEffect(() => {
    if (data === undefined) return

    setPostData(data.posts)
  }, [data])

  useEffect(() => {
    setFilteredList(postData.filter((post) => post.toggle))
  }, [postData])

  return (
    <>
      <Head>
        <title>Study</title>
      </Head>

      <div className='flex flex-col px-2 py-2 space-y-8 border border-slate-400 rounded-md shadow-md'>
        <div className='flex justify-between px-4 space-x-2'>
          <div className='flex items-center text-center px-2 py-2 border border-slate-400 rounded-md shadow-md'>
            {filteredIcon.length === 0 ? (
              <span className='text-xl font-bold text-slate-400'>Study Theme</span>
            ) : (
              <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2 items-center'>
                {filteredIcon.map((theme) => (
                  <Icon key={theme} text={theme} onClick={onToggleList(theme)} />
                ))}
              </div>
            )}
          </div>

          <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
            {THEME_GROUP.map((theme) => (
              <Icon key={theme} text={theme} fullName onClick={onToggleList(theme)} />
            ))}
          </div>
        </div>

        <FilteredList filteredList={filteredList} />
      </div>

      <MemoList posts={posts} />
    </>
  )
}

export default Study
