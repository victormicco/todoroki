import type { Account } from "@prisma/client";
import type { RegisterAccountRequestDTO } from "../dtos/account/register-account-dto";

export interface AccountRepository {
  createAccount(data: RegisterAccountRequestDTO): Promise<Account>;
  listAllAccounts(): Promise<Account[]>;
  getAccountById(id: string): Promise<Account | null>;
  updateAccount(id: string, data: RegisterAccountRequestDTO): Promise<Account>;
  updatePlan(id: string, plan: number): Promise<Account>;
  getAccountByEmail(email: string): Promise<Account | null>;
}
