import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Ship, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { companyProfile } from "@/lib/site-data";

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
          <div className="factory-showcase factory-showcase--about">
            <span className="image-frame image-frame--wide">
              <Image
                src="/images/factory/factory-09.jpg"
                alt="Instrument assembly floor"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </span>
            <span className="image-frame image-frame--wide">
              <Image
                src="/images/factory/factory-19.jpg"
                alt="Inspection and control console room"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="What the site communicates"
            title="A supplier profile built around product truth and factory context"
            text="The website avoids generic corporate filler. It presents the brand through the catalog scope, vessel applications and visible manufacturing evidence."
          />
          <div className="resource-grid">
            <article className="resource-card">
              <Ship size={28} />
              <h3>Ship parts foreign trade</h3>
              <p>Jiabo You Want focuses on overseas market communication, sourcing coordination and export product delivery.</p>
            </article>
            <article className="resource-card">
              <Factory size={28} />
              <h3>Factory photography as proof</h3>
              <p>Workshop and inspection images are treated as core content rather than background decoration.</p>
            </article>
            <article className="resource-card">
              <Wrench size={28} />
              <h3>Standard and customized supply</h3>
              <p>Standard products and customized marine accessories can be matched to specific client requirements.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
