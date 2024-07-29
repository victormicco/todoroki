export type ProjectType = "next" | "fastify";

export const templates: Record<ProjectType, { label: string }> = {
  next: { label: "Next.js" },
  fastify: { label: "Fastify" },
};
