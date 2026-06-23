import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Heart, Bookmark, Eye, Grid, List, Sparkles, Filter, Music, Film, Tv, Radio, ArrowRight } from 'lucide-react';
import { Artwork } from '../types';
import { ARTWORKS } from '../data';

interface EntertainmentViewProps {
  onSelectArtwork: (artwork: Artwork) => void;
  likedIds: string[];
  savedIds: string[];
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
}

export const EntertainmentView: React.FC<EntertainmentViewProps> = ({
  onSelectArtwork,
  likedIds,
  savedIds,
  onToggleLike,
  onToggleSave
}) => {
  const [viewMode, setViewMode] = useState<'GRID' | 'LIST'>('GRID');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubcat, setActiveSubcat] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'title' | 'year' | 'default'>('default');

  const entertainmentArts = useMemo(() => {
    return ARTWORKS.filter(art => art.category === 'Entertainment');
  }, []);

  // Isolate subcategories
  const subcats = useMemo(() => {
    const list = new Set<string>();
    entertainmentArts.forEach(art => {
      if (art.subcategory) list.add(art.subcategory);
    });
    return Array.from(list);
  }, [entertainmentArts]);

  const sortedAndFiltered = useMemo(() => {
    let list = entertainmentArts.filter(art => {
      const matchQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (art.tags && art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
      const matchSubcat = activeSubcat ? art.subcategory === activeSubcat : true;
      return matchQuery && matchSubcat;
    });

    if (sortBy === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'year') {
      list.sort((a, b) => String(b.year).localeCompare(String(a.year)));
    }

    return list;
  }, [entertainmentArts, searchQuery, activeSubcat, sortBy]);

  return (
    <div id="entertainment-view" className="space-y-12">
      {/* Banner Jumbotron */}
      <section className="relative rounded-none p-8 md:p-14 border border-[#F5F5F0]/15 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#050505]/95 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuApD18pKkC1K7i7Wj35GvqRU7DGPTAlXJ0blebgFQw1505Kc9B9KvZRusf_FygeYTOyTF_94CHFnT5IcSKEth0eLKHacyXwpuEL6XHzIGn4cQTQ9NJHM0YXz2ePowexU_mwSk963lRdss26ELDT_vATxYJdPZLydMdNFve6VdMQtxDL1PORbqmc9d9EVf8cyiZd28w97DqzlwC-gfBegP_2YoJlptm1VeC879ZcvqFUDjsLKE63uEFuULzZrlgwG7w87YCMr3mBKdQ')` }}
        />
        
        <div className="relative z-20 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#FF5C00]/10 border border-[#FF5C00]/25 px-3.5 py-1.5 rounded-none text-[9px] font-mono uppercase tracking-widest text-[#FF5C00] font-black">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF5C00]" /> Live Multimedia Node
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tighter text-white">Cinetic & Acoustic Rooms</h1>
          <p className="text-[#F5F5F0]/70 text-xs md:text-sm uppercase tracking-wider font-light leading-relaxed">
            Examine sci-fi cinema designs, electrifying modern tour configurations, high-voltage anime realms, awards red carpet, and romantic dramas.
          </p>
        </div>
      </section>

      {/* Controller Area */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-end border-b border-[#F5F5F0]/15 pb-6">
        {/* Subcategories tags list */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveSubcat(null)}
            className={`px-4 py-2 rounded-none text-[9px] font-mono uppercase tracking-widest font-black border transition cursor-pointer ${
              activeSubcat === null ? 'bg-[#FF5C00] border-[#FF5C00] text-black' : 'bg-[#121212] border-[#F5F5F0]/15 text-[#F5F5F0]/50 hover:border-[#FF5C00]'
            }`}
          >
            All Genres
          </button>
          {subcats.map(sub => (
            <button
              key={sub}
              onClick={() => setActiveSubcat(sub)}
              className={`px-4 py-2 rounded-none text-[9px] font-mono uppercase tracking-widest font-black border transition cursor-pointer ${
                activeSubcat === sub ? 'bg-[#FF5C00] border-[#FF5C00] text-black' : 'bg-[#121212] border-[#F5F5F0]/15 text-[#F5F5F0]/50 hover:border-[#FF5C00]'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cinematic keyframes..."
              className="w-full sm:w-60 bg-[#121212] border border-[#F5F5F0]/15 placeholder:text-gray-500 text-xs py-3.5 pl-10 pr-4 rounded-none focus:outline-none focus:border-[#FF5C00] transition uppercase font-mono tracking-widest text-white"
            />
          </div>

          {/* Sort Controller */}
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#121212] border border-[#F5F5F0]/15 text-[10px] font-mono uppercase tracking-wider text-[#F5F5F0] rounded-none px-4 py-3.5 focus:outline-none focus:border-[#FF5C00] cursor-pointer"
          >
            <option value="default" className="bg-[#131313]">Chronology (Default)</option>
            <option value="title" className="bg-[#131313]">Order by Name</option>
            <option value="year" className="bg-[#131313]">Order by Year</option>
          </select>

          {/* Layout switches */}
          <div className="flex bg-[#121212] border border-[#F5F5F0]/15 p-0.5 rounded-none self-stretch sm:self-center">
            <button 
              onClick={() => setViewMode('GRID')}
              className={`p-2 rounded-none border transition-colors cursor-pointer-none ${viewMode === 'GRID' ? 'bg-[#FF5C00] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => setViewMode('LIST')}
              className={`p-2 rounded-none border transition-colors cursor-pointer-none ${viewMode === 'LIST' ? 'bg-[#FF5C00] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Render Lists */}
      {sortedAndFiltered.length === 0 ? (
        <div className="text-center py-20 bg-transparent rounded-none border border-[#F5F5F0]/10">
          <Filter className="w-12 h-12 text-[#FF5C00] mx-auto mb-3 animate-pulse" />
          <h3 className="text-md uppercase tracking-tight text-white font-sans font-black">No results match filters</h3>
          <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">Try clearing your searching parameters or selecting another subgenre.</p>
        </div>
      ) : viewMode === 'GRID' ? (
        /* GRID LOOK */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {sortedAndFiltered.map(art => {
              const isLiked = likedIds.includes(art.id.toString());
              const isSaved = savedIds.includes(art.id.toString());

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
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
                    className="aspect-[16/10] overflow-hidden cursor-pointer relative"
                  >
                    <img 
                      src={art.imgUrl} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 rounded-none mix-blend-luminosity hover:mix-blend-normal"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  </div>

                  <div className="p-5 space-y-3 flex flex-col justify-between flex-grow">
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

                    <div className="space-y-2 pt-2.5 border-t border-[#F5F5F0]/10">
                      <div className="flex flex-wrap gap-1">
                        {art.tags?.map(t => (
                          <span key={t} className="text-[9px] font-mono bg-[#161617] border border-[#F5F5F0]/10 text-gray-400 px-2 py-0.5 rounded-none">#{t}</span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-[#F5F5F0]/50 font-mono uppercase tracking-wider">
                        <span className="font-bold text-white">{art.author || '@anonymous'}</span>
                        <span className="font-bold">{art.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        /* LIST LOOK */
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {sortedAndFiltered.map(art => {
              const isLiked = likedIds.includes(art.id.toString());
              const isSaved = savedIds.includes(art.id.toString());

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  key={art.id}
                  className="group rounded-none p-4 flex flex-col sm:flex-row gap-6 border border-[#F5F5F0]/15 bg-[#080808] hover:border-[#FF5C00]"
                >
                  <div 
                    onClick={() => onSelectArtwork(art)}
                    className="w-full sm:w-48 aspect-video sm:aspect-auto sm:h-32 rounded-none overflow-hidden cursor-pointer flex-shrink-0"
                  >
                    <img 
                      src={art.imgUrl} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 rounded-none mix-blend-luminosity hover:mix-blend-normal"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-black text-[#FF5C00] bg-[#FF5C00]/10 px-3 py-1 border border-[#FF5C00]/25 rounded-none uppercase tracking-widest">
                          {art.subcategory}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Released {art.year}</span>
                      </div>
                      <h3 
                        onClick={() => onSelectArtwork(art)}
                        className="font-sans font-black text-lg text-white hover:text-[#FF5C00] cursor-pointer mt-2 transition-colors uppercase tracking-tight"
                      >
                        {art.title}
                      </h3>
                      <p className="text-[11px] text-[#F5F5F0]/70 line-clamp-2 leading-relaxed mt-1 font-light">
                        {art.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 sm:mt-0 pt-3 sm:pt-0 sm:border-none border-t border-[#F5F5F0]/10">
                      <div className="flex gap-1.5">
                        {art.tags?.map(t => (
                          <span key={t} className="text-[9px] font-mono bg-[#161617] border border-[#F5F5F0]/10 text-gray-400 px-2 py-0.5 rounded-none">#{t}</span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => onToggleLike(art.id.toString())}
                          className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest font-black transition-colors cursor-pointer ${isLiked ? 'text-[#FF5C00]' : 'text-gray-400 hover:text-white'}`}
                        >
                          <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#FF5C00] text-[#FF5C00]' : ''}`} /> {isLiked ? 'Liked' : 'Like'}
                        </button>
                        <button 
                          onClick={() => onToggleSave(art.id.toString())}
                          className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest font-black transition-colors cursor-pointer ${isSaved ? 'text-[#FF5C00]' : 'text-gray-400 hover:text-white'}`}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#FF5C00] text-[#FF5C00]' : ''}`} /> {isSaved ? 'Saved' : 'Save'}
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
    </div>
  );
};
