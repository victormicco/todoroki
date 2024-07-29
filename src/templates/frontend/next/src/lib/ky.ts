import ky from "ky";

import { env } from "@/constants/env.mjs";

export const apiExample = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 180000,
});
