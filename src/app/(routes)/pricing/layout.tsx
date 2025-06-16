export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-8 sm:p-16 mt-44">
      {children}
    </section>
  );
}
