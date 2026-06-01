import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getProductsBySlugs, solutions } from "@/lib/site-data";

export const metadata = {
  title: "Marine Solutions",
  description:
    "Shipboard tank level monitoring, valve remote control, machinery monitoring and pipeline detection solutions.",
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__image">
          <Image
            src="/images/factory/factory-19.jpg"
            alt="Jiabo test room and control consoles"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <p className="eyebrow">Solutions</p>
          <h1>Product combinations for shipboard monitoring, control and alarm work</h1>
          <p>
            Each solution connects vessel positions to the instruments, sensors, valves and cabinets already shown in the product center.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="Application packages"
            title="From tank and pipeline questions to a clear RFQ list"
            text="These solution blocks keep the website focused on how a shipyard, equipment integrator or maintenance buyer actually specifies parts."
          />
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article className="solution-card" id={solution.slug} key={solution.slug}>
                <span className="solution-card__image">
                  <Image src={solution.image} alt={solution.title} fill sizes="(max-width: 1100px) 100vw, 50vw" />
                </span>
                <div className="solution-card__body">
                  <span className="eyebrow">Marine solution</span>
                  <h3>{solution.title}</h3>
                  <p>{solution.subtitle}</p>
                  <ul>
                    {solution.checkpoints.map((checkpoint) => (
                      <li key={checkpoint}>{checkpoint}</li>
                    ))}
                  </ul>
                  <Link className="product-card__link" href="/contact">
                    Discuss this solution <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {solutions.map((solution) => {
        const solutionProducts = getProductsBySlugs(solution.productSlugs);
        return (
          <section className="section" key={`${solution.slug}-products`}>
            <div className="shell">
              <div className="category-top">
                <div>
                  <p className="eyebrow">Linked products</p>
                  <h2>{solution.title}</h2>
                </div>
                <p>
                  The recommended product set below is a starting point. Final selection should follow
                  drawings, model plates, medium data, range and connection requirements.
                </p>
              </div>
              <div className="product-grid">
                {solutionProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section section--dark">
        <div className="shell split">
          <div>
            <SectionHeading
              eyebrow="System delivery logic"
              title="Control cabinets stay tied to the field device list"
              text="For integrated systems, the website presents the cabinet, HMI and field layer as one project conversation instead of separating them into unrelated pages."
            />
          </div>
          <ul className="proof-list">
            {[
              "Valve feedback and tank level points listed before cabinet layout",
              "Sensor output and alarm logic confirmed before production",
              "Inspection records and product photos used in export communication",
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
