import fetch from 'node-fetch';

export default async function handler(req, res) {
  const notionApiUrl = `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DB_STORY_ID}/query`;

  const response = await fetch(notionApiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
      'Notion-Version': '2022-06-28',
    },
  });

  const data = await response.json();
  res.status(response.status).json(data);
}