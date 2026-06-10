import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconBadge } from "@/components/IconBadge";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  companyProfile,
  getProductsByCategory,
  products,
} from "@/lib/site-data";

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
            src="/images/products/product-46-a.jpg"
            alt="Marine control cabinet"
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
            Browse products by application and quickly find the right solution for your vessel.
          </p>
          <div className="category-nav" aria-label="Product categories">
            {categories.map((category) => (
              <a key={category.slug} href={`#${category.slug}`}>
                {category.shortLabel}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <div className="metric-strip__grid">
            <div className="metric">
              <strong>{categories.length}</strong>
              <span>Product families</span>
            </div>
            <div className="metric">
              <strong>{products.length}</strong>
              <span>Structured product entries</span>
            </div>
            <div className="metric">
              <strong>RFQ</strong>
              <span>Model, medium, range and connection path</span>
            </div>
            <div className="metric">
              <strong>XLS</strong>
              <span>Original catalog download preserved</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section section--white">
        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category.slug);
          return (
            <section className="category-section" id={category.slug} key={category.slug}>
              <div className="shell">
                <div className="category-top">
                  <div>
                    <IconBadge icon={category.icon} label={category.label} />
                    <h2>{category.label}</h2>
                  </div>
                  <p>{category.intro}</p>
                </div>
                <div className="product-grid">
                  {categoryProducts.map((product, index) => (
                    <ProductCard key={product.slug} product={product} priority={index < 2} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="section section--dark">
        <div className="shell split">
          <div>
            <p className="eyebrow">RFQ selection route</p>
            <h2>Start with a photo, model plate or system position</h2>
            <p>
              Ship repair buyers can send an old part photo. Newbuild buyers can send a drawing,
              signal list or vessel system location. The product center is designed to shorten that
              first technical conversation.
            </p>
          </div>
          <Link className="btn btn--primary" href="/contact">
            Send product inquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
