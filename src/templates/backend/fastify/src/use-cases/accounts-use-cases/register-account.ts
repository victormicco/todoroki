import bcrypt from "bcrypt";
import type { RegisterAccountRequestDTO } from "../../dtos/account/register-account-dto";
import type { AccountRepository } from "../../repositories/account-repository";

export class RegisterAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute({
    email,
    password,
    plan,
    name,
  }: RegisterAccountRequestDTO): Promise<unknown> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const account = await this.accountRepository.createAccount({
      email,
      password: hashedPassword,
      plan,
      name,
    });

    return account;
  }
}
