import { PrismaAccountRepository } from "../../../repositories/prisma/prisma-account-repository";
import { GetAccountByIdUseCase } from "../../accounts-use-cases/get-account-by-id";

export function makeGetAccountById() {
  const accountRepository = new PrismaAccountRepository();

  const getAccountByIdUseCase = new GetAccountByIdUseCase(accountRepository);

  return getAccountByIdUseCase;
}
