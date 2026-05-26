"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Ship, X } from "lucide-react";
import { useState } from "react";

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
            <Ship size={21} />
          </span>
          <span>
            <strong>JIABO</strong>
            <small>Marine Instruments</small>
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
          <Link href="/contact" onClick={() => setOpen(false)}>
            RFQ Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
