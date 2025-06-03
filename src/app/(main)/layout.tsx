'use client'

import SearchDrawer from "@/components/drawer/SearchDrawer";
import SideNav from "@/components/sidebar/sidenav";
import { SearchDrawerProvider } from "@/context/SearchDrawerContext";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row">
      <SearchDrawerProvider>
        <div className="fixed left-0 top-0 h-screen w-64 z-50 border-r bg-white">
          <SideNav />
        </div>

        {/* Контент — с отступом слева от SideNav */}
        <div className="ml-64 flex-1">{children}</div>

        {/* Drawer — фиксирован справа */}
        <div className="fixed right-0 top-0 h-screen z-50">
          <SearchDrawer />
        </div>
      </SearchDrawerProvider>
    </main>
  );
}
