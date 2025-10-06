import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {getLocale} from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio with internationalization',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}

