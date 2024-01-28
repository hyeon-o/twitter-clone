import AccountLayout from "@/component/layout/account";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AccountLayout>{children}</AccountLayout>
  )
}