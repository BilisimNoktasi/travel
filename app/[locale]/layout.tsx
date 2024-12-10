import "react-perfect-scrollbar/dist/css/styles.css";
import "/public/assets/css/style.css";
import type { Metadata } from "next";
import { Manrope, Merienda } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import DependencyLayout from "./applayout";

const manrope_init = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--manrope",
  display: "swap",
});
const merienda_init = Merienda({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--merienda",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pusula Tatil - Multipurpose Travel Booking",
  description: "Multipurpose Travel Booking Next.js Template",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${manrope_init.variable} ${merienda_init.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <DependencyLayout>
          {children}
          </DependencyLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
