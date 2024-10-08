#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import { type ProjectType, templates } from "./constants.js";
import { select, text } from "./lib/clack.js";
import { createFastifyProject, createNextProject } from "./templates/index.js";

const chalk = (await import("chalk")).default;

const program = new Command();

program
  .name("todoroki")
  .description("A CLI to create the best boilerplate for your project")
  .version("1.0.5");

program
  .command("create")
  .description("Create a new project")
  .action(async () => {
    const projectType = await select({
      message: "What type of project would you like to create?",
      options: Object.entries(templates).map(([key, value]) => ({
        label: value.label,
        value: key as ProjectType,
      })),
    });

    const projectName = await text({
      message: "Enter the name of your project",
      initialValue: "my-project",
    });

    console.log(
      chalk.green(`Creating a ${projectType} project named ${projectName}...`),
    );

    if (projectType === "next") {
      createNextProject(projectName);
    } else if (projectType === "fastify") {
      createFastifyProject(projectName);
    }
  });

program.parse(process.argv);
