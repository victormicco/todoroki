import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { LoginAccountRequestDTO } from "../../dtos/account/login-ccount-request-dto";
import type { AccountRepository } from "../../repositories/account-repository";

export class LoginAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute({ email, password }: LoginAccountRequestDTO): Promise<unknown> {
    const account = await this.accountRepository.getAccountByEmail(email);

    if (!account) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, account.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
      { id: account.id, email: account.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1h" },
    );

    return { message: "Login successful", token, account };
  }
}
