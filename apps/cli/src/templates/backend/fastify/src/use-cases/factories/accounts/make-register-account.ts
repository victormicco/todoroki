import { PrismaAccountRepository } from "../../../repositories/prisma/prisma-account-repository";
import { RegisterAccountUseCase } from "../../accounts-use-cases/register-account";

export function makeRegisterAccount() {
  const accountRepository = new PrismaAccountRepository();
  const registerAccountUseCase = new RegisterAccountUseCase(accountRepository);
  return registerAccountUseCase;
}
