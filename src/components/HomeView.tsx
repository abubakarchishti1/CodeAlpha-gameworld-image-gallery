import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Heart, Bookmark, Eye, ArrowRight, ShieldCheck, Flame, Stars, Sparkles, Filter, Grid, Film } from 'lucide-react';
import { Artwork } from '../types';
import { ARTWORKS, GENERAL_CATEGORIES } from '../data';

interface HomeViewProps {
  onNavigate: (screen: 'Home' | 'Gaming' | 'Entertainment' | 'Nature' | 'Art') => void;
  onSelectArtwork: (artwork: Artwork) => void;
  likedIds: string[];
  savedIds: string[];
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectArtwork,
  likedIds,
  savedIds,
  onToggleLike,
  onToggleSave
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Statistics values
  const stats = [
    { label: 'Exhibits Ready', value: '4,821', icon: <Stars className="w-4 h-4 text-[#FF5C00]" /> },
    { label: 'Digital Artists', value: '142', icon: <Sparkles className="w-4 h-4 text-[#FF5C00]" /> },
    { label: 'Network Integrity', value: '99.9%', icon: <ShieldCheck className="w-4 h-4 text-[#FF5C00]" /> },
    { label: 'Daily Immersion', value: '7,432', icon: <Flame className="w-4 h-4 text-[#FF5C00]" /> }
  ];

  // All trending items (ranked status)
  const trendingArtworks = useMemo(() => {
    return ARTWORKS.slice(0, 5).map((art, idx) => ({
      ...art,
      rank: idx + 1
    }));
  }, []);

