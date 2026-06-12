import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Database, Download, Images, ListChecks, Mail, Ruler, ShieldCheck, Zap } from "lucide-react";
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
            <div className="hero-mini-points">
              <span><Download size={20} /> Fast Access <small>Instant downloads</small></span>
              <span><ShieldCheck size={20} /> Trusted Info <small>Official documents</small></span>
              <span><Zap size={20} /> RFQ Support <small>Quick response</small></span>
            </div>
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
        <div className="shell resource-row">
          <SectionHeading
            eyebrow="Downloads for buyers"
            title="Fast materials for the first export conversation"
            text="Key materials to help you quickly understand our products, capabilities and support."
          />
          <div className="resource-grid resource-grid--row">
            <a className="resource-card" href="/downloads/jiabo-you-want-product-profile.pdf" download>
              <Images size={30} />
              <h3>Product Pictures</h3>
              <p>Download product and application photos for faster model discussion.</p>
              <span className="product-card__link">View & Download <ArrowLink /></span>
            </a>
            <Link className="resource-card" href="/contact">
              <Mail size={30} />
              <h3>RFQ Form</h3>
              <p>Send your inquiry quickly with product type, model, range and quantity.</p>
              <span className="product-card__link">Open Form <ArrowLink /></span>
            </Link>
            <a className="resource-card" href="/downloads/jiabo-you-want-business-license.pdf" download>
              <BadgeCheck size={30} />
              <h3>Business License</h3>
              <p>View and download our business license information for verification.</p>
              <span className="product-card__link">View Document <ArrowLink /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell resource-row resource-row--soft">
          <SectionHeading
            eyebrow="Help you match faster"
            title="Information that shortens product matching"
            text="Technical, identification and interface data support evaluation and decision-making."
          />
          <div className="resource-grid resource-grid--row">
            <article className="resource-card">
              <ListChecks size={30} />
              <h3>Product Identity</h3>
              <p>Learn model, series and key identification details for replacement work.</p>
              <span className="product-card__link">Explore <ArrowLink /></span>
            </article>
            <article className="resource-card">
              <Ruler size={30} />
              <h3>Technical Specs</h3>
              <p>Download specifications, diagrams and performance data for selection.</p>
              <span className="product-card__link">Download <ArrowLink /></span>
            </article>
            <article className="resource-card">
              <Database size={30} />
              <h3>Interface Data</h3>
              <p>Access interface dimensions and connection references for RFQs.</p>
              <span className="product-card__link">View Data <ArrowLink /></span>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArrowLink() {
  return <span aria-hidden="true">-&gt;</span>;
}
