import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-transparent backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          className="text-3xl font-bold bg-gradient-to-r from-red-800 via-red-500 to-red-400 inline-block text-transparent bg-clip-text"
          href={"/"}
        >
          Todoroki
        </Link>
      </div>
    </header>
  );
}
