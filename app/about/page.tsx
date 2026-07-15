import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Ship, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { companyMetrics, companyProfile } from "@/lib/site-data";

export const metadata = {
  title: "About Jiabo You Want",
  description:
    `About ${companyProfile.name} and its marine accessories, automation instruments and overseas trade focus.`,
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__image">
          <Image
            src="/images/factory/factory-06.jpg"
            alt="Jiabo factory brand wall"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <p className="eyebrow">About Jiabo You Want</p>
          <h1>Marine Equipment Supply Backed by Manufacturing Expertise</h1>
          <p>
            We supply certified marine instruments, valves and control cabinets, with model matching
            and tailored solutions for customers worldwide.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell company-position">
          <div className="company-position__copy">
            <SectionHeading eyebrow="Company position" title={companyProfile.name} text={companyProfile.profile} />
            <Link className="btn btn--dark" href="/products">
              View product center <ArrowRight size={18} />
            </Link>
          </div>
          <div className="metric-strip__grid metric-strip__grid--about">
            {companyMetrics.map((metric) => (
              <div className="metric metric--light" key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <small>{metric.text}</small>
              </div>
            ))}
          </div>
          <div className="factory-showcase factory-showcase--about">
            <span className="image-frame image-frame--wide image-frame--caption">
              <Image
                src="/images/factory/factory-01.jpg"
                alt="Instrument assembly floor"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <span>
                <strong>Workshop & Assembly Area</strong>
                <small>Supporting product assembly, inspection and system testing.</small>
              </span>
            </span>
            <span className="image-frame image-frame--wide image-frame--caption">
              <Image
                src="/images/factory/factory-19.jpg"
                alt="Inspection and control console room"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <span>
                <strong>Inspection & Test Area</strong>
                <small>Dedicated testing and calibration environment for product verification.</small>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="What the site communicates"
            title="A Marine Equipment Supplier Backed by Manufacturing and Inspection Capabilities"
            text="Our export supply service is supported by product manufacturing experience, inspection resources, and application-focused product matching for marine projects."
          />
          <div className="resource-grid">
            <article className="resource-card">
              <Ship size={28} />
              <h3>Marine Equipment Export Supply</h3>
              <p>Jiabo You Want focuses on overseas market communication, sourcing coordination and export product delivery.</p>
            </article>
            <article className="resource-card">
              <Factory size={28} />
              <h3>Factory & Inspection Capability</h3>
              <p>Workshop and inspection images show the manufacturing and verification environment behind our supply service.</p>
            </article>
            <article className="resource-card">
              <Wrench size={28} />
              <h3>Standard Products and Customized Solutions</h3>
              <p>Standard products and customized marine accessories can be matched to specific client requirements.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
