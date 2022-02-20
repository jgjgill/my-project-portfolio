import { Client as notionClient } from '@notionhq/client';
import { ListBlockChildrenResponse, UpdateBlockResponse } from '@notionhq/client/build/src/api-endpoints';

interface ThemeName {
  id: string;
  themeName: string;
}

export interface ThemePage {
  themeName: any;
  themePageBlocks: ListBlockChildrenResponse;
}

export const createNotion = () => {
  const notion = new notionClient({
    auth: process.env.NOTION_TOKEN,
  });
  return notion;
};

export const fetchNotionPage = async (notion: notionClient, pageId: string) => {
  const pageData = await notion.blocks.children.list({
    block_id: pageId,
  });
  return pageData;
};

export const getThemePageNameGroup = (mainPage: ListBlockChildrenResponse) => {
  const themeNameGroup: ThemeName[] = [];
  mainPage.results.map((mainPageBlock: UpdateBlockResponse | any) => {
    if (mainPageBlock.type === 'child_page') {
      return themeNameGroup.push({
        id: mainPageBlock.id,
        themeName: mainPageBlock.child_page.title,
      });
    }
  });
  return themeNameGroup;
};

export const getThemePage = async (notion: notionClient, themeNameGroup: ThemeName[]) => {
  const themePageGroup: ThemePage[] = [];
  await Promise.all(
    themeNameGroup.map(async (themePageName) => {
      const themePage = await fetchNotionPage(notion, themePageName.id);
      themePageGroup.push({
        themeName: themePageName.themeName,
        themePageBlocks: themePage,
      });
    })
  );
  return themePageGroup;
};

export const getBlockData = (blocks: ListBlockChildrenResponse) => {
  const studyPageContent: any = [];

  blocks.results.map((block: UpdateBlockResponse | any) => {
    if (block.type === 'paragraph') {
      if (block.paragraph.text[0]?.plain_text) {
        studyPageContent.push({
          type: 'paragraph',
          text: block.paragraph.text[0].plain_text,
        });
      } else {
        studyPageContent.push({
          type: 'paragraph',
          text: '',
        });
      }
    }
    if (block.type === 'heading_2') {
      studyPageContent.push({
        type: 'heading_2',
        text: block.heading_2.text[0].plain_text,
      });
    }
    if (block.type === 'text') {
      studyPageContent.push({
        type: 'text',
        text: block.plain_text,
      });
    }
  });

  return studyPageContent;
};
