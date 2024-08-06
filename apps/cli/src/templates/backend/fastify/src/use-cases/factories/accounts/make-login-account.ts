import { PrismaAccountRepository } from "../../../repositories/prisma/prisma-account-repository";
import { LoginAccountUseCase } from "../../accounts-use-cases/login-account";

export function makeLoginAccount() {
  const accountRepository = new PrismaAccountRepository();
  const loginAccountUseCase = new LoginAccountUseCase(accountRepository);
  return loginAccountUseCase;
}
