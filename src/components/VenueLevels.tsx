import { useState } from "react";
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";

const levels = [
  {
    id: "lvl1",
    name: "Level 1: The Stampede",
    tagline: "Live Country & Mechanical Bulls",
    icon: <Star className="w-6 h-6" />,
    image: "/images/floor-honkytonk.jpg",
    description: "The heart of the beast. 4,000 sq ft dance floor, dual mechanical bulls, and the longest bar in Texas featuring 50+ drafts.",
    color: "from-neon-yellow"
  },
  {
    id: "lvl2",
    name: "Level 2: Electric Rodeo",
    tagline: "House Beats & Laser Shows",
    icon: <Star className="w-6 h-6" />,
    image: "/images/floor-club.jpg",
    description: "Ascend to the future. Immersive projection mapping, VIP booths with bottle service, and world-class DJs spinning until 4AM.",
    color: "from-neon-pink"
  },
  {
    id: "lvl3",
    name: "Rooftop: Starlight Lounge",
    tagline: "Craft Cocktails & Skyline Views",
    icon: <Star className="w-6 h-6" />,
    image: "/images/floor-rooftop.jpg",
    description: "Cool down under the stars. An open-air oasis serving artisanal agave cocktails with panoramic views of the Dallas skyline.",
    color: "from-neon-cyan"
  }
];

export const VenueLevels = () => {
  const [activeLevel, setActiveLevel] = useState(levels[0]);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" id="venue">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 uppercase">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Vibe</span>
          </h2>
          <div className="h-1 w-24 bg-neon-pink" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px] lg:h-[600px]">
          {/* Navigation - Left Side */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level)}
                className={cn(
                  "group relative p-6 text-left border transition-all duration-300 overflow-hidden",
                  activeLevel.id === level.id 
                    ? "bg-white/10 border-white/20" 
                    : "bg-transparent border-white/5 hover:border-white/20 hover:bg-white/5"
                )}
              >
                {/* Active Indicator Line */}
                <div className={cn(
                  "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
                  activeLevel.id === level.id ? `bg-gradient-to-b ${level.color} to-transparent` : "bg-transparent"
                )} />

                <div className="flex items-center gap-4 mb-2">
                  <span className={cn(
                    "p-2 rounded-full bg-black/50 transition-colors",
                    activeLevel.id === level.id ? "text-white" : "text-zinc-500 group-hover:text-white"
                  )}>
                    {level.icon}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                    {level.name.split(":")[0]}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm pl-[3.25rem]">{level.tagline}</p>
              </button>
            ))}
          </div>

          {/* Content Display - Right Side */}
          <div className="lg:col-span-8 relative group">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
               <div className="absolute inset-0 bg-black/20 z-10" />
               <img 
                 key={activeLevel.image} // Key change triggers animation
                 src={activeLevel.image} 
                 alt={activeLevel.name}
                 className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-700"
               />
               
               {/* Content Overlay */}
               <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                 <h3 className="font-display text-4xl md:text-6xl text-white font-bold mb-4 uppercase animate-in slide-in-from-bottom-4 duration-500 delay-100">
                   {activeLevel.name.split(":")[1]}
                 </h3>
                 <p className="text-lg text-zinc-300 max-w-xl mb-8 leading-relaxed animate-in slide-in-from-bottom-4 duration-500 delay-200">
                   {activeLevel.description}
                 </p>
                 <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-neon-cyan transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-300">
                   Explore Floor <Star className="w-5 h-5" />
                 </button>
               </div>
            </div>
            
            {/* Border glow effect */}
            <div className={cn(
              "absolute inset-0 border-2 rounded-xl pointer-events-none transition-colors duration-500",
              activeLevel.id === 'lvl1' && "border-neon-yellow/30",
              activeLevel.id === 'lvl2' && "border-neon-pink/30",
              activeLevel.id === 'lvl3' && "border-neon-cyan/30"
            )} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueLevels;
