import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/utils/cn";
import { Book, Github, Home, LibraryBig, Twitter, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"/"}>
                <Home className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"/docs/introduction"}>
                <Book className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Docs</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"https://www.npmjs.com/package/todoroki"}>
                <LibraryBig className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>npm/todoroki</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"https://github.com/victormicco/todoroki"}>
                <Github className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>github/todoroki</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"https://x.com/victormicco"}>
                <TwitterLogoIcon className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>x.com/victormicco</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
