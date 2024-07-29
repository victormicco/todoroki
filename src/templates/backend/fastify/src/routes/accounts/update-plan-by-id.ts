import type { FastifyReply, FastifyRequest } from "fastify";

import type { UpdateAccountRequestDTO } from "../../dtos/account/update-account-by-id-dto";
import type { UpdatePlanByIdRequestDTO } from "../../dtos/account/update-plan-by-id-dto";
import { makeUpdateAccountById } from "../../use-cases/factories/accounts/make-update-account-by-id";

export async function updatePlanByIdRoute(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { id } = req.params as { id: string };
  const { plan } = req.body as UpdatePlanByIdRequestDTO;
  try {
    const updatePlanByIdUseCase = makeUpdateAccountById();
    const list = await updatePlanByIdUseCase.execute({
      id,
      plan,
    } as UpdateAccountRequestDTO);

    return res.code(200).send(list);
  } catch (err) {
    console.log(err);
    return res.code(500).send({ error: "Falha ao encontrar conta por ID" });
  }
}
