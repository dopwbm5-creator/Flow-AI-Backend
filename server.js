const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.json({
    message: "Flow AI Backend is running!",
    status: "OK"
  });
});

// API المحادثة
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      error: "Message is required"
    });
  }

  res.json({
    success: true,
    reply: `Flow AI received: ${message}`
  });
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Flow AI Backend running on port ${PORT}`);
});
