const MARQUEE_ITEMS = [
  'System Status: Hungry',
  'Delivery Drone Online',
  'Sector 7 Delay: 0ms',
  'Consume or be Consumed',
];

const MarqueeContent: React.FC = () => (
  <>
    {MARQUEE_ITEMS.map((item, index) => (
      <span key={index} className="flex items-center gap-8">
        <span>{item}</span>
        <span className="size-2 bg-background-dark rounded-full" aria-hidden="true" />
      </span>
    ))}
  </>
);

const Marquee: React.FC = () => (
  <div className="flex animate-marquee gap-8 items-center text-sm font-black uppercase tracking-[0.2em]">
    <MarqueeContent />
    <MarqueeContent />
    <MarqueeContent />
  </div>
);

export default Marquee;
