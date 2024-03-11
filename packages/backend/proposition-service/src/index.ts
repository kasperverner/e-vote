import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`Proposition service started on http://localhost:${PORT}`);
});
