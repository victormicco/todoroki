import { apiExample } from "@/lib/ky";
import { GetAllExamplesResponse } from "./types";

export const exmpleApiService = {
  async getAllExamples() {
    const response = await apiExample.get(`/examples`, {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<GetAllExamplesResponse[]>();
    return data;
  },
};
