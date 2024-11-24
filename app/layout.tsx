import type { Metadata } from 'next';

import './globals.css';

import { AuthContext, ToasterContext } from './_context';

export const metadata: Metadata = {
  title: 'Pe4kin',
  description: 'Beautiful Online Messanger App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
