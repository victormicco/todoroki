import Fastify from "fastify";
import { describe, expect, it } from "vitest";
import { routes } from "../src/routes/routes";

describe("Account Routes", () => {
  const app = Fastify();

  app.register(routes);

  it("should register an account", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/account",
      payload: {
        name: "Test Account",
        email: "test@example.com",
      },
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      success: true,
      message: "Account registered successfully",
    });
  });
});
