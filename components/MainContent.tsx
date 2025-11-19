import React from 'react';
import type { Section } from '../types';
import SectionRenderer from './SectionRenderer';

interface MainContentProps {
  sections: Section[];
}

const MainContent: React.FC<MainContentProps> = ({ sections }) => {
  const renderSection = (section: Section, level: number = 0) => (
    <section key={section.id} id={section.id} className="mb-24 scroll-mt-32 group/section">
      <div className={`bg-brand-surface rounded-3xl shadow-soft p-8 md:p-12 border border-slate-100 relative overflow-hidden animate-fade-in-up transition-all duration-500 hover:shadow-lg hover:border-slate-200`}>
         
         {/* Subtle background gradient decoration */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent opacity-50 -z-10"></div>

        <div className="mb-10">
             {level === 0 && <div className="h-1 w-12 bg-gradient-to-r from-brand-primary to-brand-secondary mb-6 rounded-full"></div>}
             <h2 className={`font-bold leading-tight tracking-tight text-brand-text ${
                level === 0 ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
            }`}>
                {section.title}
            </h2>
        </div>
        
        <div className="space-y-8">
            {section.content.map((item, index) => (
            <SectionRenderer key={index} item={item} section={section} />
            ))}
        </div>
      </div>
      {section.subSections && (
        <div className="mt-12 pl-0 md:pl-8 border-l border-slate-200 space-y-12">
            {section.subSections.map((subSection) => renderSection(subSection, level + 1))}
        </div>
      )}
    </section>
  );

  return (
    <main className="flex-1 min-w-0 pb-32">
      <div className="mb-20 bg-brand-surface rounded-3xl shadow-soft p-10 md:p-16 border border-slate-100 relative overflow-hidden animate-fade-in-up group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 opacity-100"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-primary">System Core Online</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text mb-8 tracking-tight leading-tight">
                Welcome to <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Module 4</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl font-light">
                <span className="font-semibold text-brand-text">Systems Mastery & Professional Integration.</span> Elevate from practitioner to strategic operator. Master the engineering, governance, and analytical frameworks required to build robust, trustworthy AI systems at a professional scale.
            </p>
        </div>
      </div>
      <div className="space-y-24">
        {sections.map((section) => renderSection(section))}
      </div>
    </main>
  );
};

export default MainContent;