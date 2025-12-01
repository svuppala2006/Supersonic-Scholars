import React, { useState, useEffect } from 'react';
import { Comment } from '../types';
import { getComments, postComment, getUserName } from '../services/db';
import { IdentityModal } from './IdentityModal';
import { MessageSquare, Send, User } from 'lucide-react';

interface Props {
  pageId: string;
}

export const CommentsSection: React.FC<Props> = ({ pageId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showIdentityModal, setShowIdentityModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadComments();
  }, [pageId]);

  const loadComments = async () => {
    const data = await getComments(pageId);
    setComments(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const user = getUserName();
    if (!user) {
      setShowIdentityModal(true);
      return;
    }

    setIsSubmitting(true);
    try {
      await postComment(pageId, newComment);
      setNewComment('');
      await loadComments();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-16 bg-slate-900/50 border border-slate-700 rounded-2xl p-6 sm:p-8">
      <IdentityModal 
        isOpen={showIdentityModal} 
        onComplete={() => {
            setShowIdentityModal(false);
            // Auto re-submit not needed here, user can click send again, simpler UX flow
        }} 
        onCancel={() => setShowIdentityModal(false)} 
      />

      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-600 rounded-lg">
           <MessageSquare className="text-white" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white brand-font">Class Discussion</h3>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="mb-8 flex gap-4">
        <div className="flex-grow">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ask a question or share a tip..."
            className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <button 
          type="submit" 
          disabled={!newComment.trim() || isSubmitting}
          className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors"
        >
          {isSubmitting ? 'Posting...' : <>Post <Send size={18} /></>}
        </button>
      </form>

      {/* List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-slate-500 text-center py-8 italic">No comments yet. Be the first to start the discussion!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700/50">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600">
                  <User size={20} className="text-slate-400" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-blue-400">{comment.userName}</span>
                  <span className="text-xs text-slate-500">{new Date(comment.timestamp).toLocaleDateString()}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{comment.text}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};