import contactData from '../data/contact.json';

import contactTextureImg from '../assets/contact-coir-texture.jpg';
import contactMapImg from '../assets/contact-map-bg.jpg';

export default function Contact() {
  const { hero, phone, address, email, logistics, inquiryTypes, textureImage, mapImage } = contactData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <main className="pt-32 pb-0">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="editorial-grid gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="inline-block text-xs text-primary tracking-[0.2em] font-bold mb-6">
              {hero.tagline}
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-primary leading-[0.9] tracking-tighter">
              {hero.heading} <br />
              <span className="text-outline-variant/60">{hero.headingHighlight}</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 pb-4">
            <p className="text-lg text-secondary leading-relaxed font-medium">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form Card */}
            <div className="flex-1 bg-surface-container-lowest p-12 lg:p-16 rounded-lg shadow-[0_20px_40px_-5px_rgba(26,28,27,0.04)]">
              <h2 className="text-3xl font-headline font-bold text-primary mb-12">
                Send a Message
              </h2>
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <input
                      className="peer w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary transition-all duration-300 text-on-surface"
                      id="name"
                      placeholder=" "
                      type="text"
                    />
                    <label
                      className="absolute left-0 top-3 text-secondary font-medium transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      className="peer w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary transition-all duration-300 text-on-surface"
                      id="email"
                      placeholder=" "
                      type="email"
                    />
                    <label
                      className="absolute left-0 top-3 text-secondary font-medium transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <select
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary transition-all duration-300 text-on-surface appearance-none"
                    id="subject"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Select Inquiry Type
                    </option>
                    {inquiryTypes.map((type, i) => (
                      <option key={i}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <textarea
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary transition-all duration-300 text-on-surface resize-none"
                    id="message"
                    placeholder=" "
                    rows="4"
                  ></textarea>
                  <label
                    className="absolute left-0 top-3 text-secondary font-medium transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                </div>
                <button
                  className="group flex items-center gap-4 bg-primary text-on-primary px-10 py-5 font-headline font-bold text-lg hover:bg-primary-container transition-all duration-500 rounded-sm"
                  type="submit"
                >
                  Dispatch Message
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">
                    arrow_forward
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info & Texture Section */}
            <div className="w-full lg:w-[400px] flex flex-col gap-8">
              {/* Info Bento */}
              <div className="bg-primary p-10 text-on-primary rounded-lg space-y-10">
                <div>
                  <span className="text-xs text-on-primary/60 tracking-[0.15em] font-bold block mb-4">
                    {phone.label}
                  </span>
                  <h3 className="text-2xl font-headline font-bold mb-2">{phone.number}</h3>
                  <p className="text-on-primary/70">{phone.hours}</p>
                </div>
                <div className="h-px bg-on-primary/10"></div>
                <div>
                  <span className="text-xs text-on-primary/60 tracking-[0.15em] font-bold block mb-4">
                    {address.label}
                  </span>
                  <p className="text-xl font-medium leading-relaxed">
                    {address.lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < address.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="h-px bg-on-primary/10"></div>
                <div>
                  <span className="text-xs text-on-primary/60 tracking-[0.15em] font-bold block mb-4">
                    {email.label}
                  </span>
                  <a
                    className="text-xl font-bold border-b border-on-primary/30 hover:border-on-primary transition-colors"
                    href={`mailto:${email.address}`}
                  >
                    {email.address}
                  </a>
                </div>
              </div>

              {/* Texture Card */}
              <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden group">
                <img
                  alt="Raw coir fiber texture"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={contactTextureImg}
                />
                <div className="absolute inset-0 texture-reveal-overlay mix-blend-multiply opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-on-primary font-headline text-2xl font-black leading-tight">
                    Raw Integrity. <br />
                    Refined Process.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-surface-dim grayscale contrast-125 brightness-75">
          <img
            alt="Map of Southern India"
            className="w-full h-full object-cover opacity-30"
            src={contactMapImg}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative pointer-events-auto">
            <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-full border-4 border-background animate-pulse shadow-2xl">
              <span
                className="material-symbols-outlined text-on-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
            </div>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-surface p-6 rounded-lg shadow-xl w-64 text-center">
              <h4 className="font-headline font-bold text-primary mb-1">Suriyacoir</h4>
              <p className="text-xs text-secondary mb-3">Industrial Hub Alpha, TN</p>
              <a className="text-xs font-bold text-primary underline underline-offset-4" href="#">
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Global Logistics Info */}
        <div className="absolute bottom-12 left-12 right-12 md:left-auto md:right-12 md:w-96 bg-[#ffffff]/90 backdrop-blur-xl p-8 rounded-lg shadow-2xl border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">public</span>
            <h3 className="text-xl font-headline font-bold text-primary">Global Reach</h3>
          </div>
          <div className="space-y-4">
            {logistics.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm font-medium text-secondary">{item.region}</span>
                <span className="text-xs font-bold text-primary bg-primary-fixed px-2 py-1 rounded">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
