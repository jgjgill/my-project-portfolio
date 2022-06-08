import client from '@libs/server/client'

type ThemeContent = {
  pageId: string
  theme: string
  title: string
  toggle: boolean
  createdAt: string
}

export const upsertPosts = (themePosts: ThemeContent[]) => {
  Promise.all(
    themePosts.map((post) =>
      client.post.upsert({
        where: { pageId: post.pageId },
        update: { title: post.title, theme: post.theme },
        create: post,
      })
    )
  )
}
