import fetch from 'node-fetch';

export default async function handler(req, res) {
  const notionApiUrl = `https://api.notion.com/v1/databases/1b83168b8cec4490abfe757fe53936bf/query`;

  // const notionApiUrl = `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DB_RECIPE_ID}/query`;
//       'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,

  const response = await fetch(notionApiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer secret_fWFtpdlz4LYHtsPSu09EladKSiPfFQkK8LkuDyguZJj`,
      'Notion-Version': '2022-06-28',
    },
  });
 
  const data = await response.json();
  res.status(response.status).json(data);
}