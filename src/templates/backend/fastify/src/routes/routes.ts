import type { FastifyInstance } from "fastify";

import { getAccountByIdRoute } from "./accounts/get-account-by-id";
import { listAllAccountsRoute } from "./accounts/list-all-accounts";
import { registerAccountRoute } from "./accounts/register-account";
import { updateAccountByIdRoute } from "./accounts/update-account-by-id";
import { updatePlanByIdRoute } from "./accounts/update-plan-by-id";

import { loginAccountRoute } from "./accounts/login-account-route";

export function routes(
  app: FastifyInstance,
  _options: string,
  done: () => void
) {
  app.post("/signup", registerAccountRoute);
  app.post("/signin", loginAccountRoute);

  app.post("/accounts", registerAccountRoute);
  app.get("/accounts", listAllAccountsRoute);
  app.get("/accounts/:id", getAccountByIdRoute);
  app.put("/accounts/:id", updateAccountByIdRoute);
  app.patch("/accounts/:id", updatePlanByIdRoute);

  done();
}
