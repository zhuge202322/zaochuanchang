import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site-data";

export function ProductCard({
  product,
  priority = false,
  variant = "default",
}: {
  product: Product;
  priority?: boolean;
  variant?: "default" | "compact" | "mini";
}) {
  return (
    <Link
      className={`product-card ${variant === "compact" ? "product-card--compact" : ""} ${
        variant === "mini" ? "product-card--mini" : ""
      }`}
      href={`/products/${product.category}/${product.slug}`}
    >
      <span className="product-card__media">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw"
          preload={priority}
          loading={priority ? "eager" : "lazy"}
        />
      </span>
      <span className="product-card__body">
        <span className="product-card__model">{product.model}</span>
        <strong>{product.name}</strong>
        <span className="product-card__summary">{product.summary}</span>
        {variant === "default" ? (
          <span className="product-card__tags">
            {product.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        ) : null}
        <span className="product-card__link">
          View product <ArrowRight size={16} />
        </span>
      </span>
    </Link>
  );
}
