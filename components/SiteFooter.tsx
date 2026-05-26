import Link from "next/link";
import { Download, Mail, MapPin, Ship } from "lucide-react";

const links = [
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/manufacturing-quality", label: "Manufacturing" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand brand--footer" href="/">
            <span className="brand-mark">
              <Ship size={20} />
            </span>
            <span>
              <strong>JIABO</strong>
              <small>Marine Instruments</small>
            </span>
          </Link>
          <p>
            Taizhou Jiabo Instrument Technology Co., Ltd. supplies shipboard instruments,
            level control products, valve assemblies and monitoring cabinets for export projects.
          </p>
        </div>
        <div>
          <h3>Navigation</h3>
          <nav className="footer-links" aria-label="Footer navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>RFQ Notes</h3>
          <ul className="footer-notes">
            <li>Model or old part photo</li>
            <li>Medium, range and connection</li>
            <li>Quantity and vessel project stage</li>
          </ul>
        </div>
        <div>
          <h3>Project Desk</h3>
          <p className="footer-contact">
            <MapPin size={16} /> Taizhou, Jiangsu, China
          </p>
          <Link className="footer-action" href="/contact">
            <Mail size={16} /> Send inquiry
          </Link>
          <a className="footer-action" href="/downloads/jiabo-product-catalog.xls" download>
            <Download size={16} /> Product catalog
          </a>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>JIABO marine instrumentation website</span>
        <span>Built for industrial export product discovery</span>
      </div>
    </footer>
  );
}
