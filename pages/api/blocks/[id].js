import fetch from 'node-fetch';

export default async function handler(req, res) {
  const id = req.query.id;
  const notionApiUrlblock = `https://api.notion.com/v1/blocks/${id}/children?page_size=100`;

  try {
    const response = await fetch(notionApiUrlblock, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
        'Notion-Version': '2022-06-28',
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}