import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Flame, Search, Heart, Bookmark, Eye, MonitorPlay, Sparkles, Swords, Trophy, Activity, X, ArrowRight } from 'lucide-react';
import { Artwork } from '../types';
import { ARTWORKS } from '../data';

interface GamingViewProps {
  onSelectArtwork: (artwork: Artwork) => void;
  likedIds: string[];
  savedIds: string[];
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
}

export const GamingView: React.FC<GamingViewProps> = ({
  onSelectArtwork,
  likedIds,
  savedIds,
  onToggleLike,
  onToggleSave
}) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'ENVIRONMENT' | 'CHARACTER' | 'STRATEGY' | 'RETRO PIXEL'>('ALL');
  const [searchVal, setSearchVal] = useState('');
  const [simulatedTrailer, setSimulatedTrailer] = useState<Artwork | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const gamingArts = useMemo(() => {
    return ARTWORKS.filter(art => art.category === 'Gaming');
  }, []);

  const filteredArts = useMemo(() => {
    return gamingArts.filter(art => {
      const matchQuery = art.title.toLowerCase().includes(searchVal.toLowerCase()) || 
                          art.description.toLowerCase().includes(searchVal.toLowerCase()) || 
                          (art.tags && art.tags.some(t => t.toLowerCase().includes(searchVal.toLowerCase())));
      const matchTab = activeTab === 'ALL' ? true : art.subcategory?.toUpperCase() === activeTab;
      return matchQuery && matchTab;
    });
  }, [gamingArts, searchVal, activeTab]);

  return (
    <div id="gaming-view" className="space-y-12">
      {/* Banner Jumbotron */}
      <section className="relative rounded-none p-8 md:p-14 border border-[#F5F5F0]/15 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#050505]/95 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1RitGqLlCczZBVPvkc6OB3DvsxWG-AuM65mlSNZsX1pCY8UQnRChCahGo8lv7Z2mmHi2VSLHEiA8oWLZO4UCjlbEYzmGcdaExMf1AGPCSFSFKnB8Hf73RsFiY-jO6QzCs1H7VmqR88JoM-mnlGRdoRSAWIJyfPrGwslZ8BdPgOs_A7wp7-d82H7sdgvAwfqFHg_lJPoUBAu3Adj-NC1lHNnVE17CRjNFZYJWr7O3zWFIALiajGIa8KZK_81H6aK9u1heHvp9pkdw')` }}
        />
        
        <div className="relative z-20 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#FF5C00]/10 border border-[#FF5C00]/25 px-3.5 py-1.5 rounded-none text-[9px] font-mono uppercase tracking-widest text-[#FF5C00] font-black">
            <Swords className="w-3.5 h-3.5 text-[#FF5C00]" /> High-Performance Render Node
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tighter text-white">Gameworld Chronicles</h1>
          <p className="text-[#F5F5F0]/70 text-xs md:text-sm uppercase tracking-wider font-light leading-relaxed">
            Examine breathtaking RPG environments, meticulously high-poly character designs, procedural maps, 16-bit canvas art, and esports tournament visual capture.
          </p>
        </div>
      </section>

      {/* Grid Quick Live Tickers */}
      <div id="quick-game-stats" className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-none bg-[#111] border border-[#F5F5F0]/10 flex items-center gap-3">
          <div className="p-2.5 border border-[#FF5C00]/25 bg-[#FF5C00]/5 text-[#FF5C00] rounded-none">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[9px] text-[#F5F5F0]/40 uppercase tracking-widest font-mono">Curated Genres</div>
            <div className="text-xs font-black uppercase tracking-tight text-white font-sans mt-0.5">9 Subcategories</div>
          </div>
        </div>
        <div className="p-4 rounded-none bg-[#111] border border-[#F5F5F0]/10 flex items-center gap-3">
          <div className="p-2.5 border border-[#FF5C00]/25 bg-[#FF5C00]/5 text-[#FF5C00] rounded-none">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[9px] text-[#F5F5F0]/40 uppercase tracking-widest font-mono">Engine Assets</div>
            <div className="text-xs font-black uppercase tracking-tight text-white font-sans mt-0.5">Unreal & Unity Ready</div>
          </div>
        </div>
        <div className="p-4 rounded-none bg-[#111] border border-[#F5F5F0]/10 flex items-center gap-3">
          <div className="p-2.5 border border-[#FF5C00]/25 bg-[#FF5C00]/5 text-[#FF5C00] rounded-none">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[9px] text-[#F5F5F0]/40 uppercase tracking-widest font-mono">Pixel Aspect</div>
            <div className="text-xs font-black uppercase tracking-tight text-white font-sans mt-0.5">16-Bit Nostalgia</div>
          </div>
        </div>
        <div className="p-4 rounded-none bg-[#111] border border-[#F5F5F0]/10 flex items-center gap-3">
          <div className="p-2.5 border border-[#FF5C00]/25 bg-[#FF5C00]/5 text-[#FF5C00] rounded-none">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[9px] text-[#F5F5F0]/40 uppercase tracking-widest font-mono">Interactive Node</div>
            <div className="text-xs font-black uppercase tracking-tight text-white font-sans mt-0.5">Active 4K Decodes</div>
          </div>
        </div>
      </div>

      {/* Tabs list and Search bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F5F5F0]/15 pb-4">
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {(['ALL', 'ENVIRONMENT', 'CHARACTER', 'STRATEGY', 'RETRO PIXEL'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-none px-4 py-2 rounded-none text-[9px] font-mono tracking-widest border uppercase font-black transition cursor-pointer ${
                activeTab === tab ? 'bg-[#FF5C00] border-[#FF5C00] text-black' : 'bg-[#121212] border-[#F5F5F0]/15 text-[#F5F5F0]/50 hover:border-[#FF5C00]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
          <input 
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search characters, environments..."
            className="w-full bg-[#121212] border border-[#F5F5F0]/15 placeholder:text-gray-500 text-xs py-3.5 pl-10 pr-4 rounded-none focus:outline-none focus:border-[#FF5C00] transition uppercase font-mono tracking-widest text-white"
          />
        </div>
      </div>

      {/* Game Card Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArts.map(art => {
          const isLiked = likedIds.includes(art.id.toString());
          const isSaved = savedIds.includes(art.id.toString());

          return (
            <div 
              key={art.id}
              className="group relative rounded-none border border-[#F5F5F0]/15 bg-[#080808] hover:border-[#FF5C00] flex flex-col justify-between transition-all duration-300"
            >
              {/* Corner Indicators */}
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

              <div className="aspect-video overflow-hidden relative group-hover:brightness-105 transition-all">
                <img 
                  src={art.imgUrl} 
                  alt={art.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 rounded-none mix-blend-luminosity hover:mix-blend-normal"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                
                {/* Instant Play Video Overlay */}
                <button 
                  onClick={() => setSimulatedTrailer(art)}
                  className="absolute bottom-3 right-3 bg-[#FF5C00] hover:bg-[#ff731d] font-sans font-black text-[9px] uppercase tracking-widest text-black px-3.5 py-2 rounded-none flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" /> Play Trailer
                </button>
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
                      <span key={t} className="text-[9px] font-mono bg-[#161617] border border-[#F5F5F0]/10 text-[#F5F5F0]/60 px-2 py-0.5 rounded-none">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-[#F5F5F0]/50 pt-1 font-mono uppercase tracking-wider">
                    <span className="font-bold text-white">{art.author || '@anonymous'}</span>
                    <button 
                      onClick={() => onSelectArtwork(art)}
                      className="flex items-center gap-1 hover:text-[#FF5C00] transition-colors font-bold cursor-pointer"
                    >
                      Inspect <ArrowRight className="w-3.5 h-3.5 text-[#FF5C00]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Simulated Trailer Modal */}
      <AnimatePresence>
        {simulatedTrailer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="max-w-3xl w-full bg-[#121212] border border-[#F5F5F0]/15 rounded-none relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Video frame simulated screen */}
              <div className="aspect-video relative bg-black rounded-none">
                <img 
                  src={simulatedTrailer.imgUrl} 
                  alt={simulatedTrailer.title} 
                  className="w-full h-full object-cover opacity-80 rounded-none mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                
                {/* Simulated playback UI overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black border border-[#FF5C00]/30 px-3.5 py-1.5 rounded-none">
                  <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-ping" />
                  <span className="text-[9px] font-mono text-[#FF5C00] tracking-widest uppercase font-black">LIVE ENGINE STREAM // 4K 60FPS</span>
                </div>

                <button 
                  onClick={() => setSimulatedTrailer(null)}
                  className="absolute top-4 right-4 z-20 bg-black border border-[#F5F5F0]/15 text-white rounded-none p-2 transition cursor-pointer font-sans"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Simulated center loader play indicator representing stream */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-none bg-[#FF5C00]/10 border border-[#FF5C00]/40 flex items-center justify-center animate-pulse">
                    <MonitorPlay className="w-8 h-8 text-[#FF5C00]" />
                  </div>
                </div>

                {/* Audio bar animations */}
                <div className="absolute bottom-6 left-6 z-20 flex items-end gap-1.5 h-10 w-24">
                  {[0.7, 0.4, 0.95, 0.6, 0.85, 0.3, 0.5, 0.8].map((mul, idx) => (
                    <motion.div 
                      key={idx}
                      animate={{ height: [`${mul * 10}%`, `${mul * 100}%`, `${mul * 10}%`] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: idx * 0.1 }}
                      className="w-1.5 bg-[#FF5C00] rounded-none"
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 right-4 z-20">
                  <button 
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="text-[9px] font-mono bg-black border border-[#F5F5F0]/15 text-gray-300 hover:text-white px-3 py-1.5 rounded-none cursor-pointer font-bold uppercase tracking-widest"
                  >
                    SOUND: {soundEnabled ? 'STEREO ON' : 'MUTED'}
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4 bg-[#0d0d0d] rounded-none">
                <div className="flex justify-between items-center text-[9px] font-mono text-[#FF5C00] uppercase tracking-widest font-black">
                  <span>CURATED STREAM // {simulatedTrailer.author}</span>
                  <span>{simulatedTrailer.year}</span>
                </div>
                <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight leading-none">{simulatedTrailer.title}</h3>
                <p className="text-[11px] text-[#F5F5F0]/70 leading-relaxed font-light">{simulatedTrailer.description}</p>
                <div className="flex justify-end gap-2 pt-4 border-t border-[#F5F5F0]/10">
                  <button 
                    onClick={() => {
                      onToggleSave(simulatedTrailer.id.toString());
                    }}
                    className={`text-[9px] font-mono px-4 py-2 text-white border transition rounded-none uppercase cursor-pointer tracking-widest font-black ${
                      savedIds.includes(simulatedTrailer.id.toString()) ? 'bg-[#FF5C00]/20 border-[#FF5C00]/40 text-[#FF5C00]' : 'bg-transparent border-[#F5F5F0]/15 hover:border-[#FF5C00]'
                    }`}
                  >
                    {savedIds.includes(simulatedTrailer.id.toString()) ? 'Saved to Catalog' : 'Save to Workspace'}
                  </button>
                  <button 
                    onClick={() => setSimulatedTrailer(null)}
                    className="bg-[#FF5C00] hover:bg-[#ff731d] text-black font-sans font-black text-[9px] uppercase tracking-widest px-5 py-2 rounded-none transition cursor-pointer"
                  >
                    Dismiss Stream
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
