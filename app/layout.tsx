import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { companyProfile } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${companyProfile.shortName} Marine Instruments`,
    template: `%s | ${companyProfile.shortName} Marine Instruments`,
  },
  description:
    `Marine pressure instruments, level measurement products, valve control systems and monitoring alarm cabinets from ${companyProfile.name}.`,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
