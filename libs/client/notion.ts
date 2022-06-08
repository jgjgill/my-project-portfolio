import { Client as NotionClient } from '@notionhq/client'
import { ListBlockChildrenResponse, UpdateBlockResponse } from '@notionhq/client/build/src/api-endpoints'

interface ThemeName {
  id: string
  themeName: string
}

export interface ThemePage {
  themeName: string
  themePageBlocks: ListBlockChildrenResponse
}

export const createNotion = () => {
  return new NotionClient({ auth: process.env.NOTION_TOKEN })
}

export const asyncFetchNotionPage = async (notion: NotionClient, pageId: string) => {
  const pageData = await notion.blocks.children.list({ block_id: pageId })
  return pageData
}

export const getThemePageNameGroup = (mainPage: ListBlockChildrenResponse) => {
  const themeNameGroup: ThemeName[] = []

  mainPage.results.map((mainPageBlock) => {
    const blockObjectResponse = mainPageBlock as any

    // const blockObjectResponse = mainPageBlock;
    // PartialBlockObjectResponse | BlockObjectResponse

    if (blockObjectResponse.type !== 'child_page') return null

    return themeNameGroup.push({
      id: mainPageBlock.id,
      themeName: blockObjectResponse.child_page.title,
    })
  })

  return themeNameGroup
}

export const getThemePage = async (notion: NotionClient, themeNameGroup: ThemeName[]) => {
  const themePageGroup: ThemePage[] = []

  Promise.all(
    themeNameGroup.map(async (themePageName) => {
      const themePage = await asyncFetchNotionPage(notion, themePageName.id)
      themePageGroup.push({
        themeName: themePageName.themeName,
        themePageBlocks: themePage,
      })
    })
  )
  return themePageGroup
}

interface StudyPageContent {
  type: string
  text: string
  annotations?: object
}

export const getBlockData = (blocks: ListBlockChildrenResponse) => {
  const studyPageContent: StudyPageContent[] = []

  blocks.results.map((block: UpdateBlockResponse) => {
    // const blockObjectResponse = block as BlockObjectResponse;
    const blockObjectResponse = block as any

    if (blockObjectResponse.type === 'paragraph' && blockObjectResponse.paragraph.rich_text[0]?.plain_text) {
      return studyPageContent.push({
        type: 'paragraph',
        text: blockObjectResponse.paragraph.rich_text[0].plain_text,
        annotations: blockObjectResponse.paragraph.rich_text[0].annotations,
      })
    }

    if (blockObjectResponse.type === 'paragraph') {
      return studyPageContent.push({
        type: 'paragraph',
        text: '',
      })
    }

    if (blockObjectResponse.type === 'heading_2') {
      return studyPageContent.push({
        type: 'heading_2',
        text: blockObjectResponse.heading_2.rich_text[0].plain_text,
      })
    }

    if (blockObjectResponse.type === 'heading_3') {
      return studyPageContent.push({
        type: 'heading_3',
        text: blockObjectResponse.heading_3.rich_text[0].plain_text,
      })
    }

    if (blockObjectResponse.type === 'code') {
      return studyPageContent.push({
        type: 'code',
        text: blockObjectResponse.code.rich_text[0].plain_text,
      })
    }

    if (blockObjectResponse.type === 'bulleted_list_item') {
      return studyPageContent.push({
        type: 'bulleted_list_item',
        text: blockObjectResponse.bulleted_list_item.rich_text[0].plain_text,
      })
    }

    return null
  })

  return studyPageContent
}
