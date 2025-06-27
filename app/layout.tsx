import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wormhole NTT UI',
  description: 'Native Token Transfer bridge interface for cross-chain token transfers',
  keywords: ['wormhole', 'ntt', 'bridge', 'cross-chain', 'token transfer', 'blockchain'],
  openGraph: {
    title: 'Wormhole NTT UI',
    description: 'Native Token Transfer bridge interface for cross-chain token transfers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wormhole NTT UI',
    description: 'Native Token Transfer bridge interface for cross-chain token transfers',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#78c4b6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}