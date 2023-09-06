import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
  const notionApiUrl = `https://api.notion.com/v1/databases/1b83168b8cec4490abfe757fe53936bf/query`;

  const response = await fetch(notionApiUrl, {
    method: 'POST',
    headers: {
       'Authorization': `Bearer secret_fWFtpdlz4LYHtsPSu09EladKSiPfFQkK8LkuDyguZJj`,
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