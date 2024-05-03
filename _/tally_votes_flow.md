# Tally votes flow

## 1) The Frontend sends a request to the backend to register a vote

```http
GET /api/election/:id/result
HEADERS
    "Authorization": Bearer <token>
RESPONSE
    200 Ok
    {
        "election_id": <id>,
        "propositions": [
            {
                "proposition_id": <id>,
                "votes": <votes>
            }
        ],
        "total_votes": <total_votes>
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

## 3) The backend checks if the user is eligible to see the result

```typescript
const user = await GetUser(req.headers.authorization);

if (!user) {
    res.status(401).send("Unauthorized");
    return;
}

const ballot = user.ballots.find((b) => b.electionId === election_id);

if (!ballot) {
    res.status(403).send("User is not eligible to see the result of this election");
    return;
}
```

## 4) The backend calls the validation service to verify that all votes are by valid ballots

```typescript

```

## 5) The backend calls the ballot service to verify that all votes have a valid ballot and no user has voted more than once

```typescript

```

## 6) The backend calls the proposition service to verify that all votes are for valid propositions

```typescript

```

## 7) The backend calls the proposition service to tally the votes and return the result

```typescript

```

## 8) The backend returns the result to the frontend

```typescript

```

## 9) This flow can be slow based on the number of votes and propositions, so this should be cached
