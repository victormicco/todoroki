import type { GetAccountByIdRequestDTO } from "../../dtos/account/get-account-by-id-dto";

import type { AccountRepository } from "../../repositories/account-repository";

export class GetAccountByIdUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute({ id }: GetAccountByIdRequestDTO): Promise<unknown> {
    const getAccountById = await this.accountRepository.getAccountById(id);

    return getAccountById;
  }
}
