
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import ScrollProgressBar from './ScrollProgressBar';
import { GraduationCapIcon } from './icons/GraduationCapIcon';
import { LabIcon } from './icons/LabIcon';

const Header: React.FC = () => {
  const { user } = useAuth();
  const totalLabs = 31; // There are 31 interactive components in this module

  return (
    <header className="sticky top-0 z-40 bg-brand-bg/80 backdrop-blur-lg">
        <ScrollProgressBar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold text-brand-text">
                        <span className="text-brand-primary">ZEN</span> VANGUARD · Module 4
                    </h1>
                </div>
                {user && (
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2" title="Points Earned">
                             <GraduationCapIcon />
                            <span className="font-semibold text-brand-text">{user.points} <span className="text-sm font-normal text-brand-text-light">Points</span></span>
                        </div>
                         <div className="flex items-center gap-2" title="Labs Completed">
                             <LabIcon />
                            <span className="font-semibold text-brand-text">{user.progress.completedInteractives.length} / {totalLabs} <span className="text-sm font-normal text-brand-text-light">Labs</span></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="font-semibold text-brand-text">{user.name}</p>
                                <p className="text-xs text-brand-text-light">{user.email}</p>
                            </div>
                            <img className="h-12 w-12 rounded-full shadow-neumorphic-out" src={user.picture || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`} alt="User avatar" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </header>
  );
};

export default Header;
