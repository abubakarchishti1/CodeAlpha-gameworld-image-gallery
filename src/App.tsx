import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Gamepad2, 
  Clapperboard, 
  Compass, 
  Paintbrush, 
  Menu, 
  X, 
  Heart, 
  Bookmark, 
  Settings, 
  Download, 
  Share2, 
  ExternalLink,
  Github,
  Bell,
  Clock,
  Sparkles,
  Info,
  CheckCircle,
  HelpCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Artwork } from './types';
import { ARTWORKS } from './data';
import { HomeView } from './components/HomeView';
import { GamingView } from './components/GamingView';
import { EntertainmentView } from './components/EntertainmentView';
import { NatureView } from './components/NatureView';
import { ArtView } from './components/ArtView';

export default function App() {
  // Navigation screen State
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Gaming' | 'Entertainment' | 'Nature' | 'Art'>('Home');
  
  // Storage arrays for bookmarks
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  
  // Selected artwork for global lightbox
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  
  // UI Panels State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [soundHumEnabled, setSoundHumEnabled] = useState(false);
  const [glassDensity, setGlassDensity] = useState<'normal' | 'dense'>('normal');
  const [currentTime, setCurrentTime] = useState('');
  
  // Download progress simulation state inside lightbox
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    try {
      const savedLikes = localStorage.getItem('galleryx_likes');
      if (savedLikes) setLikedIds(JSON.parse(savedLikes));
      
      const savedSaves = localStorage.getItem('galleryx_saves');
      if (savedSaves) setSavedIds(JSON.parse(savedSaves));
    } catch (err) {
      console.warn("Storage could not be restored", err);
    }
  }, []);

  // Update clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle Likes toggling
  const handleToggleLike = (id: string | number) => {
    const idStr = id.toString();
    setLikedIds(prev => {
      const next = prev.includes(idStr) ? prev.filter(x => x !== idStr) : [...prev, idStr];
      localStorage.setItem('galleryx_likes', JSON.stringify(next));
      return next;
    });
  };

  // Handle Saves toggling
  const handleToggleSave = (id: string | number) => {
    const idStr = id.toString();
    setSavedIds(prev => {
      const next = prev.includes(idStr) ? prev.filter(x => x !== idStr) : [...prev, idStr];
      localStorage.setItem('galleryx_saves', JSON.stringify(next));
      return next;
    });
  };

  // Select random exhibit helper
  const handleShuffleExhibit = () => {
    const randomIndex = Math.floor(Math.random() * ARTWORKS.length);
    const chosen = ARTWORKS[randomIndex];
    setSelectedArtwork(chosen);
  };

  // Navigate to next artwork in list
  const handleNextArtwork = () => {
    if (!selectedArtwork) return;
    const currentIndex = ARTWORKS.findIndex(art => art.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % ARTWORKS.length;
    setSelectedArtwork(ARTWORKS[nextIndex]);
    setDownloadProgress(null);
  };

  // Navigate to previous artwork in list
  const handlePrevArtwork = () => {
    if (!selectedArtwork) return;
    const currentIndex = ARTWORKS.findIndex(art => art.id === selectedArtwork.id);
    const prevIndex = (currentIndex - 1 + ARTWORKS.length) % ARTWORKS.length;
    setSelectedArtwork(ARTWORKS[prevIndex]);
    setDownloadProgress(null);
  };

  // Handle keyboard navigation for left/right keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedArtwork) return;
      if (e.key === 'ArrowRight') {
        handleNextArtwork();
      } else if (e.key === 'ArrowLeft') {
        handlePrevArtwork();
      } else if (e.key === 'Escape') {
        setSelectedArtwork(null);
        setDownloadProgress(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArtwork]);

  // Simulate High Definition wallpaper download
  const handleSimulateDownload = (title: string) => {
    if (downloadProgress !== null) return;
    setDownloadProgress(0);
    
    // Increment timer simulation
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setDownloadProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setDownloadProgress(null);
          setDownloadSuccessToast(true);
          setTimeout(() => setDownloadSuccessToast(false), 4000);
        }, 500);
      }
    }, 150);
  };

  // Get full objects of liked/saved for listings inside drawer sidebar
  const annotatedLikedObjects = useMemo(() => {
    return ARTWORKS.filter(art => likedIds.includes(art.id.toString()));
  }, [likedIds]);

  const annotatedSavedObjects = useMemo(() => {
    return ARTWORKS.filter(art => savedIds.includes(art.id.toString()));
  }, [savedIds]);

  // Related Exhibits list calculation
  const relatedExhibits = useMemo(() => {
    if (!selectedArtwork) return [];
    return ARTWORKS.filter(art => 
      art.id !== selectedArtwork.id && 
      (art.category === selectedArtwork.category || 
       (art.tags && selectedArtwork.tags && art.tags.some(t => selectedArtwork.tags?.includes(t))))
    ).slice(0, 4);
  }, [selectedArtwork]);

  return (
    <div id="atelier-application-root" className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] relative selection:bg-[#FF5C00] selection:text-black font-sans">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[45rem] h-[45rem] bg-[#FF5C00]/3 rounded-full filter blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-[#FF5C00]/2 rounded-full filter blur-[150px] pointer-events-none z-0" />

      {/* Persistent audio overlay playing ambient synth humming if enabled */}
      {soundHumEnabled && (
        <div className="hidden">
          <iframe 
            src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&loop=1&playlist=5qap5aO4i9A" 
            allow="autoplay"
          />
        </div>
      )}

      {/* Top Banner Warning for Sandbox limit */}
      <div className="bg-[#090909] border-b border-[#F5F5F0]/10 text-[10px] py-3 px-6 flex justify-between items-center z-40 relative font-mono text-[#F5F5F0]/60 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#FF5C00] rounded-none animate-ping" />
          <span>Interactive digital catalog fully initialized on server.</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>{currentTime} UTC</span>
          <span>// DECODES ACQUIRED: {ARTWORKS.length}</span>
        </div>
      </div>

      {/* Core Navigation Header */}
      <header id="main-navigation-header" className="sticky top-0 z-30 transition-all duration-300 border-b border-[#F5F5F0]/10 bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo Name - styled as Studio—Archive */}
          <div 
            onClick={() => setCurrentScreen('Home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="font-sans font-black text-xl text-white tracking-tighter uppercase group-hover:text-[#FF5C00] transition-colors">
              Gallery—X
            </span>
          </div>

          {/* Desktop Nav Actions */}
          <span className="hidden md:flex items-center gap-2 bg-[#121212] border border-[#F5F5F0]/10 p-1 rounded-none">
            {(['Home', 'Gaming', 'Entertainment', 'Nature', 'Art'] as const).map(screen => {
              const isActive = currentScreen === screen;
              const iconsList = {
                Home: <HomeIcon className="w-3.5 h-3.5" />,
                Gaming: <Gamepad2 className="w-3.5 h-3.5" />,
                Entertainment: <Clapperboard className="w-3.5 h-3.5" />,
                Nature: <Compass className="w-3.5 h-3.5" />,
                Art: <Paintbrush className="w-3.5 h-3.5" />
              };
              return (
                <button
                  key={screen}
                  id={`nav-tab-${screen}`}
                  onClick={() => setCurrentScreen(screen)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-none text-[10px] font-sans font-black uppercase tracking-wider transition cursor-pointer ${
                    isActive 
                      ? 'bg-[#FF5C00] text-black' 
                      : 'text-[#F5F5F0]/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {iconsList[screen]}
                  {screen === 'Art' ? 'Art Studio' : screen}
                </button>
              );
            })}
          </span>

          {/* User Controls & Utility */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleShuffleExhibit}
              className="hidden lg:flex items-center gap-1.5 border border-[#F5F5F0]/20 bg-transparent px-4 py-2 hover:bg-[#FF5C00] hover:text-black text-[10px] font-bold uppercase tracking-widest rounded-none transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF5C00] group-hover:text-black transition-colors" /> Shuffle Exhibit
            </button>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="bg-[#121212] hover:bg-white/5 border border-[#F5F5F0]/10 p-2.5 rounded-none text-[#F5F5F0] hover:text-[#FF5C00] transition flex items-center gap-1 relative cursor-pointer"
            >
              <Menu className="w-4 h-4" />
              {(loved => loved > 0 || savedIds.length > 0)(likedIds.length) && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF5C00] rounded-none" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sticky Tab Area */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 z-30 glass border-t border-white/10 bg-black/85 backdrop-blur-lg flex justify-around py-3">
        {(['Home', 'Gaming', 'Entertainment', 'Nature', 'Art'] as const).map(screen => {
          const isActive = currentScreen === screen;
          const icons = {
            Home: <HomeIcon className="w-5 h-5" />,
            Gaming: <Gamepad2 className="w-5 h-5" />,
            Entertainment: <Clapperboard className="w-5 h-5" />,
            Nature: <Compass className="w-5 h-5" />,
            Art: <Paintbrush className="w-5 h-5" />
          };
          return (
            <button
              key={screen}
              onClick={() => setCurrentScreen(screen)}
              className={`flex flex-col items-center gap-1 text-[10px] filter transition-all ${isActive ? 'text-secondary font-bold' : 'text-gray-400'}`}
            >
              {icons[screen]}
              <span>{screen}</span>
            </button>
          );
        })}
      </footer>

      {/* Main View Port wrap */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 pb-28 md:pb-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {currentScreen === 'Home' && (
              <HomeView 
                onNavigate={(screen) => setCurrentScreen(screen)}
                onSelectArtwork={setSelectedArtwork}
                likedIds={likedIds}
                savedIds={savedIds}
                onToggleLike={handleToggleLike}
                onToggleSave={handleToggleSave}
              />
            )}

            {currentScreen === 'Gaming' && (
              <GamingView 
                onSelectArtwork={setSelectedArtwork}
                likedIds={likedIds}
                savedIds={savedIds}
                onToggleLike={handleToggleLike}
                onToggleSave={handleToggleSave}
              />
            )}

            {currentScreen === 'Entertainment' && (
              <EntertainmentView 
                onSelectArtwork={setSelectedArtwork}
                likedIds={likedIds}
                savedIds={savedIds}
                onToggleLike={handleToggleLike}
                onToggleSave={handleToggleSave}
              />
            )}

            {currentScreen === 'Nature' && (
              <NatureView 
                onSelectArtwork={setSelectedArtwork}
                likedIds={likedIds}
                savedIds={savedIds}
                onToggleLike={handleToggleLike}
                onToggleSave={handleToggleSave}
              />
            )}

            {currentScreen === 'Art' && (
              <ArtView 
                onSelectArtwork={setSelectedArtwork}
                likedIds={likedIds}
                savedIds={savedIds}
                onToggleLike={handleToggleLike}
                onToggleSave={handleToggleSave}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Side Control Drawer / Settings & Saved Workspace */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
            />
            
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 sm:w-96 bg-[#090909] border-l border-[#F5F5F0]/15 p-8 z-50 flex flex-col justify-between overflow-y-auto rounded-none"
            >
              <div className="space-y-8">
                
                {/* Header Drawer */}
                <div className="flex justify-between items-center border-b border-[#F5F5F0]/10 pb-5">
                  <div>
                    <h3 className="text-xl font-black font-sans uppercase tracking-tighter text-white">Central Atelier</h3>
                    <p className="text-[10px] font-mono text-[#F5F5F0]/50 uppercase tracking-widest mt-1">Curation & Diagnostics</p>
                  </div>
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1.5 border border-[#F5F5F0]/10 hover:border-[#FF5C00] text-gray-400 hover:text-white transition rounded-none bg-transparent cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Ambient Control Modules */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white font-sans font-black text-[11px] tracking-widest uppercase">
                    <Settings className="w-3.5 h-3.5 text-[#FF5C00]" />
                    <span>App Settings</span>
                  </div>

                  <div className="p-4 bg-[#121212] border border-[#F5F5F0]/10 rounded-none space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-white uppercase tracking-wider font-bold">Ambient Buzz</div>
                        <div className="text-[9px] text-[#F5F5F0]/50 font-sans mt-0.5">Atmospheric background loop</div>
                      </div>
                      <button
                        onClick={() => setSoundHumEnabled(!soundHumEnabled)}
                        className={`text-[9px] font-black uppercase tracking-wider px-3 py-1.5 border transition rounded-none cursor-pointer ${
                          soundHumEnabled ? 'bg-[#FF5C00] border-[#FF5C00] text-black' : 'bg-transparent border-[#F5F5F0]/10 text-[#F5F5F0]/60 hover:border-white'
                        }`}
                      >
                        {soundHumEnabled ? 'ONLINE' : 'MUTED'}
                      </button>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#F5F5F0]/15 pt-3">
                      <div>
                        <div className="text-xs text-white uppercase tracking-wider font-bold">Contrast mode</div>
                        <div className="text-[9px] text-[#F5F5F0]/50 font-sans mt-0.5">Increase container depth</div>
                      </div>
                      <button
                        onClick={() => setGlassDensity(glassDensity === 'normal' ? 'dense' : 'normal')}
                        className="text-[9px] font-black uppercase tracking-wider px-3 py-1.5 bg-[#1a1a1b] border border-[#F5F5F0]/15 text-[#F5F5F0]/80 hover:text-white hover:border-white transition rounded-none cursor-pointer"
                      >
                        {glassDensity.toUpperCase()}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Curated Bookmark workspace lists */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white font-sans font-black text-[11px] tracking-widest uppercase">
                    <span className="flex items-center gap-2"><Bookmark className="w-3.5 h-3.5 text-[#FF5C00]" /> Bookmarks ({savedIds.length})</span>
                    {savedIds.length > 0 && (
                      <button 
                        onClick={() => {
                          setSavedIds([]);
                          localStorage.setItem('galleryx_saves', JSON.stringify([]));
                        }}
                        className="text-[9px] font-mono text-[#FF5C00] uppercase hover:underline"
                      >
                        wipe catalog
                      </button>
                    )}
                  </div>

                  {annotatedSavedObjects.length === 0 ? (
                    <div className="text-center py-6 bg-[#121212] border border-dashed border-[#F5F5F0]/10 text-[10px] text-[#F5F5F0]/40 font-mono uppercase tracking-wider rounded-none">
                      Archive clear
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {annotatedSavedObjects.map(art => (
                        <div 
                          key={art.id}
                          className="flex items-center gap-3 p-2 bg-[#121212] border border-[#F5F5F0]/10 hover:border-[#FF5C00] transition rounded-none cursor-pointer"
                          onClick={() => {
                            setSelectedArtwork(art);
                            setIsSidebarOpen(false);
                          }}
                        >
                          <img src={art.imgUrl} alt={art.title} className="w-9 h-9 object-cover rounded-none" referrerPolicy="no-referrer" />
                          <div className="flex-grow min-w-0">
                            <div className="text-xs text-white font-bold line-clamp-1 truncate uppercase">{art.title}</div>
                            <div className="text-[8px] font-mono text-[#F5F5F0]/50 uppercase tracking-wider">{art.category} // {art.subcategory}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Reaction feed */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white font-sans font-black text-[11px] tracking-widest uppercase">
                    <span className="flex items-center gap-2"><Heart className="w-3.5 h-3.5 text-[#FF5C00]" /> Saved Cuttings ({likedIds.length})</span>
                  </div>

                  {annotatedLikedObjects.length === 0 ? (
                    <div className="text-center py-6 bg-[#121212] border border-dashed border-[#F5F5F0]/10 text-[10px] text-[#F5F5F0]/40 font-mono uppercase tracking-wider rounded-none">
                      No files chosen
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 gap-2">
                      {annotatedLikedObjects.map(art => (
                        <div 
                          key={art.id}
                          onClick={() => {
                            setSelectedArtwork(art);
                            setIsSidebarOpen(false);
                          }}
                          className="aspect-square rounded-none overflow-hidden border border-[#F5F5F0]/10 cursor-pointer relative group"
                        >
                          <img src={art.imgUrl} alt="Like" className="w-full h-full object-cover rounded-none" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                            <Heart className="w-4 h-4 text-[#FF5C00] fill-current" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Utility legal details at bottom of Drawer */}
              <div className="pt-6 border-t border-[#F5F5F0]/10 space-y-3 font-mono text-[9px] text-[#F5F5F0]/40 leading-normal uppercase tracking-wider">
                <div className="flex justify-between">
                  <span>DEPLOYED UNIT</span>
                  <span className="text-[#FF5C00] font-bold">CLOUDRUN-3000</span>
                </div>
                <div>Compliance metrics checked. Persistent memory saved.</div>
              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Global Interactive Immersive Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="artwork-inspect-lightbox"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 scrollbar-none overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full bg-[#121212] border border-[#F5F5F0]/15 relative rounded-none shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              
              {/* Dismiss Lightbox Button */}
              <button 
                onClick={() => {
                  setSelectedArtwork(null);
                  setDownloadProgress(null);
                }}
                className="absolute top-4 right-4 z-20 bg-black border border-[#F5F5F0]/15 text-white/80 hover:text-white rounded-none p-2.5 transition cursor-pointer font-sans"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Graphics Screen (Left 7 Columns) */}
                <div className="lg:col-span-7 bg-black flex flex-col justify-center relative aspect-video lg:aspect-auto lg:h-[550px] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#F5F5F0]/10 rounded-none">
                  <img 
                    src={selectedArtwork.imgUrl} 
                    alt={selectedArtwork.title} 
                    className="w-full h-full object-cover rounded-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Left Navigation Touchpoint */}
                  <button
                    onClick={handlePrevArtwork}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/80 border border-[#F5F5F0]/15 text-[#F5F5F0]/80 hover:text-black hover:bg-[#FF5C00] hover:border-[#FF5C00] rounded-none p-3 transition-all cursor-pointer shadow-xl select-none"
                    title="Previous Image (← Key)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right Navigation Touchpoint */}
                  <button
                    onClick={handleNextArtwork}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/80 border border-[#F5F5F0]/15 text-[#F5F5F0]/80 hover:text-black hover:bg-[#FF5C00] hover:border-[#FF5C00] rounded-none p-3 transition-all cursor-pointer shadow-xl select-none"
                    title="Next Image (→ Key)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Subtle watermarked vector branding info bottom left */}
                  <div className="absolute bottom-4 left-4 z-10 bg-black border border-[#F5F5F0]/15 px-3 py-1.5 rounded-none text-[8px] font-mono uppercase tracking-widest text-[#F5F5F0]/60">
                    4K STREAM ENCODING // ATELIER AT-91 // KEYBOARD: ◄ / ►
                  </div>
                </div>

                {/* Inspect Diagnostics Sidebar (Right 5 Columns) */}
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between h-auto lg:h-[550px] overflow-y-auto space-y-6 bg-[#0E0E0E] rounded-none">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono bg-[#FF5C00]/10 border border-[#FF5C00]/20 text-[#FF5C00] px-3 py-1 rounded-none uppercase tracking-widest font-black">
                        {selectedArtwork.category} // {selectedArtwork.subcategory}
                      </span>
                      <span className="text-[#F5F5F0]/40 font-mono text-[9px] uppercase tracking-wider">UNIT: {selectedArtwork.id}</span>
                    </div>

                    <h2 className="text-2xl font-black font-sans uppercase tracking-tighter text-white leading-none">
                      {selectedArtwork.title}
                    </h2>

                    <p className="text-[11px] text-[#F5F5F0]/75 leading-relaxed font-light">
                      {selectedArtwork.description}
                    </p>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#F5F5F0]/60 bg-[#121212] p-3 border border-[#F5F5F0]/10 rounded-none uppercase tracking-wider">
                        <span className="text-[#F5F5F0]/40">CREATIVE AUTEUR</span>
                        <span className="text-white font-bold">{selectedArtwork.author || '@anonymous'}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 bg-white/2 p-2.5 rounded-xl border border-white/5">
                        <span className="text-gray-500">EXHIBIT YEAR</span>
                        <span className="text-white font-medium text-right">{selectedArtwork.year || '2024'}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[#F5F5F0]/40 font-mono text-[8px] uppercase tracking-widest font-bold">TAG INDEXES</div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedArtwork.tags?.map(t => (
                          <span key={t} className="text-[9px] font-mono bg-[#161617] border border-[#F5F5F0]/10 text-[#F5F5F0]/70 px-2 py-0.5 rounded-none uppercase tracking-wider">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="space-y-4 pt-4 border-t border-[#F5F5F0]/10">
                    
                    {/* Related Horiz Strip if any */}
                    {relatedExhibits.length > 0 && (
                      <div className="space-y-2 text-xs bg-[#121212] p-3 border border-[#F5F5F0]/5">
                        <div className="text-[#F5F5F0]/40 font-mono text-[8px] uppercase tracking-widest font-bold mb-2">RELATED ARCHIVES</div>
                        <div className="grid grid-cols-4 gap-2">
                          {relatedExhibits.map(rel => (
                            <div 
                              key={rel.id}
                              onClick={() => {
                                setSelectedArtwork(rel);
                                setDownloadProgress(null);
                              }}
                              className="aspect-[4/3] rounded-none overflow-hidden border border-[#F5F5F0]/10 cursor-pointer hover:border-[#FF5C00] transition"
                              title={rel.title}
                            >
                              <img src={rel.imgUrl} alt="rel" className="w-full h-full object-cover rounded-none" referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Simulation wallpaper trigger */}
                    {downloadProgress !== null ? (
                      <div className="space-y-1.5 bg-[#121212] border border-[#F5F5F0]/10 rounded-none p-3.5">
                        <div className="flex justify-between text-[9px] text-[#FF5C00] font-mono uppercase tracking-widest font-bold">
                          <span>Acquiring media asset packet...</span>
                          <span>{downloadProgress}%</span>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-none overflow-hidden">
                          <div 
                            className="bg-[#FF5C00] h-full transition-all duration-150"
                            style={{ width: `${downloadProgress}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleSimulateDownload(selectedArtwork.title)}
                          className="flex-grow bg-[#FF5C00] hover:bg-[#ff731d] font-sans font-black text-[10px] uppercase tracking-widest text-black py-3 rounded-none transition flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Download className="w-4 h-4" /> Save HD Asset
                        </button>
                        <button 
                          onClick={() => {
                            handleToggleLike(selectedArtwork.id);
                          }}
                          className={`p-3 rounded-none border transition-colors cursor-pointer ${
                            likedIds.includes(selectedArtwork.id.toString()) ? 'bg-[#FF5C00]/10 text-[#FF5C00] border-[#FF5C00]/30' : 'bg-transparent text-[#F5F5F0]/90 border-[#F5F5F0]/15 hover:text-white hover:border-[#FF5C00]'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedIds.includes(selectedArtwork.id.toString()) ? 'fill-current' : ''}`} />
                        </button>
                        <button 
                          onClick={() => {
                            handleToggleSave(selectedArtwork.id);
                          }}
                          className={`p-3 rounded-none border transition-colors cursor-pointer ${
                            savedIds.includes(selectedArtwork.id.toString()) ? 'bg-[#FF5C00]/10 text-[#FF5C00] border-[#FF5C00]/30' : 'bg-transparent text-[#F5F5F0]/90 border-[#F5F5F0]/15 hover:text-white hover:border-[#FF5C00]'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${savedIds.includes(selectedArtwork.id.toString()) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    )}

                  </div>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Finished Toasts notification area */}
      <AnimatePresence>
        {downloadSuccessToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl max-w-sm flex items-start gap-3 shadow-2xl"
          >
            <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white font-display">Download Protocol Initialized</div>
              <div className="text-[10px] text-gray-300 leading-normal mt-0.5">Asset matrix compilation complete. Simulated high-resolution RAW packaging sequence successfully triggered.</div>
            </div>
            <button 
              onClick={() => setDownloadSuccessToast(false)}
              className="text-gray-400 hover:text-white text-xs font-mono"
            >
              ok
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aesthetic Global Footer */}
      <footer id="global-exhibition-footer" className="border-t border-white/5 bg-black/60 pt-16 pb-24 md:pb-12 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary text-black font-extrabold text-xs flex items-center justify-center">
                G
              </div>
              <span className="font-display font-bold text-white tracking-tight">GalleryX</span>
            </div>
            <p className="leading-relaxed">
              Curating tomorrow's procedural artistry, generative code structures, and digital landscape presets for collectors and architects of the cloud.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#e5e2e1]">Interactive Nodes</h4>
            <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
              <button onClick={() => setCurrentScreen('Home')} className="text-left hover:text-white transition">Home Dashboard</button>
              <button onClick={() => setCurrentScreen('Gaming')} className="text-left hover:text-white transition">Gaming Realms</button>
              <button onClick={() => setCurrentScreen('Entertainment')} className="text-left hover:text-white transition">Movies & Concerts</button>
              <button onClick={() => setCurrentScreen('Nature')} className="text-left hover:text-white transition">Natural Landscapes</button>
              <button onClick={() => setCurrentScreen('Art')} className="text-left hover:text-white transition">Art Studio</button>
            </div>
          </div>

          <div className="space-y-4 font-mono text-[10px] leading-relaxed">
            <h4 className="text-xs font-semibold tracking-wider text-[#e5e2e1] uppercase">Diagnostic Metrics</h4>
            <div className="space-y-1">
              <div>HOST SYSTEM: Cloud Run Node</div>
              <div>METADATA SOURCE: Human & AI Curators</div>
              <div>GRID STATUS: <span className="text-emerald-400 select-none">● OPERATIONAL</span></div>
            </div>
            <div className="text-[9px] text-[#8e8d8d]">
              Disclaimer: Visual assets are hotlinked from public repositories for layout prototyping. All rights reserved to original creative owners.
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono">
          <div>© {new Date().getFullYear()} GalleryX Atelier. All code sequences executed.</div>
          <div className="flex gap-4">
            <span className="text-gray-600">Privacy Protocols</span>
            <span className="text-gray-600">Security Handshaking</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
