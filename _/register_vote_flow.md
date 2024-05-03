# Register vote flow

## 1) The Frontend sends a request to the backend to register a vote

```http
POST /api/election/:id/vote
HEADERS
    "Authorization": Bearer <token>
    "Content-Type": application/json
BODY
    {
        "proposition_id": <id>
    }
RESPONSE
    201 Created
    {
        "vote_id": <id>,
        "election_id": <id>
    }
```

## 2) The backend checks if the election exists

```typescript
const election_id = req.params.id;
const election = await db.election.findOne({ where: { id: election_id } });

if (!election) {
    res.status(404).send("Election not found");
    return;
}
```

## 3) The backend checks if the user is eligible to vote

```typescript
const user = await GetUser(req.headers.authorization);

if (!user) {
    res.status(401).send("Unauthorized");
    return;
}

const ballot = user.ballots.find((b) => b.electionId === election_id);

if (!ballot) {
    res.status(403).send("User is not eligible to vote in this election");
    return;
}
```

## 4) The backend checks if the user has already voted

```typescript

if (ballot.state != "PENDING") {
    res.status(400).send("User has already voted");
    return;
}
```

## 5) The backend checks if the proposition exists

```typescript
const proposition_id = req.body.proposition_id;
const proposition = await db.proposition.findOne({ where: { id: proposition_id } });

if (!proposition) {
    res.status(404).send("Proposition not found");
    return;
}
```

## 6) The backend sends a request to the proposition service to get the proposition proof

```typescript
const proposition_proof = await fetch("http://localhost:4003/api/proposition_proof", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization,
    },
    body: JSON.stringify({ election_id, proposition_id: proposition.id }),
});
```

## 7) The backend sends a request to the ballot service to get the ballot proof

```typescript
const ballot_proof = await fetch("http://localhost:4002/api/ballot_proof", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization,
    },
    body: JSON.stringify({ election_id, ballotId: ballot.id }),
});
```

## 8) The backend sends a request to the validation service to get the validation proof

```typescript
const validation_proof = fetch("http://localhost:4001/api/validation_proof", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization,
    },
    body: JSON.stringify({ proposition_proof, ballot_proof }),
});
```

## 9) The backend creates a vote

```typescript
const vote = await db.vote.create({ data: { election_id, ballot_proof, proposition_proof, validation_proof  } });
```

## 10) The backend sends the vote confirmation to the frontend

```typescript
res.status(201).json({ election_id, vote_id: vote.id });
```