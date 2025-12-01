import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import { setUserName as saveToStorage } from '../services/db';

interface Props {
  isOpen: boolean;
  onComplete: () => void;
  onCancel: () => void;
}

export const IdentityModal: React.FC<Props> = ({ isOpen, onComplete, onCancel }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter a name to participate.');
      return;
    }
    saveToStorage(name.trim());
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-md w-full p-6 shadow-2xl shadow-blue-900/20 animate-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-600/20 rounded-full">
            <UserCircle size={32} className="text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white brand-font">Identify Yourself</h2>
            <p className="text-slate-400 text-sm">Join the class to vote and comment.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Your Name (Visible to others)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-500"
              placeholder="e.g. TurboGarrett"
              autoFocus
            />
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all font-bold"
            >
              Start Learning
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};