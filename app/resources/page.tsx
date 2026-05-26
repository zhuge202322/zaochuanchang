import Image from "next/image";
import Link from "next/link";
import { Download, FileText, ListChecks, Mail, Ruler } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Resources",
  description:
    "Product catalog download, RFQ checklist and selection notes for Jiabo marine instruments.",
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__image">
          <Image
            src="/images/products/product-24-a.jpg"
            alt="Magnetic float level gauge"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <p className="eyebrow">Resources</p>
          <h1>Catalog, selection data and RFQ preparation for marine product buyers</h1>
          <p>
            This page keeps downloadable and copy ready technical request information close to the product pages.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="Download and prepare"
            title="Fast materials for the first export conversation"
            text="The original product catalog file from the supplied package is preserved, and the page adds structured RFQ guidance for buyers."
          />
          <div className="resource-grid">
            <a className="resource-card" href="/downloads/jiabo-product-catalog.xls" download>
              <Download size={30} />
              <h3>Product catalog</h3>
              <p>Download the supplied Jiabo product catalog spreadsheet for model reference.</p>
            </a>
            <Link className="resource-card" href="/contact">
              <Mail size={30} />
              <h3>RFQ form</h3>
              <p>Send product type, model, range, medium, connection and quantity in one place.</p>
            </Link>
            <Link className="resource-card" href="/products">
              <FileText size={30} />
              <h3>Product pages</h3>
              <p>Use each detail page to collect application and specification notes before inquiry.</p>
            </Link>
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
