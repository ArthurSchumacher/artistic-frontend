import { Menu } from "@/components/pages/dashboard/menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-screen items-center justify-center p-8 sm:p-16 mt-44">
      <Menu>{children}</Menu>
    </section>
  );
}
