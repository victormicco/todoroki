import { PrismaAccountRepository } from "../../../repositories/prisma/prisma-account-repository";

import { UpdatePlanByIdUseCase } from "../../accounts-use-cases/update-plan-by-id";

export function makeUpdatePlanById() {
  const accountRepository = new PrismaAccountRepository();

  const updatePlanByIdUseCase = new UpdatePlanByIdUseCase(accountRepository);

  return updatePlanByIdUseCase;
}
