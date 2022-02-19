import { Client as notionClient } from '@notionhq/client';

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

export const getBlockData = (blocks: any) => {
  const content: any = [];

  blocks.results.map((block: any) => {
    if (block.type === 'paragraph') {
      if (block.paragraph.text[0]?.plain_text) {
        content.push({
          type: 'paragraph',
          text: block.paragraph.text[0].plain_text,
        });
      } else {
        content.push({
          type: 'paragraph',
          text: '',
        });
      }
    }
    if (block.type === 'heading_2') {
      content.push({
        type: 'heading_2',
        text: block.heading_2.text[0].plain_text,
      });
    }
    if (block.type === 'text') {
      content.push({
        type: 'text',
        text: block.plain_text
      })
    }
  });

  return content;
};
