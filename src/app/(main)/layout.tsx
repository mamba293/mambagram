import SideNav from "@/components/sidebar/sidenav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row">
      <div className="fixed h-screen">
        <SideNav />
      </div>
      <div className="ml-32">
        {children}
      </div>
    </main>
  );
}
