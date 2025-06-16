import { Menu } from "@/components/pages/dashboard/menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-screen items-center justify-center p-8 sm:p-16 mt-44">
      <Menu>
        <div className="flex flex-1">
          <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border p-2 md:p-10 bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
            {children}
          </div>
        </div>
      </Menu>
    </section>
  );
}
