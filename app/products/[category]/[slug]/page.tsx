import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  getCategory,
  getProductByRoute,
  getRelatedProducts,
  products,
} from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = getProductByRoute(category, slug);

  if (!product) {
    return {
      title: "Product",
    };
  }

  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = getProductByRoute(category, slug);
  const productCategory = getCategory(category);

  if (!product || !productCategory) {
    notFound();
  }

  const gallery = product.gallery ?? [product.image];
  const related = getRelatedProducts(product);

  return (
    <main>
      <section className="detail-hero">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <Link href={`/products#${productCategory.slug}`}>{productCategory.shortLabel}</Link>
          </nav>
          <div className="detail-grid">
            <div className="detail-media">
              <Image
                src={product.image}
                alt={product.name}
                fill
                preload
                loading="eager"
                sizes="(max-width: 860px) 100vw, 44vw"
              />
            </div>
            <div className="detail-copy">
              <span className="detail-model">{product.model}</span>
              <h1>{product.name}</h1>
              <p>{product.summary}</p>
              <div className="tag-row">
                {product.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="hero__actions">
                <Link className="btn btn--primary" href="/contact">
                  <Mail size={18} /> Request quote
                </Link>
                <Link className="btn btn--secondary" href="/products">
                  Product center <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell split">
          <div>
            <p className="eyebrow">Application fit</p>
            <h2>Where this product belongs on board</h2>
            <p>
              The product detail page keeps the buying conversation focused on vessel position,
              connection data and the control or monitoring task behind the part.
            </p>
          </div>
          <div className="spec-grid">
            {product.applications.map((application) => (
              <div className="spec-card" key={application}>
                <span>Application</span>
                <strong>{application}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Technical RFQ points</p>
            <h2>Selection data to confirm before production</h2>
          </div>
          <div className="spec-grid">
            {product.specs.map((spec) => (
              <div className="spec-card" key={`${spec.label}-${spec.value}`}>
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Product photography</p>
            <h2>Images from the supplied customer package</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((image) => (
              <div className="gallery-image" key={image}>
                <span>
                  <Image src={image} alt={product.name} fill sizes="(max-width: 860px) 100vw, 33vw" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Related products</p>
              <h2>Same product family</h2>
            </div>
            <div className="product-grid">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
