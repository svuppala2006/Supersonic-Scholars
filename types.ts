export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'boolean' | 'multiple';
  options: QuizOption[];
  correctAnswerId: string;
}

export interface PageContent {
  id: string;
  title: string;
  description: string;
  content: {
    sectionTitle: string;
    body: string;
    tip?: string;
  }[];
  quizzes: QuizQuestion[];
}

export interface Comment {
  id: string;
  pageId: string;
  userName: string;
  text: string;
  timestamp: number;
}

export interface User {
  name: string;
}

export interface VoteData {
  [optionId: string]: number;
}

export interface UserVotes {
  [questionId: string]: string; // Maps questionId to selected optionId
}