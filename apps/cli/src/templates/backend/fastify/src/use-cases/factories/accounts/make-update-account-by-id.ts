import { PrismaAccountRepository } from "../../../repositories/prisma/prisma-account-repository";

import { UpdateAccountByIdUseCase } from "../../accounts-use-cases/update-account-by-id";

export function makeUpdateAccountById() {
  const accountRepository = new PrismaAccountRepository();

  const updateAccountByIdUseCase = new UpdateAccountByIdUseCase(
    accountRepository,
  );

  return updateAccountByIdUseCase;
}
