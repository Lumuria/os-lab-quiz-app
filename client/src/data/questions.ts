import questionsData from './questions.json';

export interface Option {
  letter: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export const questions: Question[] = questionsData as Question[];
