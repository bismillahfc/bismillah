const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.DATABASE_ID;

app.post('/query', async (req, res) => {
  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      req.body,
      {
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message, detail: error.response?.data });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy attivo sulla porta ${PORT}`);
});
