import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const content = marquee.innerHTML;
      marquee.innerHTML += content;
    }
  }, []);

  return (
    <div ref={marqueeRef} class="flex animate-marquee gap-8 items-center text-sm font-black uppercase tracking-[0.2em]">
        <span>System Status: Hungry</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>Delivery Drone Online</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>Sector 7 Delay: 0ms</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>Consume or be Consumed</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>System Status: Hungry</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>Delivery Drone Online</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>Sector 7 Delay: 0ms</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>Consume or be Consumed</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>System Status: Hungry</span>
        <span class="size-2 bg-background-dark rounded-full"></span>
        <span>Delivery Drone Online</span>
    </div>
  );
};

export default Marquee;
