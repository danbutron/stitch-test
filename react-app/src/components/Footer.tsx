import Marquee from './Marquee';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-primary text-background-dark py-3 overflow-hidden whitespace-nowrap border-y border-white/20">
        <Marquee />
      </footer>
      <div className="bg-background-dark py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-gray-500 font-mono tracking-widest uppercase">
            © 2077 NEON BITE BURGERS INC. // ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a
              className="text-gray-500 hover:text-primary transition-colors uppercase text-xs font-bold"
              href="#"
            >
              Privacy.sys
            </a>
            <a
              className="text-gray-500 hover:text-primary transition-colors uppercase text-xs font-bold"
              href="#"
            >
              Terms.exe
            </a>
            <a
              className="text-gray-500 hover:text-primary transition-colors uppercase text-xs font-bold"
              href="#"
            >
              Support.log
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
