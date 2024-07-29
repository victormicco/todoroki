import type { AccountRepository } from "../../repositories/account-repository";

export class ListAllAccountsUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute(): Promise<unknown> {
    const account = await this.accountRepository.listAllAccounts();
    return account;
  }
}
