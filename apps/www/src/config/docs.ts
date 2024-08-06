import type { Icons } from "@/components/ui/icons";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/introduction",
    },
    {
      title: "Templates",
      href: "/docs/templates",
    },
  ],
  sidebarNav: [
    {
      title: "You can start here 🎯",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
      ],
    },
    {
      title: "Templates",
      items: [
        {
          title: "Next.js",
          href: "/docs/templates/nextjs",
        },
        {
          title: "Fastify",
          href: "/docs/templates/fastify",
        },
        {
          title: "Monorepo Next.js + Fastify",
          href: "/docs/templates/monorepo",
          label: "Soon",
          disabled: true,
        },
        {
          title: "Hono",
          href: "/docs/templates/hono",
          label: "Soon",
          disabled: true,
        },
        {
          title: "React Native",
          href: "/docs/templates/reactnative",
          label: "Soon",
          disabled: true,
        },
      ],
    },
  ],
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type NavLink = {
  title: string;
  href: string;
  disabled?: boolean;
  label?: string;
};
