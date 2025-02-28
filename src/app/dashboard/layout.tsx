'use client'
import DefaultLayout from "@/components/dashboard/Layouts/DefaultLayout";
import AuthUser from "@/lib/authUser";
import { useEffect, useState } from "react";

interface DashboardLayoutProps {
  user: React.ReactNode;
  admin: React.ReactNode;
}

export default function DashboardLayout({ user, admin }: DashboardLayoutProps) {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchUserRole() {
    try {
      const response = await AuthUser();
      setRole(response.role);
    } catch (error) {
      console.error("Error fetching user role:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserRole();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#4f2b14] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#EBB25B]"></div>
      </div>
    );
  }

  return (
    <DefaultLayout role={role}>
      
      {role === "student" && user}
      {role === "instructor" && admin}
    </DefaultLayout>
  );
}
