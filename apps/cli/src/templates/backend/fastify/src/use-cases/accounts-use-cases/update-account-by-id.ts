import type { UpdateAccountRequestDTO } from "../../dtos/account/update-account-by-id-dto";
import type { AccountRepository } from "../../repositories/account-repository";

export class UpdateAccountByIdUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute({
    id,
    email,
    name,
    password,
    plan,
  }: UpdateAccountRequestDTO): Promise<unknown> {
    const updateAccountById = await this.accountRepository.updateAccount(id, {
      email,
      name,
      password,
      plan,
    });

    return updateAccountById;
  }
}
