import AccountLayout from "@/components/layout/account";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AccountLayout>{children}</AccountLayout>
  )
}