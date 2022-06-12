import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'

import { PostContent, PostResponse, UserResponse } from 'types/study'

import { GetPageResponse, ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints'
import { asyncFetchNotionPage, createNotion, getBlockData } from '@libs/client/notion'
import { contentType } from '@libs/client/notionContentType'
import CommentList from '@components/study/commentList'
import PostHeader from '@components/study/postHeader'
import client from '@libs/server/client'

export const getStaticPaths: GetStaticPaths = async () => {
  const postsInfo = await client.post.findMany()

  const paths: { params: { id: string } }[] = []
  postsInfo.map((post) => {
    return paths.push({
      params: {
        id: post.id.toString(),
      },
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { id } }: any) => {
  const notion = createNotion()

  const postContent = await client.post.findUnique({
    where: { id: Number(id) },
  })

  const postComments = await client.comment.findMany({
    where: { postId: Number(id) },
  })

  const stringPostComments = JSON.stringify(postComments)

  const studyPage: GetPageResponse | any = await notion.pages.retrieve({
    page_id: postContent?.pageId!,
  })

  const blocks: ListBlockChildrenResponse = await asyncFetchNotionPage(notion, postContent?.pageId!)

  const studyPageTitle = studyPage.properties.title.title.map((title: any) => title.plain_text).join('')

  const studyPageContent = getBlockData(blocks)

  return {
    props: {
      post: {
        title: studyPageTitle,
        content: studyPageContent,
        comment: stringPostComments,
      },
    },
  }
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: user } = useSWR<UserResponse>('/api/users/me')

  const router = useRouter()

  const { data, mutate } = useSWR<PostResponse>(router.query.id ? `/api/posts/${router.query.id}` : null)

  return (
    <>
      <Head>
        <title>Study</title>
      </Head>

      <div className='px-2 py-2 space-y-2 border border-slate-400  rounded-md shadow-md'>
        <PostHeader title={post.title} user={user} isLiked={data?.isLiked} likeMutate={mutate} />

        <div className='px-4 py-4 min-h-[20rem] overflow-x-hidden whitespace-pre-wrap border border-slate-400 rounded-md shadow-md'>
          {post.content.map((item: PostContent, i: number) => contentType(item, i))}
        </div>
      </div>

      <CommentList user={user} comments={data?.comments} commentMutate={mutate} />
    </>
  )
}

export default Post
