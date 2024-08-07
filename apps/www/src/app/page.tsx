import { ArrowUpRight, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedShinyText from "../components/magicui/animated-shiny-text";
import { Button, ButtonStyles } from "../components/ui/button";
import { cn } from "../utils/cn";
import { LinkButton } from "../components/ui/link-button";
import { MacbookScroll } from "../components/ui/macbook-scroll";
import { Badge } from "../components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-64">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] ">
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 inline-block text-transparent bg-clip-text">
                    Todoroki
                  </span>{" "}
                  - Your CLI Companion
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Todoroki is a powerful CLI tool that helps you quickly
                  scaffold new projects with pre-built templates, manage your
                  templates, and customize your development environment.
                </p>
                <div className="flex gap-x-6">
                  <LinkButton href="/docs" prefetch={false}>
                    Get Started
                  </LinkButton>

                  <LinkButton
                    href="https://github.com/victormicco/todoroki"
                    prefetch={false}
                    variant="outline"
                    target="_blank"
                    className="flex gap-x-2 items-center"
                  >
                    <GithubIcon size={18} /> Github
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
          <MacbookScroll
            title={
              <span className="text-4xl">
                Don't waste your time to structure projects anymore <br />{" "}
                <span className="text-6xl">We do it for you 💫</span>
              </span>
            }
            src={`/code-example.png`}
            showGradient={false}
          />
        </div>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <svg
            viewBox="0 0 1440 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            className="absolute top-0 bg-transparent"
          >
            <path
              d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
              fill="#ff3333"
            ></path>
          </svg>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="z-10 flex min-h-[2rem] items-center justify-center">
                  <div
                    className={cn(
                      "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-none hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                  >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-500 hover:dark:text-neutral-400">
                      <span>🦞 What we deliver to you</span>
                    </AnimatedShinyText>
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Development Workflow
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Todoroki provides a suite of features to help you jumpstart
                  your projects and stay organized.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Project Scaffolding</h3>
                      <p className="text-muted-foreground">
                        Quickly generate new projects from pre-built templates,
                        saving you time and effort.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Template Management</h3>
                      <p className="text-muted-foreground">
                        Easily create, edit, and share your own custom templates
                        with your team.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Customizable Settings
                      </h3>
                      <p className="text-muted-foreground">
                        Tailor Todoroki to your preferences, from command
                        aliases to default project configurations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/todoroki.gif"
                width="550"
                height="310"
                alt="Todoroki"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-xl"
              />
            </div>
          </div>
        </section>
        <section id="install" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Installation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Todoroki Up and Running
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  It's easy to install Todoroki on your machine.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-4 flex flex-col justify-center items-center">
                <pre className="rounded-lg bg-muted p-4 text-left shadow-2xl">
                  <Image
                    src="/install.png"
                    width="550"
                    height="310"
                    alt="Todoroki"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-xl"
                    unoptimized
                  />
                </pre>

                <LinkButton
                  href={"/docs/introduction"}
                  className="flex gap-x-2 justify-center items-center"
                >
                  Documentation <ArrowUpRight size={18} />
                </LinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
