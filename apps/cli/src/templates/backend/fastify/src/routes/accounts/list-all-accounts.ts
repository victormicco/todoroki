import type { FastifyReply, FastifyRequest } from "fastify";
import { makeListAllAccounts } from "../../use-cases/factories/accounts/make-list-all-accounts";

export async function listAllAccountsRoute(
  req: FastifyRequest,
  res: FastifyReply,
) {
  try {
    const listAllAccountsUseCase = makeListAllAccounts();
    const list = await listAllAccountsUseCase.execute();

    return res.code(200).send(list);
  } catch (err) {
    console.log(err);
    return res.code(500).send({ error: "Falha ao listar contas" });
  }
}
