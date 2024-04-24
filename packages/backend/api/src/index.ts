import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import teamsRoutes from "./routes/teams";
import usersRoutes from "./routes/users";
import membersRoutes from "./routes/members";
import electionsRoutes from "./routes/elections";

dotenv.config({override: true});

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Removed the /users route as the functionality is implicit in the authentication middleware
 * app.use("/users", usersRoutes);
 */
app.use("/teams", teamsRoutes);
app.use("/teams/:team_id/members", membersRoutes);
app.use("/teams/:team_id/members/count", membersRoutes);
app.use("/teams/:team_id/elections", electionsRoutes);

app.listen(PORT, async () => {
  console.log(`Gateway API started on http://localhost:${PORT}`);
});
