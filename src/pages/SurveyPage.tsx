import React, { useState } from 'react';
import { MessageSquare, Star, CheckCircle, Shield } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const SurveyPage: React.FC = () => {
  useDocumentTitle('Portal Feedback & Survey');
  const [rating, setRating] = useState<number>(0);
  const [foundInfo, setFoundInfo] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const [, saveFeedbackList] = useLocalStorage<any[]>('nari_anonymous_feedback', []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry = {
      timestamp: new Date().toISOString(),
      rating,
      foundInfo,
      feedback: feedback.trim().slice(0, 500),
    };
    saveFeedbackList((prev) => [...(prev || []), entry]);
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={MessageSquare}
        badge="Community Input"
        title="Portal Feedback & Usability Survey"
        subtitle="Help us improve the clarity, accessibility, and reach of this public awareness portal. We do not collect any personal identifying information."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DisclaimerBox />

        <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 text-xs text-primary-950 flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
          <p>
            <strong>Strict Privacy Notice: </strong>
            This feedback form is strictly for evaluating the readability and accessibility of this portal. Please do not submit names, phone numbers, incident reports, or personal grievances here. To seek immediate help, call 112 or visit our <a href="/get-help" className="underline font-bold">Helplines page</a>.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Question 1: Ease of Use Rating */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">
                  1. How would you rate the overall clarity of information on this portal?
                </label>
                <div className="flex items-center gap-2 pt-1" role="radiogroup" aria-label="Portal rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                      aria-label={`${star} star rating`}
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          star <= rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300 hover:text-amber-200'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-slate-500 ml-2">
                    {rating > 0 ? `${rating} out of 5 stars` : 'Select a rating'}
                  </span>
                </div>
              </div>

              {/* Question 2: Did you find what you needed? */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">
                  2. Did you find the awareness information you were looking for?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium">
                  {['Yes, completely', 'Partially', 'No, need more topics'].map((opt) => (
                    <label
                      key={opt}
                      className={`p-3 rounded-lg border flex items-center gap-2 cursor-pointer transition ${
                        foundInfo === opt
                          ? 'border-primary-600 bg-primary-50 text-primary-900 font-semibold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="foundInfo"
                        value={opt}
                        checked={foundInfo === opt}
                        onChange={(e) => setFoundInfo(e.target.value)}
                        className="text-primary-800 focus:ring-primary-500"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 3: Feedback text */}
              <div className="space-y-2">
                <label htmlFor="survey-feedback" className="block text-sm font-bold text-slate-900">
                  3. What additional safety topics or language translations would be helpful?
                </label>
                <textarea
                  id="survey-feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Suggestions on topics, fonts, usability... (Do not enter personal data or incident details)"
                  rows={4}
                  maxLength={500}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white"
                />
                <span className="text-xs text-slate-400 block text-right">{feedback.length} / 500 characters</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary-800 hover:bg-primary-900 text-white font-bold text-sm rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-primary-600"
                >
                  Submit Anonymous Feedback
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-full inline-block">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your feedback has been saved anonymously to help improve the portal’s usability and content structure.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setRating(0);
                    setFoundInfo('');
                    setFeedback('');
                  }}
                  className="text-xs font-semibold text-primary-800 underline hover:text-primary-900"
                >
                  Submit another feedback response
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
