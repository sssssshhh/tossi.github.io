import fetch from 'node-fetch';

export default async function handler(req, res) {
  const notionApiUrlpage = `https://api.notion.com/v1/pages/aa90b0fd-84a8-4949-b41c-1af1efacd355/query`;
  const notionApiUrlblock = `https://api.notion.com/v1/blocks/aa90b0fd-84a8-4949-b41c-1af1efacd355/children?page_size=100`;

  const response = await fetch(notionApiUrlblock, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
      'Notion-Version': '2022-06-28',
    },
  });
 
  const data = await response.json();
  res.status(response.status).json(data);
}