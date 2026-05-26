import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Ship, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "About Jiabo",
  description:
    "About Taizhou Jiabo Instrument Technology Co., Ltd. and its marine instrument product focus.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__image">
          <Image
            src="/images/factory/factory-06.jpg"
            alt="Taizhou Jiabo Instrument Technology brand wall"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <p className="eyebrow">About Jiabo</p>
          <h1>Marine instrument and control products from Taizhou, Jiangsu</h1>
          <p>
            The brand story is kept close to the supplied materials: real product photography, real factory scenes and a focused shipboard product range.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell split">
          <div>
            <SectionHeading
              eyebrow="Company position"
              title="Taizhou Jiabo Instrument Technology Co., Ltd."
              text="Jiabo supplies pressure, temperature, level, valve, detection and control alarm products for marine equipment builders, shipyards and maintenance replacement buyers."
            />
            <Link className="btn btn--dark" href="/products">
              View product center <ArrowRight size={18} />
            </Link>
          </div>
          <div className="image-stack">
            <span className="image-frame image-frame--tall">
              <Image src="/images/factory/factory-09.jpg" alt="Instrument assembly floor" fill sizes="(max-width: 860px) 50vw, 34vw" />
            </span>
            <span className="image-frame image-frame--short">
              <Image src="/images/factory/factory-19.jpg" alt="Inspection and control console room" fill sizes="(max-width: 860px) 50vw, 22vw" />
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
              <h3>Marine focused product scope</h3>
              <p>Instruments, level products, valves and alarm systems are organized by shipboard use.</p>
            </article>
            <article className="resource-card">
              <Factory size={28} />
              <h3>Factory photography as proof</h3>
              <p>Workshop and inspection images are treated as core content rather than background decoration.</p>
            </article>
            <article className="resource-card">
              <Wrench size={28} />
              <h3>Replacement and project RFQ fit</h3>
              <p>The inquiry path accepts model plates, old part photos, drawings and application notes.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
