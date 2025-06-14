export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center p-8 sm:p-16 mt-44">
      {children}
    </section>
  );
}
