import type { FastifyReply, FastifyRequest } from "fastify";
import { makeGetAccountById } from "../../use-cases/factories/accounts/make-get-account-by-id";

export async function getAccountByIdRoute(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { id } = req.params as { id: string };
  try {
    const getAccountByIdUseCase = makeGetAccountById();
    const list = await getAccountByIdUseCase.execute({ id });

    return res.code(200).send(list);
  } catch (err) {
    console.log(err);
    return res.code(500).send({ error: "Falha ao encontrar conta por ID" });
  }
}
