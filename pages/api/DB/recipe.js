import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
  const notionApiUrl = `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DB_RECIPE_ID}/query`;

  const response = await fetch(notionApiUrl, {
    method: 'POST',
    headers: {
       'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
       'Notion-Version': '2022-06-28',
    },
  });

  const data = await response.json();
  res.status(response.status).json(data);
  } catch (error) {
    console.error('Error fetching recipe data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}