import { ArrowRight, Calendar, Music, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const NeonHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-club.jpg" 
          alt="Neon Stampede Main Floor" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-pink/20 via-transparent to-transparent opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-neon-cyan/10 border border-neon-cyan/50 backdrop-blur-md">
          <Star className="w-4 h-4 text-neon-cyan animate-pulse" />
          <span className="text-sm font-bold tracking-widest text-neon-cyan uppercase">Grand Opening Oct 31</span>
        </div>
        
        <h1 className="font-display text-7xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-6 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
          Neon <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-white to-neon-cyan">Stampede</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-zinc-300 font-light mb-10 tracking-wide">
          Dallas' First Multi-Level Honky Tonk & Cyber-Club Experience.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="h-14 px-8 bg-neon-pink hover:bg-neon-pink/80 text-white font-bold text-lg rounded-none skew-x-[-10deg] transition-all hover:skew-x-0">
            <Star className="mr-2 h-5 w-5" />
            <span className="skew-x-[10deg]">GET TICKETS</span>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-bold text-lg rounded-none skew-x-[-10deg] transition-all hover:skew-x-0">
            <Calendar className="mr-2 h-5 w-5" />
            <span className="skew-x-[10deg]">VIEW CALENDAR</span>
          </Button>
        </div>
      </div>
      
      {/* Decorative Marquee Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-neon-yellow text-black py-2 font-display font-bold text-xl tracking-widest uppercase">
        <div className="whitespace-nowrap animate-marquee">
          Live Music Nightly • Bull Riding on Lvl 1 • Rooftop DJ Sets • VIP Bottle Service • Live Music Nightly • Bull Riding on Lvl 1 •
        </div>
      </div>
    </section>
  );
};

export default NeonHero;
