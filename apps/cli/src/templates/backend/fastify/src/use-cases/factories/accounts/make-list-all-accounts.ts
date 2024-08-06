import { PrismaAccountRepository } from "../../../repositories/prisma/prisma-account-repository";
import { ListAllAccountsUseCase } from "../../accounts-use-cases/list-all-accounts";

export function makeListAllAccounts() {
  const accountRepository = new PrismaAccountRepository();

  const listAllAccountsUseCase = new ListAllAccountsUseCase(accountRepository);

  return listAllAccountsUseCase;
}
