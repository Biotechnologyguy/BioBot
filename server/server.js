import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { CohereClient } from 'cohere-ai';
dotenv.config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from BioBot!',
  });
});

app.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await cohere.chat({
      message: prompt
    });
  
    res.status(200).send({
      bot: response.text,
    });
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send(error.response ? error.response.data : 'Something went wrong');
  }
});

app.listen(5000, () => console.log('AI server started'));
