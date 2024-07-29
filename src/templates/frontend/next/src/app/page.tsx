import { CheckIcon, MountainIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />

          <span className="sr-only">Todoroki</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Components
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Deployment
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Supercharge Your Next.js Projects with{" "}
                  <span className="text-primary">Todoroki</span>
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Jumpstart your Next.js development with our feature-rich
                  template, packed with pre-built components, styling options,
                  and deployment workflows.
                </p>
                <div className="space-x-4">
                  <Button>Get Started</Button>
                  <Button variant={"secondary"}>Learn More</Button>
                </div>
              </div>
            </div>
            <img
              src="https://i.pinimg.com/originals/82/3a/39/823a39153369015da5958204d5b9a7b9.gif"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover pb-24"
            />
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elevate Your Next.js Development
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Todoroki NextJs template is designed to streamline your
                  development process, providing a solid foundation with
                  pre-built components, styling options, and deployment
                  workflows.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://i.pinimg.com/564x/c5/3b/fe/c53bfe39e8c2776d882e9ae0cbc0225e.jpg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Pre-built Components
                      </h3>
                      <p className="text-muted-foreground">
                        Jumpstart your development with a collection of
                        high-quality, customizable components using shadcn.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Styling Options</h3>
                      <p className="text-muted-foreground">
                        Easily apply your brand's styles with Tailwind CSS
                        integration and theme customization.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Deployment Workflows
                      </h3>
                      <p className="text-muted-foreground">
                        Streamline your deployment process with built-in support
                        for popular hosting platforms.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="components" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Pre-built Components
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Jumpstart Your Development
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Next.js template comes with a curated set of high-quality,
                  customizable components to help you build stunning user
                  interfaces faster based on shadcn.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Navigation</h3>
                      <p className="text-muted-foreground">
                        Responsive and accessible navigation menus, including
                        dropdowns and mega menus.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Forms</h3>
                      <p className="text-muted-foreground">
                        Beautifully designed form elements with built-in
                        validation and error handling.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Cards</h3>
                      <p className="text-muted-foreground">
                        Versatile card components for displaying content,
                        pricing, and more.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="https://i.pinimg.com/564x/9b/ee/23/9bee239f2734e9eb997905a8ab897da7.jpg"
                width="550"
                height="310"
                alt="Components"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section
          id="deployment"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Deployment
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Seamless Deployment Workflows
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Next.js template makes it easy to deploy your applications
                  to popular hosting platforms, ensuring a smooth and efficient
                  development lifecycle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://i.pinimg.com/564x/0b/a2/0d/0ba20dafb6bcd0692d0f43387bb5598d.jpg"
                width="550"
                height="310"
                alt="Deployment"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Vercel</h3>
                      <p className="text-muted-foreground">
                        Seamless deployment to Vercel with automatic builds and
                        previews.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Netlify</h3>
                      <p className="text-muted-foreground">
                        Deploy to Netlify with a single click and enjoy
                        automatic builds and hosting.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">AWS</h3>
                      <p className="text-muted-foreground">
                        Effortlessly deploy to AWS with our pre-configured
                        infrastructure templates.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Flexible Pricing Options
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your needs, whether you're a
                  solo developer or a growing team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    Perfect for individual developers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4 py-8">
                  <div className="text-4xl font-bold">$0</div>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="grid gap-2 text-left">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      5 projects
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      1 GB storage
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Community support
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>
                    Ideal for small to medium-sized teams.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4 py-8">
                  <div className="text-4xl font-bold">For free</div>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="grid gap-2 text-left">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Unlimited projects
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      10 GB storage
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Priority support
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>
                    Ideal for small to medium-sized teams.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4 py-8">
                  <div className="text-4xl font-bold">For free</div>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="grid gap-2 text-left">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Unlimited projects
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      10 GB storage
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Priority support
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
