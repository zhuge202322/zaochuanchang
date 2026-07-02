import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { factoryGallery, processSteps } from "@/lib/site-data";

const qualitySteps = [
  ...processSteps,
  "Ready for shipment and project support",
];

export const metadata = {
  title: "Manufacturing & Quality",
  description:
    "Factory workshop, inspection test room and assembly process for Jiabo marine instruments and control systems.",
};

export default function ManufacturingQualityPage() {
  return (
    <main>
      <section className="page-hero page-hero--deep">
        <div className="page-hero__image">
          <Image
            src="/images/factory/factory-09.jpg"
            alt="Jiabo instrument assembly floor"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <p className="eyebrow">Manufacturing & quality</p>
          <h1>Reliable Manufacturing, Inspection & System Testing for Marine Equipment</h1>
          <p>
            Our workshop supports product assembly, functional inspection, calibration checks, and
            system testing to help ensure stable performance in marine applications.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="Factory gallery"
            title="Workshop, Assembly & Inspection Capability"
            text="Photos show brand identity, assembly benches, control consoles, inspection areas and staged products for shipment."
          />
          <div className="factory-grid">
            {factoryGallery.map((item) => (
              <article className="factory-card" key={item.image}>
                <span className="factory-card__image">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 860px) 100vw, 33vw" />
                </span>
                <div className="factory-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Quality workflow"
            title="Quality Control Process for Export Orders"
            text="Our team confirms application details, product models, technical parameters, and inspection requirements before shipment."
          />
          <div className="process-grid">
            {qualitySteps.map((step, index) => (
              <div className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark inspection-band">
        <div className="shell split">
          <div>
            <SectionHeading
              eyebrow="Inspection culture"
              title="Dedicated Inspection and Testing Area"
              text="The inspection area supports product checks, control cabinet review, and system-level verification for marine instrumentation projects."
            />
          </div>
          <ul className="proof-list">
            {[
              "Separate inspection test room shown in factory images",
              "Control cabinets and level assemblies visible in test setup",
              "Workshop layout supports both component and system level production",
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <span className="inspection-band__image">
            <Image src="/images/products/product-46-c.jpg" alt="Control cabinet inspection wiring" fill sizes="(max-width: 860px) 100vw, 36vw" />
          </span>
        </div>
      </section>
    </main>
  );
}
