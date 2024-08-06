import type { FastifyReply, FastifyRequest } from "fastify";
import type { RegisterAccountRequestDTO } from "../../dtos/account/register-account-dto";
import { makeRegisterAccount } from "../../use-cases/factories/accounts/make-register-account";

export async function registerAccountRoute(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { email, password, plan, name } = req.body as RegisterAccountRequestDTO;

  try {
    const registerAccountUseCase = makeRegisterAccount();
    const register = await registerAccountUseCase.execute({
      email,
      password,
      plan,
      name,
    });

    return res.code(200).send(register);
  } catch (err) {
    console.log(err);
    return res.code(500).send({ error: "Falha ao criar conta" });
  }
}
