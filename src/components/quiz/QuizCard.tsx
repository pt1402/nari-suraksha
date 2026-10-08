import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { QuizTopic } from '@/types/quiz';
import { useLanguage } from '@/hooks/useLanguage';

interface QuizCardProps {
  quiz: QuizTopic;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const { t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = quiz.questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (showExplanation) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    if (idx === question.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quiz.questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
            {t('quiz.awareness_check', { defaultValue: 'Awareness Check' })}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{quiz.title}</h3>
        </div>
        <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
          {!isCompleted
            ? t('quiz.question_progress', {
                current: currentIdx + 1,
                total: quiz.questions.length,
                defaultValue: `Question ${currentIdx + 1} of ${quiz.questions.length}`,
              })
            : t('quiz.completed', { defaultValue: 'Completed' })}
        </div>
      </div>

      {!isCompleted ? (
        <div className="space-y-6">
          <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
            {question.question}
          </p>

          <div className="space-y-3" role="radiogroup" aria-label="Quiz options">
            {question.options.map((option, idx) => {
              let btnClass = 'border-slate-200 hover:border-primary-400 hover:bg-slate-50 text-slate-800';

              if (showExplanation) {
                if (idx === question.correctAnswerIndex) {
                  btnClass = 'bg-teal-50 border-teal-500 text-teal-900 font-semibold ring-1 ring-teal-500';
                } else if (idx === selectedAnswer) {
                  btnClass = 'bg-red-50 border-red-400 text-red-900 ring-1 ring-red-400';
                } else {
                  btnClass = 'opacity-60 border-slate-200 text-slate-600';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition flex items-start gap-3 focus:outline-none focus:ring-2 focus:ring-primary-600 ${btnClass}`}
                  role="radio"
                  aria-checked={selectedAnswer === idx}
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showExplanation && idx === question.correctAnswerIndex && (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  )}
                  {showExplanation && idx === selectedAnswer && idx !== question.correctAnswerIndex && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="bg-primary-50/70 border border-primary-200 rounded-xl p-4 text-xs sm:text-sm text-primary-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-primary-900">
                <HelpCircle className="w-4 h-4 text-primary-700" />
                <span>{t('quiz.legal_explanation', { defaultValue: 'Legal Explanation:' })}</span>
              </div>
              <p className="leading-relaxed text-slate-700">{question.explanation}</p>
            </div>
          )}

          {showExplanation && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-800 hover:bg-primary-900 text-white text-sm font-semibold rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-primary-600"
              >
                <span>
                  {currentIdx + 1 < quiz.questions.length
                    ? t('quiz.next_question', { defaultValue: 'Next Question' })
                    : t('quiz.view_results', { defaultValue: 'View Results' })}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-6 space-y-4">
          <div className="inline-flex p-3 bg-teal-100 rounded-full text-teal-800 mb-2">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900">
            {t('quiz.quiz_completed', { defaultValue: 'Quiz Completed!' })}
          </h4>
          <p className="text-slate-600 text-sm">
            {t('quiz.score_text', {
              score,
              total: quiz.questions.length,
              defaultValue: `You scored ${score} out of ${quiz.questions.length}.`,
            })}
          </p>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {t('quiz.score_advice', {
              defaultValue:
                'Review the legal guides and rights sections to strengthen your knowledge of rights and safe procedures.',
            })}
          </p>
          <div className="pt-4">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-lg transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('quiz.retry_quiz', { defaultValue: 'Retry Quiz' })}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
