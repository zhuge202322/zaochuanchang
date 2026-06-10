import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Download, FileText, ListChecks, Mail, Ruler } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { companyProfile } from "@/lib/site-data";

export const metadata = {
  title: "Resources",
  description:
    `Product brochure, company documents, RFQ checklist and selection notes for ${companyProfile.shortName}.`,
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="page-hero page-hero--resources">
        <div className="page-hero__image">
          <Image
            src="/images/factory/factory-19.jpg"
            alt="Marine inspection room and control equipment"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <div className="resources-hero__copy">
            <p className="eyebrow">Resources</p>
            <h1>Brochures, Documents & RFQ Support</h1>
            <p>
              Download product information, explore our company capabilities, or send us your
              requirements for faster product matching.
            </p>
          </div>
          <div className="resources-hero__panel" aria-label="Download brochure preview">
            <span className="resources-hero__tag">Product profile</span>
            <span className="resources-hero__cover">
              <Image
                src="/images/brochure-cover.jpg"
                alt="Jiabo product brochure cover"
                fill
                sizes="(max-width: 860px) 52vw, 250px"
              />
            </span>
            <a href="/downloads/jiabo-you-want-product-profile.pdf" download>
              <Download size={16} /> Download Brochure
            </a>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="Download and prepare"
            title="Fast materials for the first export conversation"
            text="The supplied PDF brochure is available for direct download, with company profile, product references and RFQ guidance kept close to the product pages."
          />
          <div className="resource-grid">
            <a className="resource-card" href="/downloads/jiabo-you-want-product-profile.pdf" download>
              <Download size={30} />
              <h3>Product Brochure</h3>
              <p>Download the supplied PDF for company introduction and full product reference.</p>
            </a>
            <Link className="resource-card" href="/contact">
              <Mail size={30} />
              <h3>RFQ form</h3>
              <p>Send product type, model, range, medium, connection and quantity in one place.</p>
            </Link>
            <a className="resource-card" href="/downloads/jiabo-you-want-business-license.pdf" download>
              <BadgeCheck size={30} />
              <h3>Business license</h3>
              <p>Download the supplied company license document for supplier verification.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="RFQ checklist"
            title="Information that shortens product matching"
            text="For vessel replacement work, a model plate photo and installation photo are often the fastest starting point."
          />
          <div className="resource-grid">
            <article className="resource-card">
              <ListChecks size={30} />
              <h3>Product identity</h3>
              <p>Product type, old model, nameplate photo, existing installation photo and required quantity.</p>
            </article>
            <article className="resource-card">
              <Ruler size={30} />
              <h3>Technical range</h3>
              <p>Pressure or level range, temperature, medium, tank height, flow range or alarm set point.</p>
            </article>
            <article className="resource-card">
              <FileText size={30} />
              <h3>Interface data</h3>
              <p>Thread, flange, signal output, voltage, cable entry, cabinet point list or project drawing.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
