import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileText, Mail, ShieldCheck } from "lucide-react";
import { IconBadge } from "@/components/IconBadge";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  companyMetrics,
  companyProfile,
  getProductsByCategory,
  products,
} from "@/lib/site-data";

const categoryLimits: Record<string, number> = {
  "pressure-temperature": 6,
  "level-measurement": 10,
  "valves-actuators": 6,
  "detection-safety": 7,
  "control-alarm": 2,
};

export const metadata = {
  title: "Product Center",
  description:
    `Marine pressure, temperature, level measurement, valve, detection and control alarm products from ${companyProfile.shortName}.`,
};

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__image">
          <Image
            src="/images/factory/factory-19.jpg"
            alt="Marine control and inspection equipment"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <p className="eyebrow">Product center</p>
          <h1>Marine Instruments, Valves & Control Systems</h1>
          <p>
            High-quality marine instrumentation, valves and control systems trusted by shipbuilders
            and vessel operators globally.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href="/contact">
              <Mail size={18} /> Request a Quote
            </Link>
            <a className="btn btn--secondary" href="/downloads/jiabo-you-want-product-profile.pdf" download>
              <Download size={18} /> View Brochure
            </a>
          </div>
        </div>
      </section>

      <section className="metric-strip product-stats">
        <div className="shell">
          <div className="metric-strip__grid">
            {companyMetrics.map((metric) => (
              <div className="metric" key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <small>{metric.text}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section section--white product-directory">
        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category.slug).slice(0, categoryLimits[category.slug] ?? 6);
          return (
            <section className="category-section" id={category.slug} key={category.slug}>
              <div className="shell">
                <div className="category-top">
                  <div>
                    <span className="section-index">
                      {String(categories.findIndex((item) => item.slug === category.slug) + 1).padStart(2, "0")}
                    </span>
                    <IconBadge icon={category.icon} label={category.label} />
                    <h2>{category.label}</h2>
                  </div>
                  <p>{category.intro}</p>
                </div>
                <div className="product-grid product-grid--directory">
                  {categoryProducts.map((product, index) => (
                    <ProductCard key={product.slug} product={product} priority={index < 2} variant="mini" />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="section section--white product-resource-panel">
        <div className="shell product-resource-panel__grid">
          <div>
            <span className="section-index">06</span>
            <p className="eyebrow">Resources</p>
            <h2>Access product information, catalogs, and certificates.</h2>
            <ul className="resource-list">
              <li><FileText size={20} /> Product Brochures <small>Download detailed product catalogs.</small></li>
              <li><ShieldCheck size={20} /> Technical Documents <small>Access manuals and datasheets.</small></li>
              <li><Mail size={20} /> RFQ Support <small>Submit requirements for quick response.</small></li>
            </ul>
            <a className="btn btn--primary" href="/downloads/jiabo-you-want-product-profile.pdf" download>
              <Download size={18} /> Download Brochure
            </a>
          </div>
          <span className="product-resource-panel__cover">
            <Image src="/images/brochure-cover.jpg" alt="Jiabo marine instrument solutions brochure" fill sizes="(max-width: 860px) 100vw, 54vw" />
          </span>
        </div>
      </section>

      <section className="section section--dark why-strip">
        <div className="shell">
          <div>
            <span className="section-index">07</span>
            <p className="eyebrow">Why choose Jiabo</p>
            <h2>Quality products, reliable support, global trust.</h2>
          </div>
          <div className="why-strip__grid">
            {[
              ["Reliable Quality", "Strict quality control and testing for every product."],
              ["Global Experience", `${products.length}+ product records organized for export selection.`],
              ["Customization", "OEM and project matching services tailored to your needs."],
              ["Fast Support", "Professional response for model, medium and connection checks."],
            ].map(([title, text]) => (
              <article key={title}>
                <ShieldCheck size={30} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
