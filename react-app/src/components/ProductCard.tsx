interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  accent: 'primary' | 'neon-pink';
  useSvg?: boolean;
}

const accentClasses = {
  primary: {
    border: 'hover:border-primary',
    overlay: 'bg-primary/20',
    price: 'text-primary',
    button: 'border-primary/50 text-primary group-hover:bg-primary',
  },
  'neon-pink': {
    border: 'hover:border-neon-pink',
    overlay: 'bg-neon-pink/20',
    price: 'text-neon-pink',
    button: 'border-neon-pink/50 text-neon-pink group-hover:bg-neon-pink',
  },
};

const CyberShakeSvg: React.FC = () => (
  <svg
    className="w-[70%] h-[70%] text-primary neon-shake-glow"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 100 140"
    aria-label="Cyber shake cup icon"
  >
    <path d="M30 45 L70 45 L65 125 L35 125 Z" strokeLinejoin="round"></path>
    <path d="M30 45 C30 35, 70 35, 70 45" strokeLinecap="round"></path>
    <path d="M50 45 Q50 15 70 15" strokeLinecap="round"></path>
    <path d="M32 65 L68 65" opacity="0.4"></path>
    <path d="M34 85 L66 85" opacity="0.4"></path>
    <path d="M36 105 L64 105" opacity="0.4"></path>
    <circle cx="50" cy="40" fill="currentColor" r="1.5"></circle>
  </svg>
);

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  imageUrl,
  imageAlt,
  accent,
  useSvg = false,
}) => {
  const classes = accentClasses[accent];

  return (
    <article
      className={`group relative bg-white/5 border border-white/10 p-1 ${classes.border} transition-colors`}
    >
      {useSvg ? (
        <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] flex items-center justify-center p-12">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <CyberShakeSvg />
          </div>
          <div
            className={`absolute inset-0 ${classes.overlay} opacity-0 group-hover:opacity-100 transition-opacity`}
          ></div>
        </div>
      ) : (
        <div
          className="relative aspect-[4/5] overflow-hidden bg-center bg-cover"
          role="img"
          aria-label={imageAlt}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div
            className={`absolute inset-0 ${classes.overlay} opacity-0 group-hover:opacity-100 transition-opacity`}
          ></div>
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold uppercase tracking-tight">{name}</h3>
          <span className={`${classes.price} font-mono`}>{price}</span>
        </div>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        <button
          className={`w-full py-2 border ${classes.button} group-hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all`}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
