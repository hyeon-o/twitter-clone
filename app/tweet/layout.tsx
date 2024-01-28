import NavLayout from "@/component/layout/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <NavLayout title="Tweet">{children}</NavLayout>;
}
