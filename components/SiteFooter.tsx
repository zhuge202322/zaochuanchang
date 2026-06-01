import Link from "next/link";
import Image from "next/image";
import { Download, Mail, MapPin } from "lucide-react";
import { companyProfile } from "@/lib/site-data";

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
              <Image src="/images/jiabo-you-want-mark.jpg" alt="JIABO YOU WANT logo" width={42} height={42} />
            </span>
            <span>
              <strong>{companyProfile.shortName}</strong>
              <small>{companyProfile.descriptor}</small>
            </span>
          </Link>
          <p>{companyProfile.profile}</p>
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
            <MapPin size={16} /> {companyProfile.address}
          </p>
          <Link className="footer-action" href="/contact">
            <Mail size={16} /> Send inquiry
          </Link>
          <a className="footer-action" href="/downloads/jiabo-you-want-product-profile.pdf" download>
            <Download size={16} /> Product brochure
          </a>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>{companyProfile.shortName} marine instrumentation website</span>
        <span>Built for industrial export product discovery</span>
      </div>
    </footer>
  );
}
