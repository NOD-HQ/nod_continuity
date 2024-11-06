import React from 'react';
import { Brain, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">CIS</h1>
              <p className="text-xs opacity-90">Continuity Interview Support</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-indigo-200 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Interviews</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Analytics</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Settings</a>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}