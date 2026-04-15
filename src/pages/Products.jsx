import { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

import img120kg from '../assets/products/120kgfiberballing.png';
import img5kgChips from '../assets/products/5kgchips.png';
import img5kgCoco from '../assets/products/5kgcocopit.png';
import img650g from '../assets/products/650gcocopitblocks.png';
import imgCurling from '../assets/products/curlingcoirroll.png';
import imgGrowbags from '../assets/products/growbags.png';
import imgRopes from '../assets/products/twoplyyorncoirropes.png';

const productImages = {
  '120kgfiberballing.png': img120kg,
  '5kgchips.png': img5kgChips,
  '5kgcocopit.png': img5kgCoco,
  '650gcocopitblocks.png': img650g,
  'curlingcoirroll.png': imgCurling,
  'growbags.png': imgGrowbags,
  'twoplyyorncoirropes.png': imgRopes,
};

function ProductCard({ product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative cursor-pointer z-10 hover:z-20 h-full"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
      title="Click to flip"
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        {/* FRONT FACE */}
        <div 
          className="relative flex flex-col h-full bg-surface-container-lowest hover:bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="aspect-[4/3] overflow-hidden bg-surface-container relative flex-shrink-0">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={productImages[product.image]}
              alt={product.name}
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
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
            <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="flex items-center justify-between mt-auto mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Click to view details</span>
              <span className="material-symbols-outlined text-sm text-primary transition-transform duration-300 group-hover:translate-x-1">flip</span>
            </div>

            <div className="pt-6 border-t border-outline-variant/10">
              <span className="text-primary font-headline font-extrabold">
                {product.label}
              </span>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 flex flex-col bg-surface-container-lowest hover:bg-surface-container-low rounded-xl overflow-y-auto overflow-x-hidden shadow-xl border border-outline-variant/20 p-6 sm:p-8"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
           <div className="flex justify-between items-start mb-6 border-b border-outline-variant/20 pb-4">
             <div>
               <h3 className="font-headline text-xl font-bold text-on-surface leading-tight mb-1">{product.name}</h3>
               <span className="text-xs font-bold font-label text-outline uppercase tracking-widest">Ref: {product.ref}</span>
             </div>
             <button onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }} className="w-8 h-8 flex items-center justify-center bg-surface-container text-on-surface rounded-full flex-shrink-0 hover:bg-surface-container-high transition-colors -mt-2 -mr-2">
               <span className="material-symbols-outlined text-sm">flip</span>
             </button>
           </div>
           
           <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-3">Specifications</h4>
           <div className="overflow-x-auto mb-6">
             <table className="w-full text-left text-xs border-collapse">
               <tbody>
                 {product.specs && Object.entries(product.specs).map(([key, value], idx) => (
                   <tr key={key} className={`border-b border-outline-variant/5 last:border-0 ${idx % 2 === 0 ? 'bg-surface-container/40' : ''}`}>
                     <th className="py-2.5 px-3 font-label font-bold text-on-surface-variant uppercase tracking-wide w-1/3 rounded-l">{key}</th>
                     <td className="py-2.5 px-3 text-on-surface font-body rounded-r">{value}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <p className="text-on-surface-variant text-xs font-body leading-relaxed mt-auto pt-4 border-t border-outline-variant/10">
             {product.description}
           </p>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productsData.filter((p) => {
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  });

  return (
    <>
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
          <p className="mt-8 text-lg md:text-l text-on-surface-variant max-w-md leading-relaxed font-body">
            Explore our premium range of coconut fiber products, custom-engineered for exceptional quality. Discover our latest offerings—from compressed coco peat blocks to heavy-duty coir ropes—and place your order today for sustainable, high-performance solutions.
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

      {/* Search Filtering */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex flex-wrap gap-4 items-center justify-end border-b border-outline-variant/15 pb-8">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-outline text-sm">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm font-body w-full md:w-64 placeholder:text-outline"
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
            <ProductCard 
              key={product.id} 
              product={product} 
            />
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
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] relative z-10">
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
    </>
  );
}
