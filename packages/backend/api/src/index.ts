import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import teamsRoutes from "./routes/teams";
import usersRoutes from "./routes/users";
import membersRoutes from "./routes/members";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("users", usersRoutes);
app.use("teams", teamsRoutes);
app.use("teams/:slug/members", membersRoutes);

app.listen(PORT, async () => {
  console.log(`Gateway API started on http://localhost:${PORT}`);
});
