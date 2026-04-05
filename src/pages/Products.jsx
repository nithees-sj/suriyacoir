import { useState } from 'react';
import productsData from '../data/products.json';

import geotextileImg from '../assets/geotextile-product.jpg';
import pithImg from '../assets/pith-blocks.jpg';
import artisanImg from '../assets/artisan-fiber.jpg';
import farmImg from '../assets/coconut-farm.jpg';
import textureImg from '../assets/coir-texture-macro.jpg';

const productImages = {
  '/src/assets/geotextile-product.jpg': geotextileImg,
  '/src/assets/pith-blocks.jpg': pithImg,
  '/src/assets/artisan-fiber.jpg': artisanImg,
  '/src/assets/coconut-farm.jpg': farmImg,
};

// Filter products for the products page (id >= 4)
const pageProducts = productsData.filter((p) => p.id >= 4);

const categories = ['All Materials', 'Raw Fiber', 'Woven Geotextiles', 'Pith Blocks', 'Husk Chips'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All Materials');

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="font-label text-xs font-bold tracking-[0.2em] text-primary/60 mb-4 block">
            CURATED COLLECTION
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-primary">
            Organic Fiber <br />
            Engineering.
          </h1>
        </div>
        <div className="max-w-xs text-on-surface-variant mb-4">
          <p>
            Precision-milled sustainable materials crafted for high-performance architectural and
            industrial applications.
          </p>
        </div>
      </header>

      {/* Category Tabs */}
      <section className="mb-16 overflow-x-auto">
        <div className="flex items-center space-x-12 border-b border-outline-variant/20 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-headline text-lg font-bold transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'text-primary relative after:absolute after:-bottom-[17px] after:left-0 after:w-full after:h-[2px] after:bg-primary'
                  : 'text-on-surface-variant/40 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="editorial-grid">
        {pageProducts.map((product) => {
          if (product.layout === 'products-feature') {
            return (
              <div key={product.id} className="col-span-12 md:col-span-8 group">
                <div className="relative overflow-hidden aspect-[16/9] mb-6 bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    src={productImages[product.image]}
                    alt={product.name}
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">{product.name}</h3>
                    <p className="font-body text-on-surface-variant mt-1">{product.description}</p>
                  </div>
                  {product.label && (
                    <span className="font-label text-sm font-bold tracking-widest text-primary">
                      {product.label}
                    </span>
                  )}
                </div>
              </div>
            );
          }

          if (product.layout === 'products-side') {
            return (
              <div key={product.id} className="col-span-12 md:col-span-4 group flex flex-col justify-end">
                <div className="relative overflow-hidden aspect-square mb-6 bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={productImages[product.image]}
                    alt={product.name}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">{product.name}</h3>
                    <p className="font-body text-on-surface-variant mt-1">{product.description}</p>
                  </div>
                </div>
              </div>
            );
          }

          if (product.layout === 'products-portrait') {
            return (
              <div key={product.id} className="col-span-12 md:col-span-4 group mt-12">
                <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    src={productImages[product.image]}
                    alt={product.name}
                  />
                </div>
                <div className="flex flex-col">
                  {product.label && (
                    <span className="font-label text-[10px] font-black tracking-[0.3em] text-primary/40 mb-2 uppercase">
                      {product.label}
                    </span>
                  )}
                  <h3 className="font-headline text-2xl font-bold text-primary">{product.name}</h3>
                  <p className="font-body text-on-surface-variant mt-1">{product.description}</p>
                </div>
              </div>
            );
          }

          if (product.layout === 'products-wide') {
            return (
              <div key={product.id} className="col-span-12 md:col-span-8 group mt-12 flex flex-col">
                <div className="relative overflow-hidden aspect-[16/9] mb-6 bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                    src={productImages[product.image]}
                    alt={product.name}
                  />
                </div>
                <div className="flex justify-between items-end border-t border-outline-variant/30 pt-6">
                  <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">{product.name}</h3>
                    <p className="font-body text-on-surface-variant mt-2 max-w-md">
                      {product.description}
                    </p>
                  </div>
                  <a className="flex items-center gap-2 font-headline font-bold text-primary group/link" href="#">
                    Specifications
                    <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">
                      arrow_right_alt
                    </span>
                  </a>
                </div>
              </div>
            );
          }

          return null;
        })}
      </section>

      {/* Texture Reveal Section */}
      <section className="mt-32 relative h-[600px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover scale-110"
            src={textureImg}
            alt="Coir fiber texture"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply transition-opacity duration-1000 hover:opacity-40"></div>
        </div>
        <div className="relative z-10 text-center px-8">
          <h2 className="font-headline text-4xl md:text-6xl font-black text-on-primary mb-6 tracking-tight">
            The Future is Organic.
          </h2>
          <button className="bg-surface text-primary px-10 py-4 font-label font-bold tracking-widest text-sm hover:scale-105 transition-transform duration-300">
            REQUEST PRODUCT CATALOGUE
          </button>
        </div>
      </section>
    </main>
  );
}
