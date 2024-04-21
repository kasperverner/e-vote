import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, async () => {
  console.log(`Gateway API started on http://localhost:${PORT}`);
});
