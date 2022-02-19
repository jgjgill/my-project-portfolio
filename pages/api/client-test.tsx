import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';
import { Client as notionClient } from '@notionhq/client';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new notionClient({
  auth: process.env.NOTION_TOKEN,
});

const getBlocks = async (blockId: string) => {
  console.log(blockId)
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const page = process.env.NOTION_PAGE_ID!;
  const blockData = await notion.blocks.children.list({
    block_id: page,
  })

  console.log(blockData)

  return res.json({ ok: 'good' });
};

export default handler;
