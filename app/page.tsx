import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { IconBadge } from "@/components/IconBadge";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  categories,
  companyMetrics,
  companyProfile,
  factoryGallery,
  getProductsBySlugs,
  solutions,
  systemLanes,
} from "@/lib/site-data";

const featuredProducts = getProductsBySlugs([
  "vibration-proof-pressure-gauge",
  "compact-pressure-transmitter-yszk-01g-c",
  "magnetic-float-level-gauge",
  "pneumatic-butterfly-valve",
  "pipeline-oil-content-detector",
  "valve-remote-level-telemetry-system",
]);

export default function Home() {
  return (
    <main>
      <section className="hero hero--home">
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
            <p className="eyebrow">Reliable marine automation solutions</p>
            <h1>Reliable Marine Automation Solutions, Tailored to Your Vessel</h1>
            <p>
              Delivering precision instruments, valves, and control systems with reliable
              performance, global standards and trusted support worldwide.
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
          <div className="hero__metrics">
            {companyMetrics.map((metric) => (
              <div className="metric metric--transparent" key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <small>{metric.text}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell compact-split">
          <div className="matrix-intro">
            <SectionHeading
              eyebrow="Products & solutions"
              title="Marine instruments, sensors, valves and control cabinets"
              text="Precision products engineered to perform in the toughest marine environments."
            />
            <Link className="btn btn--primary" href="/products">
              Explore All Products <ArrowRight size={18} />
            </Link>
          </div>
          <div className="category-grid category-grid--home">
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

      <section className="section section--dark resource-band">
        <div className="shell resource-band__grid">
          <div>
            <p className="eyebrow">Resources</p>
            <h2>Brochures, Documents & RFQ Support</h2>
            <p>
              Download product information, explore our company capabilities, or send us your
              requirements for faster product matching.
            </p>
            <a className="btn btn--secondary" href="/downloads/jiabo-you-want-product-profile.pdf" download>
              <Download size={18} /> Download Brochure
            </a>
          </div>
          <span className="resource-band__cover">
            <Image src="/images/brochure-cover.jpg" alt="Jiabo product brochure cover" fill sizes="(max-width: 860px) 100vw, 44vw" />
          </span>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell manufacturing-proof">
          <div className="manufacturing-proof__copy">
            <SectionHeading
              eyebrow="Manufacturing story"
              title="A factory story built from real workshop and inspection photos"
              text="From assembly to inspection, every step is controlled with precision to ensure the quality and reliability you can trust."
            />
            <Link className="btn btn--dark" href="/manufacturing-quality">
              View Our Workshop <ArrowRight size={18} />
            </Link>
          </div>
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
            eyebrow="Application solutions"
            title="Solutions that connect products to shipboard locations"
            text="Built to help ship operators and system integrators across different marine environments."
          />
          <div className="solution-grid solution-grid--home">
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
                    View solution <ArrowRight size={16} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell featured-row">
          <SectionHeading
            eyebrow="Featured products"
            title="Selected Marine Equipment for Vessel Applications"
            text="Browse representative products with clear model details, intended applications and key RFQ information to support faster sourcing and quotation."
          />
          <div className="product-grid product-grid--featured">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index < 3} variant="mini" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell compact-split compact-split--dark">
          <SectionHeading
            eyebrow="System-based product navigation"
            title="Start from Shipboard Systems. Match the Right Marine Equipment."
            text="Browse the same product range through real shipboard applications, from engine room monitoring to tank level, deck pipeline, valve control and alarm safety systems."
          />
          <div className="app-lanes">
            {systemLanes.map((application) => (
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
