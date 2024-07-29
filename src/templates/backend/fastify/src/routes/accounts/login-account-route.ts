import type { FastifyReply, FastifyRequest } from "fastify";
import type { LoginAccountRequestDTO } from "../../dtos/account/login-ccount-request-dto";
import { makeLoginAccount } from "../../use-cases/factories/accounts/make-login-account";

export async function loginAccountRoute(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { email, password } = req.body as LoginAccountRequestDTO;

  try {
    const loginAccountUseCase = makeLoginAccount();
    const result = await loginAccountUseCase.execute({ email, password });
    return res.code(200).send(result);
  } catch (err) {
    console.log(err);
    return res.code(401).send({ error: "Invalid email or password" });
  }
}
