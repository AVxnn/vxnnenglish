import Middleware from "@/features/middleware";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReduxProvider } from "@/store/provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "English App",
  description: "Сайт для изучения английского бесплатно",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <ReduxProvider>
          {children}
          <Middleware />
        </ReduxProvider>
      </body>
    </html>
  );
}
