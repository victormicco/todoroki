import * as prompts from "@clack/prompts";

export async function text(options: prompts.TextOptions) {
  const result = await prompts.text(options);
  if (prompts.isCancel(result)) {
    prompts.cancel("Operation cancelled.");
    process.exit(0);
  }
  return result;
}

type Option = {
  value: string;
  label: string;
  hint?: string;
};

type SelectOptionsProps<Options extends Option[]> = {
  message: string;
  options: Options;
  initialValue?: string;
  maxItems?: number;
};

export async function select<Options extends Option[]>(
  options: SelectOptionsProps<Options>,
) {
  const result = await prompts.select(options);
  if (prompts.isCancel(result)) {
    prompts.cancel("Operation cancelled.");
    process.exit(0);
  }
  return result as Options[number]["value"];
}

export async function confirm(options: prompts.ConfirmOptions) {
  const result = await prompts.confirm(options);
  if (prompts.isCancel(result)) {
    prompts.cancel("Operation cancelled.");
    process.exit(0);
  }
  return result;
}

export { spinner } from "@clack/prompts";
