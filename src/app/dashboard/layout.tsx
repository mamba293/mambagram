import SideNav from "@/components/sidebar/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
      <div className="w-30 flex-none lg:w-64  md:border-r">
        <SideNav/>
      </div>
      {children} 
    </div>
  );
}
