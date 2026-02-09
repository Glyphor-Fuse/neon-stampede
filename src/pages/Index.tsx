import { NeonHero } from "@/components/NeonHero";
import { VenueLevels } from "@/components/VenueLevels";
import { VisualFooter } from "@/components/VisualFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <NeonHero />
      <VenueLevels />
      
      {/* Event Teaser Section - Kept Inline for Simplicity/Variety */}
      <section className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 text-center">
           <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-12 uppercase">
             Coming <span className="text-neon-pink">Live</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { date: "OCT 31", act: "Midnight Cowboys", genre: "Country Rock" },
                { date: "NOV 01", act: "DJ Neon", genre: "House/Techno" },
                { date: "NOV 02", act: "The Rustlers", genre: "Live Band" },
              ].map((event, i) => (
                <div key={i} className="group border border-white/10 p-8 hover:bg-white/5 transition-all hover:border-neon-cyan/50 cursor-pointer">
                   <p className="text-neon-yellow font-bold text-xl mb-2">{event.date}</p>
                   <h3 className="font-display text-3xl text-white mb-2 group-hover:text-neon-cyan transition-colors">{event.act}</h3>
                   <p className="text-zinc-500 uppercase text-sm tracking-widest">{event.genre}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <VisualFooter />
    </div>
  );
};

export default Index;