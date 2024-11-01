import express from "express";

const app = express();

const PORT = 3001;

app.use("/user", getUser);
app.listen(PORT, () => {
  console.log(`Runinging on PORT :${PORT}`);
});
