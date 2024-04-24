import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import proofRoutes from "./routes/proofs";
import resultRoutes from "./routes/results";

dotenv.config({ override: true });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/proofs", proofRoutes);
app.use("/results", resultRoutes);

app.listen(PORT, async () => {
  console.log(`Proposition service started on http://localhost:${PORT}`);
});
