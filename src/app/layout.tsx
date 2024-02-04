import type { Metadata } from 'next';
import '@/styles/index.css';
import Dashboard from '@/components/templates/Dashboard';

export const metadata: Metadata = {
  title: 'Payroll App',
  description: 'Application to prepare Payroll',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
