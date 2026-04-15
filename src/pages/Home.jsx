import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import heroData from '../data/hero.json';
import testimonialsData from '../data/testimonials.json';
import featuresData from '../data/features.json';

import heroFibersImg from '../assets/home-hero-coir-fibers-new.png';
import heroHuskImg from '../assets/home-hero-husk-new.png';
import plantationImg from '../assets/cocount tree image.jpeg';

import img120kg from '../assets/products/120kgfiberballing.png';
import img5kgChips from '../assets/products/5kgchips.png';
import img5kgCoco from '../assets/products/5kgcocopit.png';
import img650g from '../assets/products/650gcocopitblocks.png';
import imgCurling from '../assets/products/curlingcoirroll.png';
import imgGrowbags from '../assets/products/growbags.png';
import imgRopes from '../assets/products/twoplyyorncoirropes.png';

import gandhiImg from '../assets/gandhi.jpg';
import wangariImg from '../assets/wangari.jpg';
import paulImg from '../assets/paul.jpeg';

const clientAvatars = {
  'gandhi': gandhiImg,
  'wangari': wangariImg,
  'paul': paulImg,
};

const carouselItems = [
  { name: '120kg Fiber Baling', img: img120kg },
  { name: '5kg Chips', img: img5kgChips },
  { name: '5kg Coco Peat', img: img5kgCoco },
  { name: '650g Coco Peat Blocks', img: img650g },
  { name: 'Curling Coir Roll', img: imgCurling },
  { name: 'Grow Bags', img: imgGrowbags },
  { name: 'Two-Ply Yarn Coir Ropes', img: imgRopes },
];

export default function Home() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    const cards = tiltRefs.current.filter(Boolean);
    const handlers = cards.map((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) / 10;
        const rotateY = (x - centerX) / 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      };
      const onLeave = () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      return { card, onMove, onLeave };
    });
    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  const setTiltRef = (i) => (el) => {
    tiltRefs.current[i] = el;
  };

  // Duplicate carousel items for seamless infinite loop
  const doubledCarousel = [...carouselItems, ...carouselItems];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden pt-10">
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 text-left">
            <span className="inline-block py-1 px-4 mb-6 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-label uppercase tracking-widest">
              {heroData.tagline}
            </span>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-primary leading-[0.9] mb-8">
              {heroData.heading}{' '}
              <span className="text-secondary">{heroData.headingHighlight}</span>{' '}
              {heroData.headingEnd}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              {heroData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-primary bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-full font-bold shadow-[0_20px_40px_rgba(21,66,18,0.06)] hover:scale-105 transition-transform"
              >
                {heroData.ctaPrimary}
              </Link>
              <Link
                to="/about"
                className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
              >
                {heroData.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="organic-shape-1 w-full aspect-square relative overflow-hidden shadow-2xl">
              <img
                alt="Coir fiber texture"
                className="w-full h-full object-cover"
                src={heroFibersImg}
              />
            </div>
            {/* Husk Medallion */}
            <div className="absolute -bottom-8 left-1/3 -translate-x-1/2 w-36 h-36 husk-medallion border-[6px] border-surface bg-white shadow-xl z-20 hidden md:block">
              <img
                alt="Coconut husk"
                className="w-full h-full object-cover"
                src={heroHuskImg}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white bg-primary/40 backdrop-blur-sm px-2 py-1 rounded">
                  Pure Quality
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/10 organic-shape-2 -z-10 blur-3xl"></div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-16 flex justify-between items-end">
          <div>
            <span className="text-secondary font-label uppercase tracking-widest text-sm font-bold mb-4 block">
              The Carousel
            </span>
            <h2 className="text-5xl font-black font-headline tracking-tighter text-primary">
              Crafted Collections.
            </h2>
          </div>
          <Link
            to="/products"
            className="group flex items-center gap-2 text-primary font-bold transition-colors hover:text-secondary mb-1"
          >
            View All{' '}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="flex overflow-hidden perspective-container">
          <div className="flex animate-infinite-scroll whitespace-nowrap py-10">
            {doubledCarousel.map((item, i) => (
              <div key={i} className="inline-block px-4 group">
                <div
                  ref={setTiltRef(i)}
                  className="tilt-card w-[300px] bg-white rounded-3xl shadow-sm overflow-hidden border border-surface-container-low"
                >
                  <img
                    alt={item.name}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                    src={item.img}
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-primary font-headline">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section: The Living Loom */}
      <section className="py-32 bg-surface-container-low rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="col-span-2">
              <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-primary mb-6">
                {heroData.introHeading} <br />
                {heroData.introHeadingLine2}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                {heroData.introFeatures.map((feature, i) => (
                  <div key={i} className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        i === 0
                          ? 'bg-primary-container'
                          : 'bg-secondary-container'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined ${
                          i === 0
                            ? 'text-on-primary-container'
                            : 'text-on-secondary-container'
                        }`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-on-surface-variant">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
              <img
                alt="Sustainable coconut plantation"
                className="w-full h-full object-cover"
                src={plantationImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Bento Grid */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-secondary font-label uppercase tracking-widest text-sm font-bold mb-4 block">
              The Details
            </span>
            <h2 className="text-5xl font-black font-headline tracking-tighter text-primary">
              Engineered by Nature.
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-right md:text-left">
            Industrial-grade coir products designed for International elegance and
            commercial durability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Product: Grow Bags (Large Card) */}
          <div className="md:col-span-8 group bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-colors">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black font-headline text-primary mb-4">
                    Premium Grow Bags
                  </h3>
                  <p className="text-on-surface-variant mb-8">
                    Self-contained cultivation bags pre-filled with a compressed coco coir blend, providing an ideal, ready-to-use growing medium with superior aeration.
                  </p>
                </div>
                <Link
                  to="/products"
                  className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all"
                >
                  View Details{' '}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="h-64 sm:h-[360px] md:h-full max-h-[360px] overflow-hidden">
                <img
                  alt="Grow bags"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  src={imgGrowbags}
                />
              </div>
            </div>
          </div>

          {/* Why Choose Us (Content Highlight) */}
          <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-xl p-12 flex items-center">
            <div className="w-full">
              <h3 className="text-3xl font-black font-headline mb-4">
                {featuresData.heading}
              </h3>
              <p className="opacity-80 leading-relaxed mb-6 text-sm">
                {featuresData.description}
              </p>
              <ul className="space-y-4">
                {featuresData.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span
                      className="material-symbols-outlined text-secondary-fixed"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-bold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface-container-high/50 rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-primary">
            Voices of the Loom
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, i) => (
            <div
              key={i}
              className={`bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(21,66,18,0.06)] relative overflow-hidden ${
                testimonial.featured
                  ? 'transform md:scale-110 z-10'
                  : ''
              }`}
            >
              <div className="absolute -top-4 -right-4 text-primary/5 text-9xl font-black select-none pointer-events-none">
                &ldquo;
              </div>
              <div className="flex gap-1 mb-6 text-secondary">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface text-lg italic mb-8 leading-relaxed">
                &ldquo;{testimonial.message}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    src={clientAvatars[testimonial.avatar]}
                  />
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-8 bg-primary rounded-[3rem] p-16 text-center text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 organic-shape-2 translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter mb-8">
            Ready to Weave a Better World?
          </h2>
          <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses making the switch to carbon-neutral,
            high-performance coir alternatives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary px-10 py-5 rounded-full font-bold hover:bg-surface-container-lowest transition-colors"
            >
              Start Your Quote
            </Link>
            <Link
              to="/products"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Order Samples
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
