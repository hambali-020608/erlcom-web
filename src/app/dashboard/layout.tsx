import DefaultLayout from "@/components/dashboard/Layouts/DefaultLayout"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <DefaultLayout>{children}</DefaultLayout>

  }