import path from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import colors from "picocolors";

// Resolve __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chalk = (await import("chalk")).default;

const copyTemplate = (templatePath: string, destinationPath: string) => {
  try {
    fs.copySync(templatePath, destinationPath);
    console.log(colors.green(`Project created at ${destinationPath}`));
  } catch (err) {
    console.error(colors.red(`Failed to create project: ${err}`));
  }
};

export const createNextProject = (name: string) => {
  const templatePath = path.join(
    __dirname,
    "../../src/templates/frontend/next",
  );
  const destinationPath = path.join(process.cwd(), name);
  copyTemplate(templatePath, destinationPath);
};

export const createFastifyProject = (name: string) => {
  const templatePath = path.join(
    __dirname,
    "../../src/templates/backend/fastify",
  );
  const destinationPath = path.join(process.cwd(), name);
  copyTemplate(templatePath, destinationPath);
};
