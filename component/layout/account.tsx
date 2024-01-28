export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="grid place-items-center m-10">
        <div className="w-full max-w-xl">{children}</div>
      </div>
    </section>
  );
}
