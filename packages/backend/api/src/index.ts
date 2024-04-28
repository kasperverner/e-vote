import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import teamsRoutes from "./routes/teams";
import membersRoutes from "./routes/members";
import electionsRoutes from "./routes/elections";
import userRoutes from "./routes/users";

dotenv.config({ override: true });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Healthcheck
app.get("/", async (req, res) => res.status(200).send({ message: "Gateway API is running" }));

app.use("/teams", teamsRoutes);
app.use("/teams", membersRoutes);
app.use("/teams", electionsRoutes);
app.use("/users", userRoutes);

app.listen(PORT, async () => {
  console.log(`Gateway API started on http://localhost:${PORT}`);
});
