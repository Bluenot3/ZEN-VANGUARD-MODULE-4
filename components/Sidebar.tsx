import React from 'react';
import type { Section } from '../types';
import { useAuth } from '../hooks/useAuth';
import { CheckIcon } from './icons/CheckIcon';

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, isOpen = false, onClose }) => {
  const { user } = useAuth();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 100; // Adjust for header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        window.history.pushState(null, '', `#${id}`);
    }
    if (onClose) onClose();
  };

  const NavLink: React.FC<{ section: Section, level?: number }> = ({ section, level = 0 }) => {
    const isActive = activeSection === section.id;
    const isCompleted = user?.progress.completedSections.includes(section.id);
    const paddingLeft = `${1 + level * 1}rem`;
    
    return (
      <li className="mb-1 relative group/item">
        <a
          href={`#${section.id}`}
          onClick={(e) => handleLinkClick(e, section.id)}
          className={`flex items-center justify-between py-2 pr-4 rounded-lg text-sm transition-all duration-200 border border-transparent
            ${isActive
              ? 'text-brand-primary font-bold bg-white shadow-sm border-slate-100 pl-5 translate-x-1'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 hover:pl-5'
            }
            ${isCompleted && !isActive ? 'text-slate-500/80' : ''}
          `}
          style={{ paddingLeft: isActive ? `calc(${paddingLeft} + 0.25rem)` : paddingLeft }}
        >
          <span className="truncate relative z-10">{section.title}</span>
          {isActive && (
              <div className="absolute left-2 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-glow-blue"></div>
          )}
          {isCompleted && (
             <span className={`transform transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0 group-hover/item:opacity-100'}`}>
                <CheckIcon />
             </span>
          )}
        </a>
       
        {section.subSections && (
          <ul className="mt-1 ml-4 border-l-2 border-slate-100 pl-1 space-y-0.5">
            {section.subSections.map((subSection) => (
              <NavLink key={subSection.id} section={subSection} level={level + 0.5} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
        {/* Mobile Backdrop */}
        <div 
            className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        />

        {/* Sidebar Container */}
        <aside 
            className={`
                fixed inset-y-0 left-0 z-50 w-80 bg-white/90 backdrop-blur-xl border-r border-slate-200 shadow-2xl transform transition-transform duration-300 ease-in-out
                lg:transform-none lg:static lg:z-auto lg:w-80 lg:flex-shrink-0 lg:bg-transparent lg:border-none lg:shadow-none lg:backdrop-blur-none
                lg:block lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)]
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
        >
            {/* Mobile Close Button */}
            <div className="lg:hidden flex justify-end p-4 border-b border-slate-100">
                <button onClick={onClose} className="p-2 text-slate-500 hover:text-brand-text bg-slate-50 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="h-full overflow-y-auto pr-2 pb-20 hover:pr-1 transition-all liquid-scrollbar p-4 lg:p-0">
                <div className="flex items-center gap-2 mb-6 px-2 lg:px-4">
                    <div className="w-1 h-4 bg-brand-primary rounded-full"></div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Curriculum Map
                    </h3>
                </div>
                <nav>
                    <ul className="space-y-1">
                    {sections.map((section) => (
                        <NavLink key={section.id} section={section} />
                    ))}
                    </ul>
                </nav>
            </div>
        </aside>
    </>
  );
};

export default Sidebar;