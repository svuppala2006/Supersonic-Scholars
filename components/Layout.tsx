import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Trophy, Car, BookOpen, Activity, PlayCircle } from 'lucide-react';

const NavItem: React.FC<{ to: string; label: string; icon: React.ReactNode; onClick?: () => void }> = ({ to, label, icon, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' 
          : 'text-slate-300 hover:text-white hover:bg-slate-800'
      }`}
    >
      {icon}
      <span className="font-semibold tracking-wide">{label}</span>
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: <Rocket size={20} /> },
    { to: '/fundamentals', label: 'Basics', icon: <BookOpen size={20} /> },
    { to: '/cars', label: 'Cars', icon: <Car size={20} /> },
    { to: '/stats', label: 'Stats', icon: <Activity size={20} /> },
    { to: '/competitive', label: 'Ranked', icon: <Trophy size={20} /> },
    { to: '/mechanics', label: 'Mechanics', icon: <PlayCircle size={20} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-orange-500 p-2 rounded-lg shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                <Rocket className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold brand-font tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                SS<span className="text-blue-500">SCHOLARS</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <NavItem key={link.to} {...link} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 animate-in slide-in-from-top-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavItem 
                    key={link.to} 
                    {...link} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                />
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Supersonic Scholars. Built for Hack4Impact IdeaCon.
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Not affiliated with Psyonix or Epic Games. Educational use only.
          </p>
        </div>
      </footer>
    </div>
  );
};