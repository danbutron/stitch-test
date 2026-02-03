const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
        aria-label="Hyper-realistic glowing cyberpunk burger with digital glitch effects"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCI20x2IzJTXSu0wupH7nbM6q1eGifYbCSTHuIepIchWKLoVHXwtIa7EkcvuldBB1j9WYCR_6AbHkvgssrOmhrtJG3Ax6fxhC0Ncmqn8E166-8NndgHNZCJFih4HBM7O0Ca_5D5066fnrCMwl1H-tqMyTjvmSf4iK-ixQlgrcZHTrDEc5NX4A4Wgvvm5fDiXKnBdF1O15CRRJfh8IEFImJNuKFqqYAU9w0ruAbVtm1mphGxwSkVIKPBJ-BljlL0nwdGQNyBLWbEV9uf')",
          filter: 'hue-rotate(180deg) contrast(1.2)',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 mb-6 border border-neon-pink text-neon-pink text-xs font-bold tracking-[0.3em] uppercase bg-neon-pink/10">
          System Online: Sector 7
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter glitch-text mb-6">
          UPGRADE <br /> YOUR <span className="text-primary">HUNGER.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light mb-10 leading-relaxed">
          Synthesized flavors for the modern renegade. <br />
          High-tech burgers, low-life prices. Fast-delivery drones active.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/80 text-white px-10 py-4 font-black uppercase tracking-widest text-lg transition-all transform hover:scale-105 active:scale-95">
            Consume Now
          </button>
          <button className="border border-white/20 hover:border-primary px-10 py-4 font-black uppercase tracking-widest text-lg transition-all backdrop-blur-sm">
            View Manifest
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
