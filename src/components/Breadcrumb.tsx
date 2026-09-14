import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  currentPage: string;
  onNavigate: (route: PageRoute) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-amber-200/80 mb-4 bg-slate-900/60 backdrop-blur-sm w-fit px-3.5 py-1.5 rounded-full border border-amber-500/20">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-1 hover:text-amber-400 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>
      <ChevronRight className="w-3.5 h-3.5 text-amber-500/60" />
      <span className="text-white font-semibold">{currentPage}</span>
    </nav>
  );
};
