import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { QuizCard } from '@/components/quiz/QuizCard';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { quizzesData } from '@/content/en/quizzes';

export const QuizPage: React.FC = () => {
  useDocumentTitle('Awareness Quizzes');

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={Award}
        badge="Self-Assessment & Learning"
        title="Safety & Legal Awareness Quizzes"
        subtitle="Test your knowledge of women's constitutional protections, workplace rules, cyber security measures, and emergency protocols."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-xs sm:text-sm text-teal-950 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <p>
            These interactive questions are designed to reinforce awareness of real statutory rights and procedural guidelines in India. No scores or personal answers are stored on any server.
          </p>
        </div>

        <div className="space-y-8">
          {quizzesData.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};
