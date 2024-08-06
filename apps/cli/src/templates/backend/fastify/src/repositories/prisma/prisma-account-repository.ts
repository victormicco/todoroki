import type { Account, Prisma } from "@prisma/client";
import { prisma } from "../../db/prisma-service";
import type { AccountRepository } from "../account-repository";

export class PrismaAccountRepository implements AccountRepository {
  async createAccount(data: Prisma.AccountCreateInput): Promise<Account> {
    return await prisma.account.create({
      data,
    });
  }

  async updateAccount(
    id: string,
    data: Prisma.AccountUpdateInput,
  ): Promise<Account> {
    return await prisma.account.update({
      where: {
        id,
      },
      data,
    });
  }

  async updatePlan(id: string, plan: number): Promise<Account> {
    return await prisma.account.update({
      where: {
        id,
      },
      data: {
        plan,
      },
    });
  }

  async getAccountById(id: string): Promise<Account | null> {
    return await prisma.account.findUnique({
      where: {
        id,
      },
    });
  }

  async listAllAccounts(): Promise<Account[]> {
    return await prisma.account.findMany();
  }

  async getAccountByEmail(email: string): Promise<Account | null> {
    return await prisma.account.findUnique({
      where: {
        email,
      },
    });
  }
}
