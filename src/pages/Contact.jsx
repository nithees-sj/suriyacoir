export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen z-10 relative">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight mb-6">
              Get in <span className="text-primary italic">touch</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              Inquiries regarding bulk logistics, sustainability certifications, or high-precision coir processing.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-secondary-container p-3 rounded-xl text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface">Office Location</h3>
                <p className="text-on-surface-variant">Kallipatti, Tamil Nadu 642120<br/></p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary-container p-3 rounded-xl text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface">Direct Line</h3>
                <p className="text-on-surface-variant">+91 93844 49025</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary-container p-3 rounded-xl text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface">Official Mail</h3>
                <p className="text-on-surface-variant">suriyacoir@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary-container p-3 rounded-xl text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface">Owner Mail</h3>
                <p className="text-on-surface-variant">Suriyaks391@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-sm border border-outline-variant/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label className="block text-sm font-label font-bold text-primary mb-2 uppercase tracking-widest" htmlFor="name">Full Name</label>
                <input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/15 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40" id="name" name="name" placeholder="Johnathan Doe" type="text" />
              </div>
              <div className="group">
                <label className="block text-sm font-label font-bold text-primary mb-2 uppercase tracking-widest" htmlFor="email">Business Email</label>
                <input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/15 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40" id="email" name="email" placeholder="j.doe@company.com" type="email" />
              </div>
              <div className="group">
                <label className="block text-sm font-label font-bold text-primary mb-2 uppercase tracking-widest" htmlFor="message">Inquiry Details</label>
                <textarea className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/15 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 resize-none" id="message" name="message" placeholder="Briefly describe your requirements..." rows="4"></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary font-headline font-bold uppercase py-4 rounded-xl tracking-widest text-sm transition-transform active:scale-95 shadow-lg shadow-primary/20" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <section className="mt-32">
        <a 
          href="https://maps.app.goo.gl/ZSq2biyeqiGzLgPcA?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-3xl overflow-hidden shadow-2xl shadow-on-surface/5 h-[500px] relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            data-alt="Suriyacoir Location Satellite Map" 
            src="/satellite-map.png" 
            alt="Business Map Location" 
          />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-primary rounded-full animate-ping opacity-60"></div>
            <div className="relative w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <span className="absolute w-2 h-2 bg-white rounded-full"></span>
            </div>
            <div className="absolute -top-12 bg-surface-container-lowest text-on-surface font-bold text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none">
              Click to open in Google Maps
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface-container-lowest rotate-45"></div>
            </div>
          </div>

          <div className="absolute bottom-12 left-12 z-20 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-2xl max-w-xs border border-white/20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <span className="text-xs font-bold uppercase tracking-widest">Main Office</span>
            </div>
            <p className="text-on-surface font-bold text-lg mb-1">Suriyacoir's Outlet</p>
            <p className="text-on-surface-variant text-sm">Kallipatti, Tamil Nadu. Visit our manufacturing facility.</p>
          </div>
        </a>
      </section>
      
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container">
          <span className="material-symbols-outlined text-primary text-3xl mb-4">verified</span>
          <h4 className="font-headline font-bold text-xl mb-2 text-on-surface">Certified Quality</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">Every fiber batch is tested for structural integrity and biological purity.</p>
        </div>
        <div className="p-8 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container">
          <span className="material-symbols-outlined text-primary text-3xl mb-4">eco</span>
          <h4 className="font-headline font-bold text-xl mb-2 text-on-surface">Zero Waste</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">Our process repurposes 100% of the coconut husk into high-value ecology tech.</p>
        </div>
        <div className="p-8 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container">
          <span className="material-symbols-outlined text-primary text-3xl mb-4">rocket_launch</span>
          <h4 className="font-headline font-bold text-xl mb-2 text-on-surface">Rapid Logistics</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">Global supply network ensuring tier-1 delivery speeds across continents.</p>
        </div>
      </section>
    </main>
  );
}
