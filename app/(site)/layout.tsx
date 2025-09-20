import type { Metadata } from "next";
import "../ui/globals.css";
import localFont from 'next/font/local';
import NavMenu from "@/components/Nav/NavMenu";
import Footer from "@/components/Footer/Footer";

// Configure the font with its source files, weights, and styles
const danaFont = localFont({
  src: [
    {
      path: '../../public/fonts/dana-regular.woff',
      weight: '400', // Specify weight for regular font
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-dana',
  
});
const yekanFont = localFont({
  src: [
    {
      path: '../../public/fonts/YekanBakh-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakh-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-yekan',
  
});

export const metadata: Metadata = {
  title: "AbarnoAkhtar",
  description: "Accounting and Management of finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${danaFont.variable} ${yekanFont.variable}`} >
      <body>
        <NavMenu />
        {children}
        <section className='bg-gray-100 flex items-center justify-center py-10'>
          <Footer />        
        </section>
      </body>
    </html>
  );
}
