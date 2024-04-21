import express from "express";
import hasher from "../utilities/hasher";

const router = express.Router();


/**
 * GET /proofs/:ballot_id
 * generate a ballot proof for a vote
 */
router.get("/", async (req, res) => {
  const { ballot_id } = req.params;
  const proof = hasher(ballot_id, process.env.BALLOT_SECRET);

  res.status(200).send("Hello from proofs");
});
