import { Client as notionClient } from '@notionhq/client';
import {
  // BlockObjectResponse,
  ListBlockChildrenResponse,
  UpdateBlockResponse,
} from '@notionhq/client/build/src/api-endpoints';

interface ThemeName {
  id: string;
  themeName: string;
}

export interface ThemePage {
  themeName: string;
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
  mainPage.results.map((mainPageBlock: UpdateBlockResponse) => {
    // const blockObjectResponse = mainPageBlock as BlockObjectResponse;
    const blockObjectResponse = mainPageBlock as any;

    if (blockObjectResponse.type === 'child_page') {
      return themeNameGroup.push({
        id: mainPageBlock.id,
        themeName: blockObjectResponse.child_page.title,
      });
    }
  });
  return themeNameGroup;
};

export const getThemePage = async (
  notion: notionClient,
  themeNameGroup: ThemeName[]
) => {
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

interface StudyPageContent {
  type: string;
  text: string;
  annotations?: object;
}

export const getBlockData = (blocks: ListBlockChildrenResponse) => {
  const studyPageContent: StudyPageContent[] = [];

  blocks.results.map((block: UpdateBlockResponse) => {
    // const blockObjectResponse = block as BlockObjectResponse;
    const blockObjectResponse = block as any;

    if (blockObjectResponse.type === 'paragraph') {
      if (blockObjectResponse.paragraph.rich_text[0]?.plain_text) {
        studyPageContent.push({
          type: 'paragraph',
          text: blockObjectResponse.paragraph.rich_text[0].plain_text,
          annotations: blockObjectResponse.paragraph.rich_text[0].annotations,
        });
      } else {
        studyPageContent.push({
          type: 'paragraph',
          text: '',
        });
      }
    }

    if (blockObjectResponse.type === 'heading_2') {
      studyPageContent.push({
        type: 'heading_2',
        text: blockObjectResponse.heading_2.rich_text[0].plain_text,
      });
    }

    if (blockObjectResponse.type === 'heading_3') {
      studyPageContent.push({
        type: 'heading_3',
        text: blockObjectResponse.heading_3.rich_text[0].plain_text,
      });
    }

    if (blockObjectResponse.type === 'code') {
      studyPageContent.push({
        type: 'code',
        text: blockObjectResponse.code.rich_text[0].plain_text,
      });
    }
  });

  return studyPageContent;
};
