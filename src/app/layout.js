import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'LAZYFOLKS',
  description: "India's Best Tech Company!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-text-color ${inter.className}`}>{children}</body>
    </html>
  );
}
