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
            src="/images/factory/factory-14.jpg"
            alt="Jiabo test room and control consoles"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <p className="eyebrow">Solutions</p>
          <h1>Application-Based Solutions for Shipboard Monitoring, Control & Alarm Systems</h1>
          <p>
            Built to help ship operators and system integrators achieve safer operations and smarter control.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell solution-overview">
          <div className="solution-overview__intro">
            <SectionHeading
              eyebrow="Marine applications"
              title="Application-Based Solutions for Shipboard Monitoring, Control & Alarm Systems"
              text="Discover integrated solutions for tanks, valves, machinery, and safety systems, all engineered for marine environments."
            />
          </div>
          <div className="solution-grid solution-grid--overview">
            {solutions.map((solution) => (
              <article className="solution-card" id={solution.slug} key={solution.slug}>
                <span className="solution-card__image">
                  <Image src={solution.image} alt={solution.title} fill sizes="(max-width: 1100px) 100vw, 50vw" />
                </span>
                <div className="solution-card__body">
                  <span className="eyebrow">{solution.title}</span>
                  <h3>{solution.title}</h3>
                  <p>{solution.subtitle}</p>
                  <ul>
                    {solution.checkpoints.slice(0, 2).map((checkpoint) => (
                      <li key={checkpoint}>{checkpoint}</li>
                    ))}
                  </ul>
                  <Link className="product-card__link" href="/contact">
                    View Solution <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {solutions.map((solution) => {
        const solutionProducts = getProductsBySlugs(solution.productSlugs).slice(0, 4);
        return (
          <section className="section solution-product-row" key={`${solution.slug}-products`}>
            <div className="shell solution-product-row__grid">
              <div className="solution-product-row__intro">
                <div>
                  <p className="eyebrow">{solution.slug.replaceAll("-", " ")}</p>
                  <h2>{solution.title}</h2>
                </div>
                <p>{solution.subtitle}</p>
                <Link className="btn btn--dark" href="/products">
                  View All Products <ArrowRight size={18} />
                </Link>
              </div>
              <div className="product-grid product-grid--solution">
                {solutionProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} variant="mini" />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section section--dark solution-benefits">
        <div className="shell solution-benefits__grid">
          {[
            ["Tailored Solutions", "Engineered to meet the unique needs of your vessel."],
            ["Marine-Grade Quality", "Built for performance in tough marine environments."],
            ["Global Support", "Fast response and reliable after-sales service."],
            ["Expert Team", "Experienced engineers supporting your success."],
          ].map(([title, text]) => (
            <article key={title}>
              <CheckCircle2 size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

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
              "Pre-configured and tested control cabinets",
              "Wiring and system integration per device list",
              "Reliable performance in marine environments",
              "Customized to your project needs",
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
