import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, Mail } from "lucide-react";
import { IconBadge } from "@/components/IconBadge";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  categories,
  companyProfile,
  factoryGallery,
  getProductsBySlugs,
  processSteps,
  solutions,
} from "@/lib/site-data";

const featuredProducts = getProductsBySlugs([
  "vibration-proof-pressure-gauge",
  "compact-pressure-transmitter-yszk-01g-c",
  "magnetic-float-level-gauge",
  "pneumatic-butterfly-valve",
  "pipeline-oil-content-detector",
  "valve-remote-level-telemetry-system",
]);

const applications = [
  {
    code: "ENG",
    title: "Engine Room",
    text: "Pressure, temperature, alarm and cabinet feedback for machinery spaces.",
  },
  {
    code: "TNK",
    title: "Tank Level",
    text: "Visual gauges, float controllers and telemetry for liquid storage points.",
  },
  {
    code: "DCK",
    title: "Deck Pipeline",
    text: "Valves, junction boxes and field devices for exposed pipe routes.",
  },
  {
    code: "VRC",
    title: "Valve Remote",
    text: "Pneumatic, hydraulic and electric actuators tied into operation panels.",
  },
  {
    code: "ALM",
    title: "Alarm Safety",
    text: "Oil detection, door state and monitoring points for crew awareness.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__image">
          <Image
            src="/images/factory/factory-01.jpg"
            alt="Jiabo factory workshop with overhead crane"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell hero__content">
          <div className="hero__copy">
            <p className="eyebrow">{companyProfile.name}</p>
            <h1>Reliable Marine Automation Solutions, Tailored to Your Vessel</h1>
            <p>
              Custom-engineered instruments, sensors, valve remote control and monitoring systems
              for your vessel specifications and operating conditions.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/products">
                <ArrowRight size={18} /> View Products
              </Link>
              <Link className="btn btn--secondary" href="/contact">
                <Mail size={18} /> Request a Quote
              </Link>
              <a className="btn btn--secondary" href="/downloads/jiabo-you-want-product-profile.pdf" download>
                <Download size={18} /> Download Brochure
              </a>
            </div>
          </div>
          <div className="hero__rail">
            <div>
              <span>Product range</span>
              <strong>Marine instruments, sensors, valves and control cabinets</strong>
            </div>
            <div>
              <span>Certified products</span>
              <strong>Products with recognized industry certifications</strong>
            </div>
            <div>
              <span>Custom solutions</span>
              <strong>Model matching and tailored solutions based on photos, drawings and vessel requirements</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="metric-strip">
        <div className="shell metric-strip__grid">
          <div className="metric">
            <strong>10y</strong>
            <span>R&D and manufacturing experience behind the supply chain</span>
          </div>
          <div className="metric">
            <strong>47</strong>
            <span>Photographed catalog items in this build</span>
          </div>
          <div className="metric">
            <strong>23</strong>
            <span>Factory and inspection images prepared</span>
          </div>
          <div className="metric">
            <strong>OEM</strong>
            <span>Customized product support for overseas requirements</span>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="Product matrix"
            title="Marine instruments, sensors, valves and control cabinets"
            text="Browse products by application and quickly find the right solution for your vessel."
          />
          <div className="category-grid">
            {categories.map((category) => (
              <Link className="category-card" key={category.slug} href={`/products#${category.slug}`}>
                <span className="category-card__image">
                  <Image src={category.image} alt={category.label} fill sizes="(max-width: 860px) 100vw, 20vw" />
                </span>
                <span className="category-card__body">
                  <IconBadge icon={category.icon} label={category.label} />
                  <h3>{category.shortLabel}</h3>
                  <p>{category.eyebrow}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured products"
            title="Representative items from the customer image set"
            text="White background product photography is used like an engineering reference board, with model names, intended service and RFQ data points kept visible."
          />
          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index < 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell manufacturing-proof">
          <div className="manufacturing-proof__copy">
            <SectionHeading
              eyebrow="Manufacturing proof"
              title="A factory story built from real workshop and inspection photos"
              text="The website uses the supplied workshop, inspection and control console images to create an industrial trust path before the RFQ form."
            />
          </div>
          <ul className="proof-list manufacturing-proof__list">
            {processSteps.map((step) => (
              <li key={step}>
                <CheckCircle2 size={19} />
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <div className="factory-showcase factory-showcase--dark">
            <span className="image-frame image-frame--wide">
              <Image
                src={factoryGallery[2].image}
                alt={factoryGallery[2].title}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </span>
            <span className="image-frame image-frame--wide">
              <Image
                src={factoryGallery[3].image}
                alt={factoryGallery[3].title}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </span>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="System thinking"
            title="Solutions that connect products to shipboard locations"
            text="Each solution page points buyers from a vessel problem to the specific instruments, sensors, valves and cabinets in the product center."
          />
          <div className="solution-grid">
            {solutions.map((solution) => (
              <Link className="solution-card" href={`/solutions#${solution.slug}`} key={solution.slug}>
                <span className="solution-card__image">
                  <Image src={solution.image} alt={solution.title} fill sizes="(max-width: 1100px) 100vw, 32vw" />
                </span>
                <span className="solution-card__body">
                  <span className="eyebrow">Marine application</span>
                  <h3>{solution.title}</h3>
                  <p>{solution.subtitle}</p>
                  <span className="product-card__link">
                    Open solution <ArrowRight size={16} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <SectionHeading
            eyebrow="Application lanes"
            title="A navigation layer for buyers who start from vessel systems"
            text="The same products can be discovered through engine room, tank, deck pipeline, remote valve and alarm safety contexts."
          />
          <div className="app-lanes">
            {applications.map((application) => (
              <div className="app-lane" key={application.code}>
                <span>{application.code}</span>
                <strong>{application.title}</strong>
                <p>{application.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
