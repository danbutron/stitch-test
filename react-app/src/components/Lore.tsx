const Lore: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black italic mb-8 tracking-tighter">CYBER-LORE</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Established in the slums of <span className="text-primary">New Shibuya, 2077</span>,
                Neon Bite was born from a simple need: affordable nutrition for the chrome-enhanced
                working class.
              </p>
              <p>
                Our founder, a rogue biolab technician known only as 'The Chef', discovered a way to
                overclock flavor receptors using harmless electromagnetic frequencies embedded in our
                secret sauce.
              </p>
              <p className="border-l-2 border-primary pl-4 italic">
                "In a world of simulation, only the taste is real."
              </p>
              <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest mt-8 hover:gap-4 transition-all">
                Access Full Archives{' '}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/30 rotate-3"></div>
            <div className="absolute -inset-4 border border-neon-pink/30 -rotate-3"></div>
            <div
              className="relative aspect-video bg-cover bg-center grayscale hover:grayscale-0 transition duration-700 shadow-2xl"
              role="img"
              aria-label="Futuristic neon street alley with restaurant signs"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj0ih3IrrXR3G5AEzvZAhYQaEsVOH86nYQsLZf7qVxuPTxLiwIIyGQmtcDmfo2B7cSmxVsvnIE9bt2AP5NSERRXKU8tZkFHkFGKHLt_iFeZFda5BZpLJUAqjV-J9FDmUSjZASpxxXffJnJhMCADLlTMMvFdmQAATkO1ghzNRGuBGBXcIGMc3xn886Gp-Lm7DpblFIV-1WTkXKVxDGXrVEAs0QyT-zxh32oXU3w2RNjFsje0Xy38NIib9z6AW48wKqLHKUus1ND6fvM')",
              }}
            >
              <div className="absolute bottom-4 left-4 bg-background-dark/80 p-2 text-[10px] font-mono">
                ENCRYPTED_SIGNAL_STABLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lore;
