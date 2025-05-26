export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="h-screen flex items-center justify-center">
        {children}
      </main>
  );
}
