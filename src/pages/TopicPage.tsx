import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Scale, ShieldAlert, BookOpen } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { topicsData } from '@/content/en/topics';

export const TopicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = topicsData.find((t) => t.slug === slug);

  useDocumentTitle(topic ? topic.title : 'Topic Details');

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="p-3 bg-amber-100 rounded-full inline-block text-amber-800">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Topic Not Found</h1>
        <p className="text-slate-600 text-sm">
          The awareness topic you requested does not exist or has been moved.
        </p>
        <div>
          <Link
            to="/rights"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-800 text-white text-sm font-semibold rounded-lg hover:bg-primary-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Rights Overview</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-12">
      <PageHero
        icon={BookOpen}
        badge={`Legal Awareness • ${topic.category.toUpperCase()}`}
        title={topic.title}
        subtitle={topic.summary}
      >
        <Link
          to="/rights"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-800/80 hover:bg-primary-700 text-white text-xs font-semibold border border-primary-600 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Rights</span>
        </Link>
      </PageHero>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DisclaimerBox />

        {/* Overview Section */}
        <section className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            Overview & Context
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            {topic.description}
          </p>
        </section>

        {/* Key Rights and Procedural Safeguards */}
        <section className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            Essential Key Safeguards
          </h2>
          <ul className="space-y-3">
            {topic.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Legal Provisions & Reference Laws */}
        {topic.legalProvisions && (
          <section className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary-800" />
              <h2 className="text-lg font-bold text-slate-900">
                Statutory & Legal References
              </h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {topic.legalProvisions.map((law, idx) => (
                <li key={idx} className="p-3 bg-white rounded-lg border border-slate-200 font-medium">
                  {law}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Step-by-Step Action Suggestions */}
        {topic.actionSteps && (
          <section className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Recommended Practical Steps
            </h2>
            <div className="space-y-3">
              {topic.actionSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-primary-50/50 rounded-lg border border-primary-100">
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-4 flex justify-between items-center">
          <Link
            to="/rights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Rights</span>
          </Link>

          <Link
            to="/get-help"
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-700 text-white text-xs font-bold rounded-lg hover:bg-teal-800 transition"
          >
            <span>Find Support Helplines</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
