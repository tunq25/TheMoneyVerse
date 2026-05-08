import type { Metadata } from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  metadataBase: new URL('https://the-money-verse.vercel.app/'),
  title: 'Vũ Trụ Đồng Tiền - TheMoneyVerse',
  description: 'ôn luyện trắc nghiệm, tư duy,..',
  icons: {
    icon: '/TheMoneyVerseLogo.png',
  },
  openGraph: {
    title: 'Vũ Trụ Đồng Tiền - TheMoneyVerse',
    description: 'ôn luyện trắc nghiệm, tư duy,..',
    images: ['/banner.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
