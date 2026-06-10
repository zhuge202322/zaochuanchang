import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { factoryGallery, processSteps } from "@/lib/site-data";

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
          <h1>Reliable Assembly, Inspection & System Testing</h1>
          <p>
            Our workshop supports product assembly, inspection and system testing to help ensure
            dependable performance in marine applications.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="Factory gallery"
            title="Visible production context behind the product range"
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
            title="A practical inspection path for export RFQ projects"
            text="The process is written for real sales and engineering communication: identify the duty point, confirm the model and test before packing."
          />
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell split">
          <div>
            <SectionHeading
              eyebrow="Inspection culture"
              title="The supplied factory photos include a dedicated inspection test area"
              text="That detail becomes an important trust signal for buyers comparing marine instrumentation suppliers."
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
        </div>
      </section>
    </main>
  );
}
