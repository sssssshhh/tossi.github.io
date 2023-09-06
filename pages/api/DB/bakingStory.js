import fetch from 'node-fetch';

export default async function handler(req, res) {
  const notionApiUrl = `https://api.notion.com/v1/databases/06227dd3d25449d48255757d57e9ed70/query`;

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