  // Filtered artworks for the general display inside Home
  const filteredArtworks = useMemo(() => {
    return ARTWORKS.filter(art => {
      const matchQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (art.tags && art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
                          (art.author && art.author.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchTag = selectedTag ? art.tags?.includes(selectedTag) : true;
      return matchQuery && matchTag;
    });
  }, [searchQuery, selectedTag]);

  // Aggregate tags for filtering
  const allTags = useMemo(() => {
    const list = new Set<string>();
    ARTWORKS.forEach(art => {
      if (art.tags) {
        art.tags.forEach(t => list.add(t));
      }
    });
    return Array.from(list).slice(0, 10);
  }, []);

  return (
    <div id="home-view-container" className="space-y-16">
      {/* Hero Banner Section */}
      <section id="hero-banner" className="relative rounded-none p-8 md:p-14 lg:p-16 flex flex-col justify-between min-h-[480px] border border-[#F5F5F0]/15 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-transparent z-10" />
        
        {/* Animated background imagery */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity transition-all duration-700" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMzRPz6TGrFsZR02DZ-OVAwZp0VR-2WcInc1yHw2wEfzUikh8fB_wv8v2vPd22MxImtzvQZ8DZhwjYxES4PZnz3PhA3h_iRWhDkpn6YzI68KALPtbv4VNPchLf066ngp7qiFfNMOAHL8nSvPqJmgZHVSt_SRCUJ4qwMhx8jJ9m-z8B6_P_5C3i3FOrQkFExxDTKnhlnmY_tbOlWQ8dQENNG5cYjfXyxVrIAXXjkKBBboTAY8mJStAdkeSzM7Y00oNzHwL-z5HAZP4')` }}
        />

        <div className="relative z-20 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FF5C00]/10 border border-[#FF5C00]/20 px-3.5 py-1.5 rounded-none text-[9px] font-mono tracking-widest text-[#FF5C00] uppercase font-black">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5C00]" />
            Curated Digital Atelier v1.4
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter font-sans text-white leading-none uppercase">
            Immersive Art <br />
            <span className="text-[#FF5C00]">Beyond Constraints</span>
          </h1>
          <p className="text-[#F5F5F0]/70 text-xs md:text-sm leading-relaxed font-light uppercase tracking-wider">
            A premium showcase of artificial canvas, digital retro-futurism, cinematic environments, and breathtaking landscape presets carefully cataloged in ultra high-definition.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <button 
              id="cta-explore-gaming"
              onClick={() => onNavigate('Gaming')}
              className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#ff731d] px-6 py-3.5 rounded-none text-black font-sans font-black uppercase tracking-widest text-xs transition cursor-pointer"
            >
              Examine Gaming <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              id="cta-explore-nature"
              onClick={() => onNavigate('Nature')}
              className="flex items-center gap-2 bg-transparent border border-[#F5F5F0]/15 px-6 py-3.5 rounded-none text-white font-sans font-bold uppercase tracking-widest text-xs hover:border-[#FF5C00] transition cursor-pointer"
            >
              Natural Presets
            </button>
          </div>
        </div>

        {/* Metrics counters inside Hero Card */}
        <div className="relative z-20 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#F5F5F0]/10">
          {stats.map((st, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#111] p-3.5 border border-[#F5F5F0]/10 rounded-none">
              <div className="p-2 border border-[#FF5C00]/20 bg-[#FF5C00]/5 text-[#FF5C00]">
                {st.icon}
              </div>
              <div>
                <div className="text-lg md:text-xl font-black font-sans text-white tracking-tight">{st.value}</div>
                <div className="text-[8px] text-[#F5F5F0]/50 uppercase tracking-widest font-mono font-bold">{st.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General categories section */}
      <section id="categories-strip" className="space-y-4">
        <div className="flex justify-between items-end border-b border-[#F5F5F0]/10 pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-sans uppercase tracking-tighter text-white">Browse Galleries</h2>
            <p className="text-[10px] text-[#F5F5F0]/40 font-mono uppercase tracking-widest mt-1">Select curated zones to adjust metadata and examine rendering</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {GENERAL_CATEGORIES.map((cat) => {
            const isSupported = ['Home', 'Gaming', 'Entertainment', 'Nature', 'Art'].includes(cat.name);
            return (
              <div 
                key={cat.name}
                id={`cat-card-${cat.name}`}
                onClick={() => isSupported && onNavigate(cat.name as any)}
                className={`group relative h-40 rounded-none overflow-hidden border border-[#F5F5F0]/15 bg-black flex flex-col justify-end p-5 cursor-pointer transition-all duration-300 ${isSupported ? 'hover:border-[#FF5C00]/60' : 'opacity-40 cursor-not-allowed'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 group-hover:via-black/20 transition-all" />
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-all duration-500 opacity-60 mix-blend-luminosity"
                  style={{ backgroundImage: `url('${cat.imgUrl}')` }}
                />
                <div className="relative z-20 space-y-1">
                  <div className="text-[9px] font-mono text-[#FF5C00] tracking-widest uppercase font-black">{cat.count}</div>
                  <div className="text-base font-black font-sans text-white flex items-center justify-between uppercase tracking-tight">
                    {cat.name}
                    {isSupported && <ArrowRight className="w-3.5 h-3.5 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Horizontal Trending Shelf with indices */}
      <section id="trending-shelf" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 border border-[#FF5C00]/20 bg-[#FF5C00]/5 text-[#FF5C00] rounded-none">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-sans uppercase tracking-tighter text-white">Trending Now</h2>
            <p className="text-[10px] text-[#F5F5F0]/40 font-mono uppercase tracking-widest mt-1">High interaction metrics and verified global saves</p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none">
          {trendingArtworks.map((art) => {
            const isLiked = likedIds.includes(art.id.toString());
            const isSaved = savedIds.includes(art.id.toString());

            return (
              <div 
                key={art.id}
                id={`trend-card-${art.id}`}
                className="flex-none w-80 snap-start group relative rounded-none border border-[#F5F5F0]/15 bg-[#090909] transition-all duration-300 hover:border-[#FF5C00]"
              >
                {/* Ranking Emblem */}
                <div className="absolute top-4 left-4 z-20 bg-black border border-[#FF5C00]/30 px-2.5 py-1.5 rounded-none flex items-center gap-1.5 font-mono text-[9px] font-black tracking-widest text-[#FF5C00] uppercase">
                  <span>#{art.rank}</span> IN TRENDING
                </div>

                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLike(art.id.toString());
                    }}
                    className={`p-2.5 rounded-none border transition-colors cursor-pointer ${
                      isLiked ? 'bg-[#FF5C00] text-black border-[#FF5C00]' : 'bg-black/80 text-gray-400 border-[#F5F5F0]/15 hover:text-white'
                    }`}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(art.id.toString());
                    }}
                    className={`p-2.5 rounded-none border transition-colors cursor-pointer ${
                      isSaved ? 'bg-[#FF5C00] text-black border-[#FF5C00]' : 'bg-black/80 text-gray-400 border-[#F5F5F0]/15 hover:text-white'
                    }`}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>

                {/* Imagery stage */}
                <div 
                  onClick={() => onSelectArtwork(art)}
                  className="h-48 overflow-hidden cursor-pointer relative group-hover:brightness-110 transition-all"
                >
                  <img 
                    src={art.imgUrl} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 rounded-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-4 space-y-3 bg-black">
                  <div className="flex justify-between items-center text-[9px] font-mono text-[#F5F5F0]/50 uppercase tracking-widest">
                    <span>{art.category.toUpperCase()} // {art.subcategory.toUpperCase()}</span>
                    <span>{art.year}</span>
                  </div>
                  <h3 
                    onClick={() => onSelectArtwork(art)}
                    className="font-sans font-black text-base text-white hover:text-[#FF5C00] cursor-pointer line-clamp-1 transition-colors uppercase tracking-tight"
                  >
                    {art.title}
                  </h3>
                  <p className="text-[11px] text-[#F5F5F0]/70 line-clamp-2 leading-relaxed">
                    {art.description}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-[#F5F5F0]/10 text-[9px] text-[#F5F5F0]/50 uppercase tracking-wider font-mono">
                    <span className="font-bold text-[#F5F5F0]/80">{art.author || '@anonymous'}</span>
                    <button 
                      onClick={() => onSelectArtwork(art)}
                      className="flex items-center gap-1 hover:text-[#FF5C00] transition-colors font-bold"
                    >
                      Inspect <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Masonry Grid of items with integrated multi-term filter search */}
      <section id="exhibition-catalog" className="space-y-8 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F5F5F0]/15 pb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-sans uppercase tracking-tighter text-white">Digital Masterworks</h2>
            <p className="text-[10px] text-[#F5F5F0]/40 font-mono uppercase tracking-widest mt-1">Use deep query parser or tags to isolate parameters</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Box */}
            <div id="search-input-wrapper" className="relative max-w-sm w-full">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search artists, titles, codes..."
                className="w-full bg-[#121212] border border-[#F5F5F0]/15 placeholder:text-gray-500 text-xs py-3 pl-10 pr-4 rounded-none focus:outline-none focus:border-[#FF5C00] transition uppercase font-mono tracking-widest text-white"
              />
            </div>

            {selectedTag && (
              <button 
                onClick={() => setSelectedTag(null)}
                className="bg-[#121212] hover:bg-black text-[9px] font-mono py-2 px-4 rounded-none border border-[#F5F5F0]/15 text-[#FF5C00] uppercase tracking-wider font-bold transition self-center"
              >
                Clear Tag: {selectedTag}
              </button>
            )}
          </div>
        </div>

        {/* Quick Tags Scrollbar */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          <button 
            onClick={() => setSelectedTag(null)}
            className={`flex-none text-[9px] px-4 py-2 rounded-none border font-mono uppercase tracking-widest font-black transition-all ${
              selectedTag === null ? 'bg-[#FF5C00] border-[#FF5C00] text-black' : 'bg-[#121212] border-[#F5F5F0]/15 text-[#F5F5F0]/50 hover:text-white hover:border-[#FF5C00]'
            }`}
          >
            All Fields
          </button>
          {allTags.map(tag => (
            <button 
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`flex-none text-[9px] px-4 py-2 rounded-none border font-mono uppercase tracking-widest font-black transition-all ${
                selectedTag === tag ? 'bg-[#FF5C00] border-[#FF5C00] text-black' : 'bg-[#121212] border-[#F5F5F0]/15 text-[#F5F5F0]/50 hover:text-white hover:border-[#FF5C00]'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Masonry Items Section */}
        {filteredArtworks.length === 0 ? (
          <div id="empty-state" className="text-center py-20 bg-[#121212] border border-[#F5F5F0]/15 rounded-none p-6 space-y-4">
            <Filter className="w-12 h-12 text-[#FF5C00] mx-auto" />
            <h3 className="text-lg font-black uppercase tracking-tighter text-white font-sans">No masterpieces found</h3>
            <p className="text-[11px] text-[#F5F5F0]/50 max-w-md mx-auto uppercase tracking-wide">There are no digital renders matching "{searchQuery}" in our current database. Try refining your keyword terms or check spelling.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
              className="bg-transparent hover:bg-white/5 border border-[#F5F5F0]/15 text-[10px] font-sans font-black uppercase tracking-widest py-3.5 px-6 rounded-none text-white transition cursor-pointer"
            >
              Reset Search Parameters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredArtworks.map((art) => {
                const isLiked = likedIds.includes(art.id.toString());
                const isSaved = savedIds.includes(art.id.toString());

                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    key={art.id}
                    id={`art-masonry-${art.id}`}
                    className="group relative rounded-none border border-[#F5F5F0]/15 hover:border-[#FF5C00] flex flex-col justify-between bg-[#080808] transition-all"
                  >
                    <div className="absolute top-3 right-3 z-20 flex gap-1.5">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLike(art.id.toString());
                        }}
                        className={`p-2.5 rounded-none border transition-colors cursor-pointer ${
                          isLiked ? 'bg-[#FF5C00] text-black border-[#FF5C00]' : 'bg-black/70 text-gray-400 border-[#F5F5F0]/15 hover:text-white'
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSave(art.id.toString());
                        }}
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

                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between text-[9px] font-mono text-[#F5F5F0]/40 uppercase tracking-widest mb-2.5">
                          <span>{art.category.toUpperCase()} // {art.subcategory.toUpperCase()}</span>
                          <span>{art.year}</span>
                        </div>
                        <h3 
                          onClick={() => onSelectArtwork(art)}
                          className="font-sans font-black text-lg text-white hover:text-[#FF5C00] cursor-pointer leading-tight mb-2 transition-colors uppercase tracking-tight"
                        >
                          {art.title}
                        </h3>
                        <p className="text-[11px] text-[#F5F5F0]/70 line-clamp-3 leading-relaxed mb-4">
                          {art.description}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-[#F5F5F0]/10">
                        <div className="flex flex-wrap gap-1.5">
                          {art.tags?.slice(0, 3).map(tag => (
                            <span 
                              key={tag}
                              onClick={() => setSelectedTag(tag)}
                              className="text-[9px] font-mono bg-[#161617] border border-[#F5F5F0]/10 text-[#F5F5F0]/60 hover:text-white hover:border-[#FF5C00] px-2 py-0.5 rounded-none transition cursor-pointer"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-[#F5F5F0]/50 uppercase tracking-wider font-mono">
                          <span className="font-bold text-[#FF5C00]">{art.author || '@anonymous'}</span>
                          <button 
                            onClick={() => onSelectArtwork(art)}
                            className="flex items-center gap-1.5 hover:text-white transition-colors font-bold cursor-pointer"
                          >
                            Details <ArrowRight className="w-3.5 h-3.5 text-[#FF5C00]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
};
