import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Paintbrush, Sparkles, Heart, Bookmark, Eye, CheckCircle2, ShieldAlert, Newspaper, Send, ArrowRight } from 'lucide-react';
import { Artwork } from '../types';
import { ARTWORKS } from '../data';

interface ArtViewProps {
  onSelectArtwork: (artwork: Artwork) => void;
  likedIds: string[];
  savedIds: string[];
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
}

export const ArtView: React.FC<ArtViewProps> = ({
  onSelectArtwork,
  likedIds,
  savedIds,
  onToggleLike,
  onToggleSave
}) => {
  const [activeSub, setActiveSub] = useState<'ALL' | 'AI ART' | 'ILLUSTRATIONS' | 'GRAFFITI' | '3D' | 'DIGITAL ART' | 'PHOTOGRAPHY'>('ALL');
  const [emailSub, setEmailSub] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const artMasterworks = useMemo(() => {
    return ARTWORKS.filter(art => art.category === 'Art');
  }, []);

  const filteredArts = useMemo(() => {
    return artMasterworks.filter(art => {
      if (activeSub === 'ALL') return true;
      return art.subcategory?.toUpperCase() === activeSub;
    });
  }, [artMasterworks, activeSub]);

  // Handle newsletter interaction
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub || !emailSub.includes('@')) {
      setSubStatus('error');
      setTimeout(() => setSubStatus('idle'), 4000);
      return;
    }

    setSubStatus('loading');
    setTimeout(() => {
      setSubStatus('success');
      setEmailSub('');
    }, 1500);
  };

  return (
    <div id="art-view-container" className="space-y-12">
      {/* Banner Jumbotron */}
      <section className="relative rounded-none p-8 md:p-14 border border-[#F5F5F0]/15 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#050505]/95 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcQRCVbr2D1vp7G7y5e0uXZYNqw2FjEK8jcGEGEQoawTL4mItfMFk0eiolgYUd-CNLhzf6VAWRc2k8pssA4xYTtaYlzctJrpS9MTs7iqhcUPjO_zOUJ4Wc2yquOIDZqunvmdoxXRjeIKNE_4BCRJ113f-vc0fvBfFRaOzyt_qiANTDuhbFb2IW3HMDl7tq1uIuRloQ6oAM70wEDyVZnjPRWM_Jl-evf6tJLZ9y9juX1Hj2mimJi4utbcw-P6EgDpzz9-3LtY1NszQ')` }}
        />
        
        <div className="relative z-20 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#FF5C00]/10 border border-[#FF5C00]/25 px-3.5 py-1.5 rounded-none text-[9px] font-mono uppercase tracking-widest text-[#FF5C00] font-black">
            <Paintbrush className="w-3.5 h-3.5 text-[#FF5C00]" /> High-Performance Art Renderer
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tighter text-white">Algorithmic Atelier</h1>
          <p className="text-[#F5F5F0]/70 text-xs md:text-sm uppercase tracking-wider font-light leading-relaxed">
            Investigate deep-learning abstract visual canvases, liquid-metal chrome rendering, architectural geometry and vibrant street wall murals.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Grid display (3 cols) */}
        <div className="lg:col-span-3 space-y-8">
          
          <div className="flex gap-1.5 pb-2 overflow-x-auto scrollbar-none">
            {(['ALL', 'AI ART', 'ILLUSTRATIONS', 'GRAFFITI', '3D', 'DIGITAL ART', 'PHOTOGRAPHY'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => setActiveSub(sub)}
                className={`flex-none px-4 py-2 rounded-none text-[9px] font-mono uppercase tracking-widest font-black border transition cursor-pointer ${
                  activeSub === sub ? 'bg-[#FF5C00] border-[#FF5C00] text-black' : 'bg-[#121212] border-[#F5F5F0]/15 text-[#F5F5F0]/50 hover:border-[#FF5C00]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredArts.map(art => {
              const isLiked = likedIds.includes(art.id.toString());
              const isSaved = savedIds.includes(art.id.toString());

              return (
                <div 
                  key={art.id}
                  className="group relative rounded-none border border-[#F5F5F0]/15 bg-[#080808] hover:border-[#FF5C00] flex flex-col justify-between transition-all duration-300"
                >
                  <div className="absolute top-3 left-3 z-10 bg-black/80 px-2.5 py-1.5 rounded-none border border-[#FF5C00]/30 text-[9px] font-mono font-black text-[#FF5C00] uppercase tracking-widest">
                    {art.subcategory}
                  </div>

                  <div className="absolute top-3 right-3 z-10 flex gap-1.5">
                    <button 
                      onClick={() => onToggleLike(art.id.toString())}
                      className={`p-2.5 rounded-none border transition-colors cursor-pointer ${
                        isLiked ? 'bg-[#FF5C00] text-black border-[#FF5C00]' : 'bg-black/70 text-gray-400 border-[#F5F5F0]/15 hover:text-white'
                      }`}
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                    </button>
                    <button 
                      onClick={() => onToggleSave(art.id.toString())}
                      className={`p-2.5 rounded-none border transition-colors cursor-pointer ${
                        isSaved ? 'bg-[#FF5C00] text-black border-[#FF5C00]' : 'bg-black/70 text-gray-400 border-[#F5F5F0]/15 hover:text-white'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>

                  <div 
                    onClick={() => onSelectArtwork(art)}
                    className="aspect-[4/3] overflow-hidden cursor-pointer relative"
                  >
                    <img 
                      src={art.imgUrl} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 rounded-none mix-blend-luminosity hover:mix-blend-normal"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  </div>

                  <div className="p-5 space-y-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 
                        onClick={() => onSelectArtwork(art)}
                        className="font-sans font-black text-lg text-white hover:text-[#FF5C00] cursor-pointer transition-colors line-clamp-1 uppercase tracking-tight"
                      >
                        {art.title}
                      </h3>
                      <p className="text-[11px] text-[#F5F5F0]/70 line-clamp-3 leading-relaxed mt-1">
                        {art.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-[#F5F5F0]/10">
                      <div className="flex flex-wrap gap-1.5">
                        {art.tags?.map(t => (
                          <span key={t} className="text-[9px] font-mono bg-[#161617] border border-[#F5F5F0]/10 text-gray-400 px-2 py-0.5 rounded-none">#{t}</span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-[#F5F5F0]/50 pt-1 font-mono uppercase tracking-wider">
                        <span className="font-bold text-white">{art.author || '@anonymous'}</span>
                        <button 
                          onClick={() => onSelectArtwork(art)}
                          className="flex items-center gap-1 hover:text-[#FF5C00] transition-colors font-bold cursor-pointer"
                        >
                          Parameters <ArrowRight className="w-3.5 h-3.5 text-[#FF5C00]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Newsletter Column (1 col) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 bg-[#0e0e0e] border border-[#F5F5F0]/15 rounded-none space-y-5 relative overflow-hidden">
            <div className="relative z-10 space-y-4 text-xs">
              <div className="p-3 bg-[#FF5C00]/10 border border-[#FF5C00]/25 rounded-none w-fit text-[#FF5C00]">
                <Newspaper className="w-5 h-5 text-[#FF5C00]" />
              </div>

              <div className="space-y-1">
                <h3 className="font-sans font-black uppercase tracking-tight text-sm text-white">Subscribe to Atelier Dispatch</h3>
                <p className="text-[#F5F5F0]/70 font-mono text-[10px] uppercase tracking-wider leading-neutral">
                  Receive weekly procedural telemetry updates, prompt-engineering logs, and physical drop schedules.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
                <div className="relative">
                  <input 
                    type="text"
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    placeholder="Enter dispatch email address"
                    disabled={subStatus === 'loading' || subStatus === 'success'}
                    className="w-full bg-[#121212] border border-[#F5F5F0]/15 placeholder:text-gray-500 py-3.5 pl-4 pr-10 rounded-none focus:outline-none focus:border-[#FF5C00] transition text-[10px] font-mono uppercase tracking-widest text-white disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={subStatus === 'loading' || subStatus === 'success'}
                    className="absolute right-3.5 top-3.5 text-gray-400 hover:text-white transition disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 cursor-pointer" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {subStatus === 'loading' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[9px] font-mono text-[#FF5C00] flex items-center gap-1.5 uppercase tracking-widest font-bold"
                    >
                      <div className="w-2.5 h-2.5 border-2 border-t-transparent border-[#FF5C00] rounded-full animate-spin" />
                      Registering handshake...
                    </motion.div>
                  )}

                  {subStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-[#FF5C00]/10 border border-[#FF5C00]/30 rounded-none text-[9px] text-[#FF5C00] leading-relaxed space-y-1 flex items-start gap-2 uppercase font-mono tracking-widest"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF5C00] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Subscription Confirmed</div>
                        <div className="text-[8px] opacity-80 leading-normal">Handshake successful. Verified encryption tunnel synchronized.</div>
                      </div>
                    </motion.div>
                  )}

                  {subStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-red-950/20 border border-red-500/30 rounded-none text-[9px] text-red-500/90 leading-relaxed space-y-1 flex items-start gap-2 uppercase font-mono tracking-widest"
                    >
                      <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Handshake Denied</div>
                        <div className="text-[8px] opacity-80 leading-normal">Specify a valid email handshaking token container.</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="submit"
                  disabled={subStatus === 'loading' || subStatus === 'success'}
                  className="w-full bg-[#FF5C00] hover:bg-[#ff731d] font-sans font-black text-[9px] text-black py-3.5 rounded-none uppercase transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 tracking-widest"
                >
                  Join the Grid <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
