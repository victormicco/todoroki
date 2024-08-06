import "@/styles/mdx.css";
import { DocsSidebar } from "./_components/docs-sidebar";
import Navbar from "./_components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="border-b">
      <Navbar />
      <div className="container md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <DocsSidebar />
        {children}
      </div>
    </div>
  );
}
