export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col sm:flex-row w-screen items-center sm:items-start justify-center gap-y-8 p-8 sm:p-16 mt-44">
      {children}
    </section>
  );
}
