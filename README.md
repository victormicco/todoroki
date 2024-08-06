# Todoroki CLI

Todoroki is a Command Line Interface (CLI) tool to create the best boilerplate for your projects. It supports creating boilerplates for Next.js and Fastify projects.

![Todoroki](https://i.pinimg.com/564x/ac/af/62/acaf62c8fe194bd6a70baec50753cb3c.jpg)

## Run it

First, run the command below using the package manager you prefer.

Example

```bash
npx todoroki
```

You will see something like this:

```
Usage: todoroki [options] [command]

A CLI to create the best boilerplate for your project

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  create          Create a new project
  help [command]  display help for command
```

So to create you project you gotta run

```bash
npx todoroki create
```

## Features

- ✅: Provided
- ⌛️: In progress
- ⚠️: Partially provided (with some caveats)

### Front-end (Next.js)

| Feature             | Status                                               |
| ------------------- | ---------------------------------------------------- |
| Shadcn              | <span aria-label="Supported" role="img">✅</span>    |
| Tailwind            | <span aria-label="Supported" role="img">✅</span>    |
| Ky Http Requests    | <span aria-label="Supported" role="img">✅</span>    |
| .env validation     | <span aria-label="Supported" role="img">✅</span>    |
| Zod                 | <span aria-label="Supported" role="img">✅</span>    |
| Vitest              | <span aria-label="In Progress" role="img">⌛️</span> |
| Biome               | <span aria-label="Supported" role="img">✅</span>    |
| Variables of Colors | <span aria-label="Supported" role="img">✅</span>    |

### Back-end (Fastify)

| Feature                          | Status                                            |
| -------------------------------- | ------------------------------------------------- |
| Biome                            | <span aria-label="Supported" role="img">✅</span> |
| Prisma                           | <span aria-label="Supported" role="img">✅</span> |
| Vitest                           | <span aria-label="Supported" role="img">✅</span> |
| docker-compose example           | <span aria-label="Supported" role="img">✅</span> |
| S.O.L.I.D example implementation | <span aria-label="Supported" role="img">✅</span> |
