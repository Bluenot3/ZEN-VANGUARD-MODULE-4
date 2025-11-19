
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import ScrollProgressBar from './ScrollProgressBar';
import { GraduationCapIcon } from './icons/GraduationCapIcon';
import { LabIcon } from './icons/LabIcon';
import { getAiClient } from '../services/aiService';
import { curriculumData } from '../data/curriculumData';
import { Type } from '@google/genai';

interface HeaderProps {
    onMenuClick?: () => void;
}

interface SearchResult {
    answer: string;
    relevantSections: {
        id: string;
        title: string;
        reason: string;
    }[];
}

// --- Slot Machine Animation Components ---

const SlotDigit: React.FC<{ value: string }> = ({ value }) => {
    const isNumber = !isNaN(parseInt(value));
    // If it's not a number (e.g. comma or slash), just render it statically
    if (!isNumber) return <span className="font-mono text-brand-text font-bold">{value}</span>;

    const digit = parseInt(value);

    return (
        <div className="relative h-[1em] w-[0.6em] overflow-hidden inline-block align-bottom -mb-[0.05em]">
            <div 
                className="absolute top-0 left-0 flex flex-col transition-transform duration-[800ms] cubic-bezier(0.2, 1, 0.3, 1)"
                style={{ transform: `translateY(-${digit * 10}%)` }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={num} className="h-[1em] flex items-center justify-center font-mono text-brand-text tabular-nums font-bold">
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
};

const SlotCounter: React.FC<{ value: number | string; minDigits?: number }> = ({ value, minDigits = 1 }) => {
    const valueStr = value.toString().padStart(minDigits, '0');
    const digits = valueStr.split('');

    return (
        <div className="flex items-center overflow-hidden leading-none relative">
             {/* Subtle 3D cylindrical effect */}
            <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-white/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-white/90 to-transparent z-10 pointer-events-none"></div>
            
            {digits.map((digit, index) => (
                // Using index as key ensures the component stays mounted to animate value changes
                <SlotDigit key={index} value={digit} />
            ))}
        </div>
    );
};

// --- Main Header Component ---

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, resetProgress } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isResetConfirm, setIsResetConfirm] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Calculate total subsections for progress tracking
  const totalSubSections = curriculumData.sections.reduce((acc, section) => acc + (section.subSections?.length || 0), 0);
  
  // Robustly count completed subsections (excluding parent sections like 'part-1' or 'overview')
  // This ensures the "Labs" count is accurate to actual modules
  const completedSubSections = user?.progress.completedSections.filter(id => /^\d+-\d+$/.test(id)).length || 0;

  const handleSearch = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!searchQuery.trim()) return;
      
      setIsSearching(true);
      setSearchResults(null);
      setShowSearch(true);

      try {
          const ai = await getAiClient();
          const context = curriculumData.sections.map(s => 
              `SECTION [${s.id}]: ${s.title}\n` + 
              (s.content.filter(c => c.type === 'paragraph').map(c => c.content).join(' ').substring(0, 300) + '...') + '\n' +
              (s.subSections?.map(sub => 
                  `  SUBSECTION [${sub.id}]: ${sub.title}\n  Content: ${sub.content.filter(c => c.type === 'paragraph').map(c => c.content).join(' ').substring(0, 300)}...`
              ).join('\n') || '')
          ).join('\n\n');

          const prompt = `You are "Gemma 3", an advanced AI tutor for the ZEN VANGUARD Module 4 curriculum.
          
          Curriculum Context:
          ${context}

          User Question: "${searchQuery}"

          Instructions:
          1. Provide a direct, helpful answer to the user's question based strictly on the curriculum content provided.
          2. Identify up to 3 specific subsections (ids like '1-1', '2-3', etc.) that are most relevant to the query.
          3. For each section, explain why the user should visit it.

          Output strictly JSON.`;

          const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
              config: {
                  responseMimeType: 'application/json',
                  responseSchema: {
                      type: Type.OBJECT,
                      properties: {
                          answer: { type: Type.STRING, description: "A concise answer to the user's question." },
                          relevantSections: {
                              type: Type.ARRAY,
                              items: {
                                  type: Type.OBJECT,
                                  properties: {
                                      id: { type: Type.STRING },
                                      title: { type: Type.STRING },
                                      reason: { type: Type.STRING }
                                  }
                              }
                          }
                      },
                      required: ['answer', 'relevantSections']
                  }
              }
          });
          
          const result = JSON.parse(response.text);
          setSearchResults(result);

      } catch (error) {
          console.error("Search failed", error);
          setSearchResults({
              answer: "Gemma 3 is momentarily unavailable or could not process your request. Please try again.",
              relevantSections: []
          });
      } finally {
          setIsSearching(false);
      }
  };

  // Click outside handlers
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
          if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
              setShowSearch(false);
          }
          if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
            setIsProfileOpen(false);
            setIsResetConfirm(false);
          }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        setShowSearch(false);
    }
  };

  const handleResetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isResetConfirm) {
        resetProgress();
        setIsProfileOpen(false);
        setIsResetConfirm(false);
        // Use instant scroll to prevent triggering intersection observers on the way up
        window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
        setIsResetConfirm(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-panel transition-all duration-300 border-b border-white/20 shadow-glass backdrop-blur-xl bg-white/80 supports-[backdrop-filter]:bg-white/60">
        <ScrollProgressBar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 gap-4">
                <div className="flex items-center gap-4 flex-shrink-0">
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={onMenuClick}
                        className="lg:hidden p-2 -ml-2 text-brand-text hover:text-brand-primary transition-colors rounded-lg hover:bg-slate-100/50"
                        aria-label="Open Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="relative group cursor-pointer flex items-center gap-3">
                        <div className="relative w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20 group-hover:shadow-glow-blue transition-all duration-300">
                            <span className="text-white font-extrabold text-xl">Z</span>
                        </div>
                         <div className="flex flex-col justify-center hidden sm:flex">
                            <h1 className="text-lg font-bold tracking-tight text-brand-text leading-none">
                                ZEN <span className="font-light text-slate-500">VANGUARD</span>
                            </h1>
                            <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase mt-0.5">Module 4</span>
                        </div>
                    </div>
                </div>

                {/* Search Bar - Centered */}
                <div className="flex-1 max-w-2xl hidden md:block relative" ref={searchRef}>
                    <form onSubmit={handleSearch} className="relative group">
                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-12 pr-12 py-3 border-0 rounded-full leading-5 bg-slate-100/50 text-slate-900 placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-primary/30 focus:shadow-lg sm:text-sm transition-all duration-300 shadow-inner"
                            placeholder="Ask Gemma 3 about the curriculum..."
                        />
                         <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                             {isSearching ? (
                                 <div className="w-5 h-5 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
                             ) : (
                                 <span className="text-xs text-slate-400 font-medium bg-slate-200/50 px-2 py-1 rounded-md">⌘K</span>
                             )}
                         </div>
                    </form>
                    
                    {/* Search Results Dropdown */}
                    {showSearch && (searchResults || isSearching) && (
                        <div className="absolute top-full left-0 right-0 mt-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-6 animate-fade-in-up origin-top z-50 ring-1 ring-black/5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-widest">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                                    Powered by Gemma 3
                                </div>
                            </div>
                            
                            {isSearching ? (
                                <div className="space-y-4">
                                    <div className="h-4 bg-slate-100 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-4 bg-slate-100 rounded w-1/2 animate-pulse"></div>
                                    <div className="h-20 bg-slate-50 rounded-xl animate-pulse mt-4"></div>
                                </div>
                            ) : searchResults ? (
                                <div className="space-y-6">
                                    <div className="prose prose-sm max-w-none">
                                        <p className="text-slate-700 leading-relaxed">{searchResults.answer}</p>
                                    </div>
                                    
                                    {searchResults.relevantSections && searchResults.relevantSections.length > 0 && (
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Suggested Modules</h4>
                                            <div className="grid gap-3">
                                                {searchResults.relevantSections.map((section) => (
                                                    <button 
                                                        key={section.id}
                                                        onClick={() => handleLinkClick(section.id)}
                                                        className="flex items-start text-left p-3 rounded-xl hover:bg-brand-primary/5 border border-slate-100 hover:border-brand-primary/20 transition-all group"
                                                    >
                                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-surface-highlight flex items-center justify-center text-[10px] font-bold text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-sm font-bold text-brand-text group-hover:text-brand-primary">{section.title || `Section ${section.id}`}</p>
                                                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{section.reason}</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>
                
                {user && (
                    <div className="flex items-center gap-3 md:gap-6">
                        {/* XP Counter with Slot Animation */}
                        <div className="flex items-center gap-3 group cursor-help relative" title="Total XP Earned">
                             <div className="w-10 h-10 flex items-center justify-center bg-brand-surface-highlight rounded-full group-hover:bg-brand-primary/10 transition-colors">
                                <GraduationCapIcon />
                             </div>
                            <div className="hidden lg:flex flex-col">
                                <div className="text-lg text-brand-text">
                                    <SlotCounter value={user.points} />
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 group-hover:text-brand-primary transition-colors">XP</span>
                            </div>
                        </div>

                        {/* Labs Counter with Slot Animation */}
                         <div className="flex items-center gap-3 group cursor-help relative" title="Labs Completed">
                             <div className="w-10 h-10 flex items-center justify-center bg-brand-surface-highlight rounded-full group-hover:bg-pale-yellow/10 transition-colors">
                                 <LabIcon />
                             </div>
                            <div className="hidden lg:flex flex-col">
                                <div className="text-lg text-brand-text flex items-center gap-0.5">
                                    <SlotCounter value={completedSubSections} />
                                    <span className="text-slate-300 font-light mx-0.5">/</span>
                                    <span className="text-slate-400">{totalSubSections}</span>
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 group-hover:text-pale-yellow transition-colors">Labs</span>
                            </div>
                        </div>

                        <div className="w-px h-10 bg-slate-200 mx-1 hidden sm:block"></div>

                        {/* User Profile & Dropdown */}
                        <div className="flex items-center gap-3 pl-1 relative" ref={profileRef}>
                            <div className="text-right hidden xl:block">
                                <p className="font-bold text-sm text-brand-text leading-tight">{user.name}</p>
                                <p className="text-[10px] text-brand-primary font-bold uppercase tracking-wide">Elite Vanguard</p>
                            </div>
                            <button 
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="relative group cursor-pointer focus:outline-none"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <img className="relative h-11 w-11 rounded-full border-2 border-white shadow-md object-cover" src={user.picture || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`} alt="User avatar" />
                                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full z-10 shadow-sm"></div>
                            </button>

                            {isProfileOpen && (
                                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-fade-in ring-1 ring-black/5 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                        <p className="font-bold text-sm text-brand-text">{user.name}</p>
                                        <p className="text-xs text-slate-500 truncate font-mono">{user.email}</p>
                                    </div>
                                    <div className="py-1">
                                         <button 
                                            onClick={handleResetClick}
                                            className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-200 flex items-center gap-2
                                                ${isResetConfirm 
                                                    ? 'bg-red-50 text-red-600 font-bold hover:bg-red-100' 
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                                                }`}
                                        >
                                            {isResetConfirm ? (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    Are you sure?
                                                </>
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                    </svg>
                                                    Reset Progress
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </header>
  );
};

export default Header;
