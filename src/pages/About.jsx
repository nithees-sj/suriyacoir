import { Link } from 'react-router-dom';
import aboutData from '../data/about.json';

import ownerimage from '../assets/ownerimage.jpeg';

export default function About() {
  const { hero, mission, vision, founder, milestones } = aboutData;

  return (
    <main>
      {/* The Founder & Heritage: Asymmetric Editorial */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary-fixed opacity-20 rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <img
                  alt="Our Founder"
                  className="relative w-full aspect-square object-cover rounded-[3rem] shadow-xl"
                  src={ownerimage}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/50 mb-4 block">
                {founder.label}
              </label>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tighter leading-tight">
                {founder.heading}
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                {founder.description}
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-outline-variant/30">
                {founder.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-black text-secondary">{stat.value}</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-primary/20 pl-6 py-2 italic text-primary/80 text-xl font-medium">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* Milestones: Curved Timeline Layout */}
      <section className="py-32 bg-surface-container-highest/30 rounded-b-[5rem]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4">{milestones.heading}</h2>
            <p className="text-on-surface-variant">{milestones.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.items.map((item, i) => (
              <div
                key={i}
                className={`relative p-10 bg-surface-container-lowest rounded-[3rem] border border-outline-variant/10 shadow-sm hover:-translate-y-2 transition-transform ${
                  i === 1 ? 'md:mt-12' : ''
                }`}
              >
                <div
                  className={`absolute top-0 right-10 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${
                    item.color === 'primary'
                      ? 'bg-primary text-on-primary'
                      : 'bg-secondary text-on-secondary'
                  }`}
                >
                  {item.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Mission & Vision: Tonal Shift */}
      <section className="py-32 bg-surface-container-low rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="p-12 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">
                {mission.icon}
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">{mission.title}</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {mission.description}
              </p>
            </div>
            <div className="p-12 bg-tertiary-container text-on-tertiary-container rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-6">
                {vision.icon}
              </span>
              <h2 className="text-3xl font-bold mb-6">{vision.title}</h2>
              <p className="text-lg leading-relaxed opacity-90">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
