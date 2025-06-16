export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-screen items-center justify-center gap-y-8 p-8 sm:p-16 mt-44">
      {children}
    </section>
  );
}
