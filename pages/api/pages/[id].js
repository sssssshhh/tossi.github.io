import fetch from 'node-fetch';

export default async function handler(req, res) {
  const id = req.query.id;
  const notionApiUrlpage = `https://api.notion.com/v1/pages/${id}`;

  try {
    const response = await fetch(notionApiUrlpage, {
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