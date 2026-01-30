import ProductCard from './ProductCard';

const products = [
  {
    id: 'glitch-burger',
    name: 'The Glitch Burger',
    price: '$12.99',
    description:
      'Double synthesized beef patty, neon-blue cheese, bio-tech pickles, and spicy data-leak sauce.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmGGWRpqXmuQMeC_73Tke34pFyUSgdI_lEEtjgcnSbndT8AZMWgZ6inD7Lmrg24wwr2n2rC-wPWDKglAloEPhBC39fnoz-2JzU_bxeDnz9cwNDFm7XswdXyxDBS_gRr5J6K7KDj03COL2K0LCq0cJlpDjsuYx4zgJkQqQ3z0l7lshFKLmy2EPLR5a2P3Y6foWi0xNEgfLYA4X3M92C3u373ikItJbBgBiKhTcXxWQUdAwJhvy4HC6gdUiOsYD2aRipRQZyhxIfr8Xl',
    imageAlt: 'Blue glowing neon burger with dark background',
    accent: 'primary' as const,
  },
  {
    id: 'neural-fries',
    name: 'Neural Fries',
    price: '$5.50',
    description:
      'Crispy cut chips infused with high-frequency salt and memory-enhancing spice blend.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuAiIPxXcwm_2L6ZVzrxv29QrbOpGmmTOXdgni0IREZq0CFlLzZnQK8RLi_A68PQGttJ2v7iYMqBwHQZksULFLCiGOtQ3BBrwnzEeikxLfbcXXT57i8oDYotshMwHG2x9JzZuXPymStPHIy12_ELmy2hJ2Omgf4mYc8onMgPqf9Fca5yB-eqw1c-G8SGdjw9drXhZv2suwkUZw8d_Ib13u6JoQt1JPin10o6Acr385GjT7Hd2ObRGNHe8N2gInseuZJ5JglDJB1pOG',
    imageAlt: 'Neon glowing fries in cyberpunk style',
    accent: 'neon-pink' as const,
  },
  {
    id: 'cyber-shake',
    name: 'Cyber-Shake',
    price: '$7.00',
    description:
      'Cold-pressed nutrient slurry with artificial vanilla and electric-blue currents.',
    accent: 'primary' as const,
    useSvg: true,
  },
];

const Inventory: React.FC = () => {
  return (
    <section className="py-20 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 border-l-4 border-primary pl-6">
          <div>
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-1">
              Current Inventory
            </p>
            <h2 className="text-4xl font-bold italic tracking-tight">THE DAILY SYNTHESIS</h2>
          </div>
          <span className="text-gray-600 font-mono text-xs hidden md:block">BUILD_VER: 2.0.77</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
