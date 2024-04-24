import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import teamsRoutes from "./routes/teams";
import usersRoutes from "./routes/users";
import membersRoutes from "./routes/members";
import electionsRoutes from "./routes/elections";

dotenv.config({ override: true });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/teams", teamsRoutes);
app.use("/teams", membersRoutes);
app.use("/teams", electionsRoutes);

app.listen(PORT, async () => {
  console.log(`Gateway API started on http://localhost:${PORT}`);
});
