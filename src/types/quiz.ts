export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: 'rights' | 'cyber' | 'workplace' | 'laws';
}

export interface QuizTopic {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface SurveyQuestion {
  id: string;
  question: string;
  type: 'rating' | 'multiple-choice' | 'text-feedback';
  options?: string[];
  helpText?: string;
}
