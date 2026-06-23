import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Compass, Heart, Bookmark, Eye, Image as ImageIcon, CheckCircle, Info, Sparkles, Filter, Leaf, Wind, ArrowRight } from 'lucide-react';
import { Artwork, PresetFilter } from '../types';
import { ARTWORKS } from '../data';

interface NatureViewProps {
  onSelectArtwork: (artwork: Artwork) => void;
  likedIds: string[];
  savedIds: string[];
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
}

export const NatureView: React.FC<NatureViewProps> = ({
  onSelectArtwork,
  likedIds,
  savedIds,
  onToggleLike,
  onToggleSave
}) => {
  const [selectedPreset, setSelectedPreset] = useState<PresetFilter>('filter-normal');
  const [activeSub, setActiveSub] = useState<'ALL' | 'MOUNTAINS' | 'OCEANS' | 'DESERTS' | 'WILDLIFE' | 'FORESTS'>('ALL');

  const natureArts = useMemo(() => {
    return ARTWORKS.filter(art => art.category === 'Nature');
  }, []);

  const filteredArts = useMemo(() => {
    return natureArts.filter(art => {
      if (activeSub === 'ALL') return true;
      return art.subcategory?.toUpperCase() === activeSub;
    });
  }, [natureArts, activeSub]);

  // Featured Photo of the Day aside parameters
  const photoOfTheDay = useMemo(() => {
    return natureArts[0] || null;
  }, [natureArts]);

  const presetsList = [
    { id: 'filter-normal', name: 'Raw Dynamic', desc: 'No modification' },
    { id: 'filter-warm', name: 'Golden Sepia', desc: 'Warm saturates' },
    { id: 'filter-cool', name: 'Arctic Drift', desc: 'Cyan temperatures' },
    { id: 'filter-vintage', name: 'Vintage Analog', desc: '80s film matte' },
    { id: 'filter-bw', name: 'Noir Silver', desc: 'High stark contrast' }
  ] as const;

  return (
    <div id="nature-view" className="space-y-12">
      {/* Curved Celestial Arctic Banner */}
      <section className="relative rounded-none p-8 md:p-14 border border-[#F5F5F0]/15 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#050505]/95 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYfXqteAT39psXLOGHoTxpkwLus3PhVQwaRJ3KzvxsCUiJSWA9pi6_jmQdWoUGTvRpYdiXpH3xAm8LW9y5kFA8B9bZoThScZVdcRGJukxWDMAZi-1UOBvLOSjym9bNPgIINAn2d7nHmIoL87EztLkSn3ljd62a93kCl4UGWHJa5UGF1OT7p9btxu1_6AlPxgW5N1xwDnxu13h7KuvOtLPZjBBnfE6KkPtamzWxTkfM_1lLCY64ABR_trKqwLH845ALa98LT_Qby-w')` }}
        />
        
        <div className="relative z-20 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#FF5C00]/10 border border-[#FF5C00]/25 px-3.5 py-1.5 rounded-none text-[9px] font-mono uppercase tracking-widest text-[#FF5C00] font-black">
            <Compass className="w-3.5 h-3.5 text-[#FF5C00]" /> High-Latitude Expedition Nodes
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tighter text-white">Primal Ecosystems</h1>
          <p className="text-[#F5F5F0]/70 text-xs md:text-sm uppercase tracking-wider font-light leading-relaxed">
            Witness the grand scale of the Alpine regions, remote tropical sandbanks, severe desert dunes, and hyper-detailed wild predators.
          </p>
        </div>
      </section>

      {/* Main interactive grid area with separate specification panel */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side: Photo of the Day Specs & Lens Adjuster Panel */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Real CSS Filter Presets Controller Panel */}
          <div className="p-5 bg-[#0e0e0e] border border-[#F5F5F0]/15 rounded-none space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Filter className="w-4 h-4 text-[#FF5C00]" />
              <h3 className="font-sans font-black text-xs uppercase tracking-widest">Colorway Presets</h3>
            </div>
            <p className="text-[10px] text-gray-400 leading-normal uppercase font-mono tracking-wider">
              Apply structural camera film LUTs instantly to all grid images.
            </p>

            <div className="space-y-1.5">
              {presetsList.map((pr) => (
                <button
                  key={pr.id}
                  onClick={() => setSelectedPreset(pr.id)}
                  className={`w-full flex items-center justify-between text-left px-3.5 py-3 rounded-none border text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer ${
                    selectedPreset === pr.id 
                      ? 'bg-[#FF5C00] border-[#FF5C00] text-black font-black' 
                      : 'bg-[#121212] border-[#F5F5F0]/10 text-gray-400 hover:border-[#FF5C00] hover:text-white'
                  }`}
                >
                  <div>
                    <div className="font-bold">{pr.name}</div>
                    <div className="text-[8px] font-sans mt-0.5 opacity-80">{pr.desc}</div>
                  </div>
                  {selectedPreset === pr.id && <CheckCircle className="w-3.5 h-3.5 text-black" />}
                </button>
              ))}
            </div>
          </div>

          {/* Photo of the Day Technical Specs */}
          {photoOfTheDay && (
            <div className="p-5 bg-[#0e0e0e] border border-[#F5F5F0]/15 rounded-none space-y-4 text-xs">
              <div className="flex items-center gap-2 text-white">
                <Camera className="w-4 h-4 text-[#FF5C00]" />
                <h3 className="font-sans font-black uppercase tracking-widest text-xs">Exhibition Specs</h3>
              </div>
              
              <div className="rounded-none overflow-hidden aspect-[4/3] relative border border-[#F5F5F0]/10">
                <img 
                  src={photoOfTheDay.imgUrl} 
                  alt="POD" 
                  className={`w-full h-full object-cover mix-blend-luminosity ${selectedPreset}`}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3 pt-2 font-mono">
                <div>
                  <div className="text-gray-500 uppercase text-[8px] tracking-widest font-bold">PHOTO OF THE DAY</div>
                  <div className="text-white font-black font-sans text-sm uppercase tracking-tight">{photoOfTheDay.title}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[10px] pt-3 border-t border-[#F5F5F0]/10 uppercase tracking-wider">
                  <div>
                    <div className="text-gray-500 uppercase text-[8px] font-bold">LENS BODY</div>
                    <div className="text-gray-300 font-semibold">Phase One FX</div>
                  </div>
                  <div>
                    <div className="text-gray-500 uppercase text-[8px] font-bold">DIAPHRAGM</div>
                    <div className="text-gray-300 font-semibold">f / 1.4</div>
                  </div>
                  <div>
                    <div className="text-gray-500 uppercase text-[8px] font-bold">SHUTTER</div>
                    <div className="text-gray-300 font-semibold">1/1600s</div>
                  </div>
                  <div>
                    <div className="text-gray-500 uppercase text-[8px] font-bold">SENSITIVITY</div>
                    <div className="text-gray-300 font-semibold">ISO 100</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-[#121212] p-2.5 rounded-none border border-[#F5F5F0]/10 text-[9px] text-gray-500 leading-normal uppercase">
                  <Info className="w-3.5 h-3.5 text-[#FF5C00] flex-shrink-0 mt-0.5" />
                  <span>Metadata validated with Swiss GeoLab charts.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Filters bar & Interactive image grid */}
        <div id="nature-grid-display" className="lg:col-span-3 space-y-6">
          <div className="flex gap-1.5 pb-2 overflow-x-auto scrollbar-none">
            {(['ALL', 'MOUNTAINS', 'OCEANS', 'DESERTS', 'WILDLIFE', 'FORESTS'] as const).map(sub => (
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

                  {/* Apply the raw chosen colorpreset layout */}
                  <div 
                    onClick={() => onSelectArtwork(art)}
                    className="aspect-video overflow-hidden relative cursor-pointer"
                  >
                    <img 
                      src={art.imgUrl} 
                      alt={art.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 rounded-none mix-blend-luminosity hover:mix-blend-normal ${selectedPreset}`}
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
                          Telemetry <ArrowRight className="w-3.5 h-3.5 text-[#FF5C00]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
