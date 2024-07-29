import type { UpdateAccountRequestDTO } from "../../dtos/account/update-account-by-id-dto";
import type { UpdatePlanByIdRequestDTO } from "../../dtos/account/update-plan-by-id-dto";
import type { AccountRepository } from "../../repositories/account-repository";

export class UpdatePlanByIdUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute({
    id,

    plan,
  }: UpdatePlanByIdRequestDTO): Promise<unknown> {
    const updateAccountById = await this.accountRepository.updatePlan(id, plan);

    return updateAccountById;
  }
}
