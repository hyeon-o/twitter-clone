import NavLayout from "@/components/layout/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <NavLayout title="Tweet">{children}</NavLayout>;
}
