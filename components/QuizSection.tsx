import React, { useState, useEffect } from 'react';
import { QuizQuestion, VoteData } from '../types';
import { getVoteCounts, getUserVotes, submitVote, getUserName, initVotes } from '../services/db';
import { IdentityModal } from './IdentityModal';
import { CheckCircle2, XCircle, BarChart2, AlertCircle } from 'lucide-react';

interface Props {
  questions: QuizQuestion[];
}

export const QuizSection: React.FC<Props> = ({ questions }) => {
  const [voteData, setVoteData] = useState<VoteData>({});
  const [userVotes, setUserVotes] = useState<{ [qId: string]: string }>({});
  const [showIdentityModal, setShowIdentityModal] = useState(false);
  const [pendingVote, setPendingVote] = useState<{ qId: string; optId: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initVotes(questions);
    const fetchData = async () => {
      const votes = await getVoteCounts();
      const myVotes = getUserVotes();
      setVoteData(votes);
      setUserVotes(myVotes);
      setLoading(false);
    };
    fetchData();
  }, [questions]);

  const handleOptionClick = (qId: string, optId: string) => {
    const user = getUserName();
    if (!user) {
      setPendingVote({ qId, optId });
      setShowIdentityModal(true);
      return;
    }
    executeVote(qId, optId);
  };

  const executeVote = async (qId: string, optId: string) => {
    // Optimistic update
    setUserVotes(prev => ({ ...prev, [qId]: optId }));
    
    try {
      const newVotes = await submitVote(qId, optId);
      setVoteData(newVotes);
    } catch (err) {
      console.error(err);
    }
  };

  const onIdentityConfirmed = () => {
    setShowIdentityModal(false);
    if (pendingVote) {
      executeVote(pendingVote.qId, pendingVote.optId);
      setPendingVote(null);
    }
  };

  if (loading) return <div className="animate-pulse bg-slate-800 h-64 rounded-xl"></div>;

  return (
    <div className="space-y-8 mt-12">
      <IdentityModal 
        isOpen={showIdentityModal} 
        onComplete={onIdentityConfirmed} 
        onCancel={() => setShowIdentityModal(false)} 
      />
      
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
        <BarChart2 className="text-orange-500" size={32} />
        <h2 className="text-3xl font-bold text-white brand-font">Knowledge Check</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {questions.map((q) => {
          const hasVoted = !!userVotes[q.id];
          const isCorrect = userVotes[q.id] === q.correctAnswerId;
          const totalVotesForQ = q.options.reduce((acc, opt) => acc + (voteData[opt.id] || 0), 0);

          return (
            <div key={q.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 relative overflow-hidden">
              {/* Question Header */}
              <div className="mb-4">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase bg-slate-900 px-2 py-1 rounded">
                  {q.type === 'boolean' ? 'True / False' : 'Multiple Choice'}
                </span>
                <h3 className="text-lg font-semibold text-white mt-2 leading-snug">{q.question}</h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {q.options.map((opt) => {
                  const isSelected = userVotes[q.id] === opt.id;
                  const isAnswer = opt.id === q.correctAnswerId;
                  const voteCount = voteData[opt.id] || 0;
                  const percentage = totalVotesForQ > 0 ? Math.round((voteCount / totalVotesForQ) * 100) : 0;
                  
                  // Styles based on state
                  let borderClass = 'border-slate-600 hover:border-slate-400';
                  if (hasVoted) {
                    if (isSelected && isAnswer) borderClass = 'border-green-500 bg-green-500/10';
                    else if (isSelected && !isAnswer) borderClass = 'border-red-500 bg-red-500/10';
                    else if (!isSelected && isAnswer) borderClass = 'border-green-500/50 border-dashed';
                    else borderClass = 'border-slate-700 opacity-50';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleOptionClick(q.id, opt.id)}
                      className={`w-full relative group p-3 rounded-lg border-2 text-left transition-all duration-200 ${borderClass}`}
                    >
                      {/* Progress Bar Background */}
                      {hasVoted && (
                        <div 
                          className="absolute inset-y-0 left-0 bg-slate-700/50 z-0 transition-all duration-500" 
                          style={{ width: `${percentage}%` }}
                        />
                      )}
                      
                      <div className="relative z-10 flex justify-between items-center">
                        <span className={`font-medium ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {opt.text}
                        </span>
                        {hasVoted && (
                           <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900/80 px-2 py-1 rounded">
                             {percentage}% ({voteCount})
                           </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {hasVoted && (
                <div className={`mt-4 p-3 rounded-lg flex items-center gap-3 text-sm font-medium animate-in slide-in-from-bottom-2 ${
                  isCorrect ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                }`}>
                  {isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                  <span>
                    {isCorrect 
                      ? "Great shot! That's correct." 
                      : "Nice try! Check the correct answer indicated above."}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};