import '@/app/ui/global.css';
import { jost } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}
