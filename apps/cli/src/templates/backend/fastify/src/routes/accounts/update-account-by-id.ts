import type { FastifyReply, FastifyRequest } from "fastify";
import type { RegisterAccountRequestDTO } from "../../dtos/account/register-account-dto";
import { makeUpdateAccountById } from "../../use-cases/factories/accounts/make-update-account-by-id";

export async function updateAccountByIdRoute(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { id } = req.params as { id: string };
  const { email, password, plan, name } = req.body as RegisterAccountRequestDTO;
  try {
    const updateAccountByIdUseCase = makeUpdateAccountById();
    const list = await updateAccountByIdUseCase.execute({
      id,
      email,
      password,
      plan,
      name,
    });

    return res.code(200).send(list);
  } catch (err) {
    console.log(err);
    return res.code(500).send({ error: "Falha ao encontrar conta por ID" });
  }
}
