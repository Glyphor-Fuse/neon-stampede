import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VisualFooter = () => {
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/10">
      {/* Top Banner - Newsletter */}
      <div className="border-b border-white/10 bg-neon-cyan/5">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl font-bold uppercase mb-2">Join The Guestlist</h3>
            <p className="text-zinc-400">Get early access to ticket drops and VIP events.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="ENTER EMAIL" 
              className="bg-black/50 border border-white/20 px-4 py-3 w-full md:w-80 text-white focus:outline-none focus:border-neon-pink transition-colors"
            />
            <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white font-bold px-8">
              SIGN UP
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan">
            Neon Stampede
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            The ultimate nightlife destination in Dallas. Where country soul meets electric energy. Two floors, one unforgettable ride.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-neon-yellow">Explore</h4>
          <ul className="space-y-4 text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">Buy Tickets</a></li>
            <li><a href="#" className="hover:text-white transition-colors">VIP Tables</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Private Events</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-neon-yellow">Contact</h4>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-neon-pink shrink-0" />
              <span>2500 Main St,<br/>Dallas, TX 75226</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-neon-pink shrink-0" />
              <span>(214) 555-0199</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-neon-pink shrink-0" />
              <span>bookings@neonstampede.com</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-neon-yellow">Hours</h4>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Thu</span>
              <span className="text-white">8PM - 2AM</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Fri</span>
              <span className="text-white">8PM - 2AM</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Sat</span>
              <span className="text-white">8PM - 2AM</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Sun</span>
              <span className="text-white">Day Party 2PM-8PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-center py-6 text-zinc-600 text-sm border-t border-white/5">
        <p>&copy; 2024 Neon Stampede. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default VisualFooter;
