import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { curriculumData } from './data/curriculumData';
import type { Section } from './types';
import GeminiChat from './components/GeminiChat';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const { user, updateProgress } = useAuth();
    
    // Keep a ref to the current user state to access it inside the observer callback
    // without triggering a re-run of the effect (which would disconnect/reconnect the observer).
    const userRef = useRef(user);
    useEffect(() => {
        userRef.current = user;
    }, [user]);

    // Flatten sections for easier iteration
    const allSections = useMemo(() => {
        const sections: Section[] = [];
        const flatten = (s: Section) => {
            sections.push(s);
            if (s.subSections) {
                s.subSections.forEach(flatten);
            }
        };
        curriculumData.sections.forEach(flatten);
        return sections;
    }, []);

    useEffect(() => {
        allSections.forEach(section => {
            sectionRefs.current[section.id] = document.getElementById(section.id);
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        // Check the ref instead of the dependency to avoid stale closures
                        // without rebuilding the observer.
                        const currentUser = userRef.current;
                        if(currentUser && !currentUser.progress.completedSections.includes(entry.target.id)) {
                           updateProgress(entry.target.id, 'section');
                        }
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px', // Trigger when section is nicely in view
                threshold: 0.1,
            }
        );
        
        const refs = sectionRefs.current;
        Object.keys(refs).forEach(key => {
            const element = refs[key];
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [allSections, updateProgress]); // Removed 'user' dependency to prevent thrashing

    return (
        <div className="bg-brand-bg min-h-screen font-sans text-brand-text relative selection:bg-brand-primary/20">
            {/* Animated Background Blobs - Light Theme Pastels */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
            </div>

            <Header onMenuClick={() => setIsSidebarOpen(true)} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 mt-8 relative">
                <Sidebar 
                    sections={curriculumData.sections} 
                    activeSection={activeSection} 
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
                <MainContent sections={curriculumData.sections} />
            </div>
            <Footer />
            <GeminiChat />
        </div>
    );
};

export default App;