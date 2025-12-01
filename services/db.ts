/**
 * This service simulates a backend database using LocalStorage.
 * In a real deployment, these functions would be async fetch calls 
 * to a MongoDB/SQL backend.
 */

import { Comment, VoteData, UserVotes, QuizQuestion } from '../types';

const STORAGE_KEYS = {
  COMMENTS: 'rl_app_comments',
  VOTES_DATA: 'rl_app_votes_data', // Global counts
  USER_VOTES: 'rl_app_user_votes', // Current user's choices
  USER_NAME: 'rl_app_username',
};

// --- User Identity ---

export const getUserName = (): string | null => {
  return localStorage.getItem(STORAGE_KEYS.USER_NAME);
};

export const setUserName = (name: string): void => {
  localStorage.setItem(STORAGE_KEYS.USER_NAME, name);
};

// --- Comments ---

export const getComments = async (pageId: string): Promise<Comment[]> => {
  // Simulate network delay
  await new Promise(r => setTimeout(r, 300));
  
  const allComments: Comment[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMMENTS) || '[]');
  return allComments.filter(c => c.pageId === pageId).sort((a, b) => b.timestamp - a.timestamp);
};

export const postComment = async (pageId: string, text: string): Promise<Comment> => {
  await new Promise(r => setTimeout(r, 300));
  
  const userName = getUserName();
  if (!userName) throw new Error("User not identified");

  const newComment: Comment = {
    id: Date.now().toString(),
    pageId,
    userName,
    text,
    timestamp: Date.now(),
  };

  const allComments: Comment[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMMENTS) || '[]');
  allComments.push(newComment);
  localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(allComments));
  
  return newComment;
};

// --- Quiz/Polling ---

// Initialize default votes if empty
export const initVotes = (questions: QuizQuestion[]) => {
    const rawData = localStorage.getItem(STORAGE_KEYS.VOTES_DATA);
    let data: VoteData = rawData ? JSON.parse(rawData) : {};
    let changed = false;

    questions.forEach(q => {
        q.options.forEach(opt => {
            if (data[opt.id] === undefined) {
                // Seed with some random data for the "Live" feel if empty
                data[opt.id] = Math.floor(Math.random() * 5) + 1; 
                changed = true;
            }
        });
    });

    if (changed) {
        localStorage.setItem(STORAGE_KEYS.VOTES_DATA, JSON.stringify(data));
    }
};

export const getVoteCounts = async (): Promise<VoteData> => {
  await new Promise(r => setTimeout(r, 200));
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.VOTES_DATA) || '{}');
};

export const getUserVotes = (): UserVotes => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_VOTES) || '{}');
};

export const submitVote = async (questionId: string, optionId: string): Promise<VoteData> => {
  await new Promise(r => setTimeout(r, 400)); // Network delay

  const userName = getUserName();
  if (!userName) throw new Error("User not identified");

  const allVotes: VoteData = JSON.parse(localStorage.getItem(STORAGE_KEYS.VOTES_DATA) || '{}');
  const userVotes: UserVotes = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_VOTES) || '{}');
  
  const previousVote = userVotes[questionId];

  // If changing vote, decrement old
  if (previousVote && allVotes[previousVote] > 0) {
    allVotes[previousVote]--;
  }

  // Increment new
  if (!allVotes[optionId]) allVotes[optionId] = 0;
  allVotes[optionId]++;

  // Save user choice
  userVotes[questionId] = optionId;

  localStorage.setItem(STORAGE_KEYS.VOTES_DATA, JSON.stringify(allVotes));
  localStorage.setItem(STORAGE_KEYS.USER_VOTES, JSON.stringify(userVotes));

  return allVotes;
};