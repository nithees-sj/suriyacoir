import { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

import growBagsImg from '../assets/prod-grow-bags.jpg';
import geotextilesImg from '../assets/prod-geotextiles.jpg';
import pelletsImg from '../assets/prod-pellets.jpg';
import cocoPithImg from '../assets/prod-coco-pith.jpg';
import bioPotsImg from '../assets/prod-bio-pots.jpg';
import customBlendImg from '../assets/prod-custom-blend.jpg';
import textureImg from '../assets/coir-texture-macro.jpg';

const productImages = {
  'prod-grow-bags': growBagsImg,
  'prod-geotextiles': geotextilesImg,
  'prod-pellets': pelletsImg,
  'prod-coco-pith': cocoPithImg,
  'prod-bio-pots': bioPotsImg,
  'prod-custom-blend': customBlendImg,
};

const categories = [
  'All Systems',
  'Hydroponic Substrates',
  'Erosion Control',
  'Industrial Geotextiles',
  'Custom Media',
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All Systems');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productsData.filter((p) => {
    const matchCategory =
      activeCategory === 'All Systems' || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="pt-8 pb-20">
      {/* Hero Section / Editorial Header */}
      <header className="max-w-7xl mx-auto px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest">
            Sustainable Engineering
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.9] text-on-surface">
            Precision <br />
            <span className="text-primary italic">Ecology.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-on-surface-variant max-w-md leading-relaxed font-body">
            Harnessing the structural integrity of coconut fiber through
            advanced modular manufacturing for global industrial applications.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start lg:items-end">
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <div className="w-4 h-1 bg-surface-container-high rounded-full"></div>
            <div className="w-4 h-1 bg-surface-container-high rounded-full"></div>
          </div>
          <p className="text-sm font-label text-outline text-right max-w-xs">
            Modular Growth Solutions for High-Precision Agriculture and
            Bio-Manufacturing.
          </p>
        </div>
      </header>

      {/* Category Filtering */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex flex-wrap gap-4 items-center justify-between border-b border-outline-variant/15 pb-8">
          <div className="flex gap-6 overflow-x-auto hide-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap font-headline font-bold text-sm transition-colors pb-2 px-1 ${
                  activeCategory === cat
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-outline text-sm">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm font-body w-40 md:w-64 placeholder:text-outline"
              placeholder="Search catalog..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={productImages[product.image]}
                  alt={product.name}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">
                    {product.name}
                  </h3>
                  <span className="text-xs font-bold font-label text-outline uppercase tracking-widest mt-1">
                    Ref: {product.ref}
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/10">
                  <span className="text-primary font-headline font-extrabold">
                    {product.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-outline-variant/30 mb-4 block">
              search_off
            </span>
            <p className="text-on-surface-variant text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </section>

      {/* Technical Excellence / Bento Feature Section */}
      <section className="max-w-7xl mx-auto px-8 mt-32 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-primary p-12 rounded-xl flex flex-col justify-end text-on-primary">
            <span
              className="material-symbols-outlined text-5xl mb-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            <h2 className="font-headline text-4xl font-extrabold mb-4">
              The Circular Advantage
            </h2>
            <p className="font-body text-on-primary opacity-80 leading-relaxed max-w-sm">
              Our closed-loop processing ensures every coconut husk is utilized
              to its maximum biological potential, reducing industrial waste by
              94% across the supply chain.
            </p>
          </div>
          <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-2">
              <span className="material-symbols-outlined text-primary">
                biotech
              </span>
              <h4 className="font-headline font-bold text-lg">
                Lab-Certified Quality
              </h4>
            </div>
            <p className="text-on-surface-variant text-sm font-body">
              Every batch undergoes rigorous ISO testing for EC levels, pH
              balance, and fiber consistency to ensure crop safety.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-headline font-extrabold text-primary mb-1">
              24M
            </span>
            <span className="text-xs font-label font-bold text-outline uppercase">
              Liters Water Saved
            </span>
          </div>
          <div className="bg-secondary-container p-8 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-headline font-extrabold text-on-secondary-container mb-1">
              100%
            </span>
            <span className="text-xs font-label font-bold text-on-secondary-container uppercase">
              Plastic Free
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
