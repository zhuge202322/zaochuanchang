"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Download, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { companyProfile } from "@/lib/site-data";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/manufacturing-quality", label: "Manufacturing" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Image src="/images/jiabo-you-want-mark.jpg" alt="JIABO YOU WANT logo" width={42} height={42} />
          </span>
          <span>
            <strong>{companyProfile.shortName}</strong>
            <small>{companyProfile.descriptor}</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-download" href="/downloads/jiabo-you-want-product-profile.pdf" download>
          <Download size={16} /> Product Brochure
        </a>
        <Link className="header-cta" href="/contact">
          <Mail size={16} /> RFQ
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href="/downloads/jiabo-you-want-product-profile.pdf" download onClick={() => setOpen(false)}>
            Product Brochure
          </a>
          <Link href="/contact" onClick={() => setOpen(false)}>
            RFQ Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
