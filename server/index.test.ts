import factory from "./factory";
import { describe, expect, it } from "bun:test";

import electionsRouter from "./routes/elections.test";
import membersRouter from "./routes/members.test";
import teamsRouter from "./routes/teams.test";

import ballotClient from "../services/ballot-service/client";
import propositionClient from "../services/proposition-service/client";
import validationClient from "../services/validation-service/client";

/**
 * The Hono application for the tests.
 */
const app = factory.createApp()

app
  .basePath("/api")
  .route("/teams", electionsRouter)
  .route("/teams", membersRouter)
  .route("/teams", teamsRouter);

const headers = {
  authorization: "bearer test_user_token",
};

// Test isAuthorized middleware
describe("Test isAuthorized without authorization header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test isAuthorized with invalid authorization header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
      headers: {
        authorization: "basic test_user_token",
      },
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test isAuthorized with valid authorization header", () => {
  it("Should return 200 Response", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });
});

// Test get teams endpoint with empty database
describe("Test get teams with with invalid authentication header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
      headers: {
        authorization: "basic test_user_token",
      },
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test get teams with with valid authentication header", () => {
  it("Should return 200 Response", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });

  it("Should return empty array", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data).toBeArrayOfSize(0);
  });
});

let team_id: string;
// Test create team endpoint
describe("Test create team with invalid authentication header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "POST",
      headers: {
        authorization: "basic test_user_token",
      },
      body: JSON.stringify({
        name: "Test Team",
      }),
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test create team with valid authentication header", async () => {
  let req: Request;

  let res: Response;

  it("Should return 201 Response", async () => {
    req = new Request("http://localhost:3000/api/teams", {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: "Test Team",
      }),
    });

    res = await app.fetch(req);

    expect(res.status).toBe(201);
  });

  let data: any
  it("Should return af team", async () => {
    data = await res.json();
    team_id = data.id;
    console.log('team', data)
    expect(data).toBeObject();
  });

  it("Should return team with correct format", async () => {
    expect(data).toContainKeys([
      "id",
      "name",
      "is_deleted",
      "created_at",
      "updated_at",
    ]);
  });

  it("Should return team with correct name", async () => {
    expect(data.name).toBe("Test Team");
  });
});

// Test get teams endpoint with team in database
describe("Test get teams with with invalid authentication header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
      headers: {
        authorization: "basic test_user_token",
      },
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test get teams with with valid authentication header", () => {
  it("Should return 200 Response", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });

  it("Should return 1 team", async () => {
    const req = new Request("http://localhost:3000/api/teams", {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();

    expect(data).toBeArrayOfSize(1);
  });
});

// Test get team endpoint
describe("Test get team with with invalid authentication header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers: {
        authorization: "basic test_user_token",
      },
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test get team with with valid authentication header", () => {
  it("Should return 200 Response", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });

  it("Should return team", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data).toBeObject();
  });

  it("Should return team with correct format", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data).toContainKeys([ "id", "name", "created_at", "member_count", "is_admin" ]);
  });

  it("Should return team with correct name", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data.name).toBe("Test Team");
  });

  it("Should return team with correct member count", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data.member_count).toBe(1);
  });

  it("Should return team with correct admin status", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data.is_admin).toBe(true);
  });

  it("Should return team with correct id", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data.id).toBe(team_id);
  });
});

// Test update team endpoint
describe("Test update team with invalid authentication header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "PUT",
      headers: {
        authorization: "basic test_user_token",
      },
      body: JSON.stringify({
        name: "Test Team Updated",
      }),
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test update team with valid authentication header", () => {
  it("Should return 200 Response", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        name: "Test Team Updated",
      }),
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(204);
  });
});

// Test get team endpoint after update
describe("Test get team with with invalid authentication header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers: {
        authorization: "basic test_user_token",
      },
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test get team with with valid authentication header", () => {
  it("Should return 200 Response", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });


  it("Should return team", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data).toBeObject();
  });

  it("Should return team with correct format", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data).toContainKeys([ "id", "name", "created_at", "member_count", "is_admin" ]);
  });

  it("Should return team with correct name", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data.name).toBe("Test Team Updated");
  });

  it("Should return team with correct member count", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data.member_count).toBe(1);
  });

  it("Should return team with correct admin status", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data.is_admin).toBe(true);
  });

  it("Should return team with correct id", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "GET",
      headers,
    });

    const res = await app.fetch(req);
    const data = await res.json();
    expect(data.id).toBe(team_id);
  });
});


// Test delete team endpoint
describe("Test delete team with invalid authentication header", () => {
  it("Should return 401 Response", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "DELETE",
      headers: {
        authorization: "basic test_user_token",
      },
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(401);
  });
});

describe("Test delete team with valid authentication header", () => {
  it("Should return 204 Response", async () => {
    const req = new Request(`http://localhost:3000/api/teams/${team_id}`, {
      method: "DELETE",
      headers,
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(204);
  });
});

// Intergration tests for proof services
describe("Test ballot client", () => {
  it("Should return 200 Response", async () => {
    const res = await ballotClient.api.proofs[":value"].$get({
      param: {
        value: team_id
      },
    });

    expect(res.status).toBe(200);
  });

  it("Should return a hash", async () => {
    const res = await ballotClient.api.proofs[":value"].$get({
      param: {
        value: team_id,
      },
    });

    const data = await res.json();
    expect(data.hash).toBeString();
  });
});

describe("Test proposition service proof generation", () => {
  it("Should return 200 Response", async () => {
    const res = await propositionClient.api.proofs[":value"].$get({
      param: {
        value: team_id,
      },
    });

    expect(res.status).toBe(200);
  });

  it("Should return a hash", async () => {
    const res = await propositionClient.api.proofs[":value"].$get({
      param: {
        value: team_id,
      },
    });

    const data = await res.json();
    expect(data.hash).toBeString();
  });
});

describe("Test validation service proof generation", () => {
  it("Should return 200 Response", async () => {
    const res = await validationClient.api.proofs[":first"][":second"].$get({
      param: {
        first: team_id,
        second: team_id
      },
    });

    expect(res.status).toBe(200);
  });

  it("Should return a hash", async () => {
    const res = await validationClient.api.proofs[":first"][":second"].$get({
      param: {
        first: team_id,
        second: team_id,
      },
    });

    const data = await res.json();
    expect(data.hash).toBeString();
  });
});
