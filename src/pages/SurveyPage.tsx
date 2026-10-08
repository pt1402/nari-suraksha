import React, { useState } from 'react';
import { MessageSquare, Star, CheckCircle, ShieldAlert, Download, Info } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const SurveyPage: React.FC = () => {
  useDocumentTitle('Portal Usability Survey');
  const [clarityScore, setClarityScore] = useState<number>(0);
  const [navigationEase, setNavigationEase] = useState<string>('');
  const [foundTopic, setFoundTopic] = useState<string>('');
  const [fontReadability, setFontReadability] = useState<string>('');
  const [generalCategorySuggestion, setGeneralCategorySuggestion] = useState<string>('');
  const [saveLocallyChecked, setSaveLocallyChecked] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Exact required warning string:
  const MANDATORY_SURVEY_WARNING =
    'Do not submit emergency requests, personal incident details, evidence, passwords, OTPs, banking information, addresses, or identifying information through this portal.';

  const handleDownloadTemplate = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      encodeURIComponent(
        'Survey Question,Options / Response\n' +
          '1. Overall clarity of information (1-5),5\n' +
          '2. Ease of website navigation,Easy\n' +
          '3. Found relevant awareness topic,Yes\n' +
          '4. Text readability,Clear\n' +
          '5. Suggested general awareness topic for future,Digital safety guidelines\n'
      );
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', 'nari_suraksha_usability_survey_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadResponse = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      encodeURIComponent(
        'Survey Question,User Response\n' +
          `1. Overall clarity of information (1-5),${clarityScore}\n` +
          `2. Ease of website navigation,${navigationEase || 'Not selected'}\n` +
          `3. Found relevant awareness topic,${foundTopic || 'Not selected'}\n` +
          `4. Text readability,${fontReadability || 'Not selected'}\n` +
          `5. General category suggestion,${generalCategorySuggestion || 'None'}\n` +
          `Date Exported,${new Date().toISOString()}\n`
      );
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', 'nari_suraksha_my_feedback.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (saveLocallyChecked) {
      try {
        const draft = {
          clarityScore,
          navigationEase,
          foundTopic,
          fontReadability,
          generalCategorySuggestion,
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem('nari_survey_local_draft', JSON.stringify(draft));
      } catch (err) {
        console.warn('Unable to save draft locally', err);
      }
    }
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-16">
      <PageHero
        icon={MessageSquare}
        badge="Community Input"
        title="Portal Usability & Accessibility Survey"
        subtitle="Help us evaluate the readability, contrast, and navigation of this public awareness portal. We collect zero personal or incident information."
      >
        <button
          onClick={handleDownloadTemplate}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-800/80 hover:bg-primary-700 text-white text-xs font-semibold border border-primary-600 transition shadow-sm"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Survey Template (CSV)</span>
        </button>
      </PageHero>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DisclaimerBox />

        {/* Exact Mandatory Warning Banner */}
        <div
          role="alert"
          aria-label="Survey security warning"
          className="bg-emergency-50 border-2 border-emergency-600 rounded-2xl p-5 text-emergency-950 flex items-start gap-3.5 shadow-sm"
        >
          <ShieldAlert className="w-6 h-6 text-emergency-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <span className="font-extrabold text-sm text-emergency-900 block uppercase tracking-wide">
              Mandatory Data Privacy & Emergency Notice:
            </span>
            <p className="text-xs sm:text-sm font-semibold leading-relaxed">
              {MANDATORY_SURVEY_WARNING}
            </p>
          </div>
        </div>

        {/* Informational Box regarding Backendless architecture */}
        <div className="bg-primary-50/70 border border-primary-200 rounded-xl p-4 text-xs text-primary-950 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
          <p>
            <strong>Zero Server Transmission: </strong> This survey does not transmit answers over the network. You can evaluate usability, download your response as a local CSV file, or optionally store a local draft on your browser.
          </p>
        </div>

        {/* Survey Form */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Question 1: Ease of Clarity */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">
                  1. How would you rate the clarity of the legal & safety awareness information?
                </label>
                <div className="flex items-center gap-2 pt-1" role="radiogroup" aria-label="Portal clarity rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setClarityScore(star)}
                      className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                      aria-label={`${star} star rating`}
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          star <= clarityScore
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300 hover:text-amber-200'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-slate-500 ml-2">
                    {clarityScore > 0 ? `${clarityScore} of 5 stars` : 'Select a rating'}
                  </span>
                </div>
              </div>

              {/* Question 2: Navigation ease */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">
                  2. How easy was it to navigate between topics and emergency links?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium">
                  {['Very Easy', 'Neutral', 'Difficult to Find'].map((opt) => (
                    <label
                      key={opt}
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition ${
                        navigationEase === opt
                          ? 'border-primary-600 bg-primary-50 text-primary-900 font-semibold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="navigationEase"
                        value={opt}
                        checked={navigationEase === opt}
                        onChange={(e) => setNavigationEase(e.target.value)}
                        className="text-primary-800 focus:ring-primary-500"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 3: Found topic */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">
                  3. Were the 10 MVP awareness topics relevant and easy to understand?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium">
                  {['Yes, completely', 'Partially', 'No, need more details'].map((opt) => (
                    <label
                      key={opt}
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition ${
                        foundTopic === opt
                          ? 'border-primary-600 bg-primary-50 text-primary-900 font-semibold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="foundTopic"
                        value={opt}
                        checked={foundTopic === opt}
                        onChange={(e) => setFoundTopic(e.target.value)}
                        className="text-primary-800 focus:ring-primary-500"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 4: Readability */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">
                  4. How was the font readability and text scaling (A-, A, A+)?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium">
                  {['Clear & comfortable', 'Too small/large', 'Need higher contrast'].map((opt) => (
                    <label
                      key={opt}
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition ${
                        fontReadability === opt
                          ? 'border-primary-600 bg-primary-50 text-primary-900 font-semibold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="fontReadability"
                        value={opt}
                        checked={fontReadability === opt}
                        onChange={(e) => setFontReadability(e.target.value)}
                        className="text-primary-800 focus:ring-primary-500"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 5: Non-sensitive category suggestion (restricted dropdown / short text) */}
              <div className="space-y-2">
                <label htmlFor="general-category" className="block text-sm font-bold text-slate-900">
                  5. Which general topic domain would you like to see expanded in the future?
                </label>
                <select
                  id="general-category"
                  value={generalCategorySuggestion}
                  onChange={(e) => setGeneralCategorySuggestion(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-600"
                >
                  <option value="">-- Select a general domain --</option>
                  <option value="cyber-safety">Cyber Safety & Digital Hygiene</option>
                  <option value="workplace-protections">Workplace Protections & POSH Procedures</option>
                  <option value="domestic-rights">Domestic Violence & Civil Rights</option>
                  <option value="transit-safety">Public Transit & Commute Safety</option>
                  <option value="multilingual-expansions">More State Language Translations</option>
                </select>
              </div>

              {/* Explicit Opt-in for local storage */}
              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={saveLocallyChecked}
                    onChange={(e) => setSaveLocallyChecked(e.target.checked)}
                    className="mt-0.5 rounded text-primary-800 focus:ring-primary-500"
                  />
                  <span>
                    <strong>Save draft on this device:</strong> Only check this box if you explicitly choose to keep your anonymous rating answers saved in your local browser storage.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary-800 hover:bg-primary-900 text-white font-bold text-sm rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-primary-600"
                >
                  Complete Usability Review
                </button>

                <button
                  type="button"
                  onClick={handleDownloadResponse}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Answers as CSV</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-full inline-block">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Review Completed!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for evaluating the portal’s usability. No personal identifying information was collected or transmitted.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadResponse}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-800 hover:bg-primary-900 text-white text-xs font-semibold rounded-xl transition shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Response CSV</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setClarityScore(0);
                    setNavigationEase('');
                    setFoundTopic('');
                    setFontReadability('');
                    setGeneralCategorySuggestion('');
                    setSaveLocallyChecked(false);
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition"
                >
                  Reset Survey
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
