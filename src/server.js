app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: message }],
  });
  res.json({ reply: completion.choices[0].message.content });
});
