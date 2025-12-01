import React from 'react';
import { PAGES } from '../services/data';
import { QuizSection } from '../components/QuizSection';
import { CommentsSection } from '../components/CommentsSection';
import { Info, Lightbulb } from 'lucide-react';
import { Navigate } from 'react-router-dom';

interface Props {
  pageId: string;
}

export const TopicPage: React.FC<Props> = ({ pageId }) => {
  const data = PAGES.find(p => p.id === pageId);

  if (!data) return <Navigate to="/" />;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="mb-12 border-b border-slate-700 pb-8">
        <h1 className="text-4xl md:text-6xl font-black text-white brand-font mb-4 tracking-tight uppercase">
          {data.title}
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          {data.description}
        </p>
      </header>

      {/* Main Content Content */}
      <div className="grid gap-8 lg:gap-12">
        {data.content.map((section, idx) => (
          <section key={idx} className="group">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex mt-1 bg-slate-800 p-2 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                <Info size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  {section.sectionTitle}
                  <div className="h-px bg-slate-700 flex-grow ml-4"></div>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  {section.body}
                </p>
                
                {section.tip && (
                  <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r-lg mt-4 flex gap-4">
                    <Lightbulb className="text-orange-400 flex-shrink-0" size={24} />
                    <p className="text-orange-200 text-sm italic font-medium">
                      <span className="font-bold uppercase text-xs tracking-wider block mb-1 text-orange-400">Pro Tip</span>
                      {section.tip}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Quiz */}
      {data.quizzes.length > 0 && (
          <QuizSection questions={data.quizzes} />
      )}

      {/* Comments */}
      <CommentsSection pageId={data.id} />
    </div>
  );
};