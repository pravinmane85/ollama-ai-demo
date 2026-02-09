const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const OLLAMA_URL = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
const MODEL = process.env.MODEL_NAME || "llama3";

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
      model: MODEL,
      prompt: `
You are a professional customer support assistant.
Answer politely and clearly.

Customer message:
${userMessage}
      `,
      stream: false
    });

    res.json({ reply: response.data.response });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Ollama not responding" });
  }
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
