import cors from "@fastify/cors";
import Fastify from "fastify";
import { routes } from "./routes/routes";

export const app = Fastify();

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.register(routes);

const host = "0.0.0.0";

const url = await app.listen({
  port: 3333,
  host,
});

console.log(`Powered by Todoroki | Running on: ${url} 🚀`);
