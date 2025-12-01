import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Target, Users } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative text-center py-20 px-4 overflow-hidden rounded-3xl bg-slate-800 border border-slate-700">
         {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black brand-font mb-6 tracking-tight">
            MASTER THE <br />
            <span className="rl-gradient-text">ARENA</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
            Welcome to <span className="font-bold text-white">Supersonic Scholars</span>. 
            Rocket League is more than a game—it's a high-octane blend of arcade soccer, demolition derby, and advanced physics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/fundamentals" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              Start Learning <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
          <div className="bg-blue-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-blue-400">
            <Zap size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 brand-font">Physics-Based Combat</h3>
          <p className="text-slate-400">
            Unlike other sports games, there is no aim assist. You control every interaction between your car and the ball using pure physics and momentum.
          </p>
        </div>
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-colors">
          <div className="bg-orange-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-orange-400">
            <Target size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 brand-font">High Skill Ceiling</h3>
          <p className="text-slate-400">
            From basic driving to ceiling resets, the mechanical depth is infinite. There is always something new to learn and master.
          </p>
        </div>
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors">
          <div className="bg-purple-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-purple-400">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 brand-font">Team Synergy</h3>
          <p className="text-slate-400">
            Rotation and positioning are just as important as mechanics. Learn how to work as a unit to outplay your opponents.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold text-white brand-font mb-2">Ready to hit the field?</h2>
          <p className="text-slate-400">Dive into the fundamentals and start your journey to Supersonic Legend.</p>
        </div>
        <Link 
          to="/fundamentals" 
          className="px-8 py-3 bg-white text-slate-900 hover:bg-slate-200 rounded-xl font-bold transition-colors whitespace-nowrap"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};