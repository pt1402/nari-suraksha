import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  PhoneCall,
  ExternalLink,
  Shield,
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Building,
  HelpCircle,
  AlertCircle,
  Info,
} from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useLanguage } from '@/hooks/useLanguage';

export const FreeLegalAidPage: React.FC = () => {
  useDocumentTitle('Free Legal Aid for Women — Legal Services Authorities Act');
  const { t } = useLanguage();

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <PageHero
        icon={Scale}
        badge={t('legalAid.hero_badge', { defaultValue: 'Constitutional & Statutory Rights' })}
        title={t('legalAid.hero_title', { defaultValue: 'Free Legal Aid for Women: Statutory Guide' })}
        subtitle={t('legalAid.hero_subtitle', {
          defaultValue:
            'Educational overview of statutory legal aid entitlements under Section 12(c) of the Legal Services Authorities Act, 1987, constitutional directives under Article 39A, and official NALSA guidance.',
        })}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/rights"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-800/80 hover:bg-primary-700 text-white text-xs font-semibold rounded-xl border border-primary-600 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t('legalAid.back_to_rights', { defaultValue: 'All Rights Topics' })}</span>
          </Link>

          <a
            href="tel:15100"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-primary-900 font-bold text-xs rounded-xl shadow-sm hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Call NALSA Legal Aid Helpline 15100"
          >
            <PhoneCall className="w-3.5 h-3.5 text-indigo-700" />
            <span>{t('legalAid.call_15100_btn', { defaultValue: 'Call NALSA 15100' })}</span>
          </a>
        </div>
      </PageHero>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox variant="prominent" />

        {/* 1. Constitutional and Statutory Context */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Scale className="w-5 h-5 text-indigo-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">
              {t('legalAid.sec1_title', { defaultValue: '1. Constitutional and Statutory Context' })}
            </h2>
          </div>

          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong className="text-slate-900">Article 39A (Directive Principles):</strong> The Constitution of India directs the State to ensure that the operation of the legal system promotes justice on a basis of equal opportunity, and to provide free legal aid by suitable legislation so that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities. Article 39A serves as a constitutional directive principle, rather than a direct administrative application portal.
            </p>
            <p>
              <strong className="text-slate-900">Section 12(c) (Legal Services Authorities Act, 1987):</strong> To implement this constitutional mandate, Parliament enacted the Legal Services Authorities Act, 1987. Under Section 12(c) of the Act, a woman or a child is explicitly identified as an eligible category entitled to receive legal services.
            </p>

            {/* Official Attribution Callout */}
            <div className="p-4 bg-indigo-50/70 rounded-xl border border-indigo-200 text-xs sm:text-sm text-indigo-950 space-y-1.5 mt-2">
              <span className="font-bold block text-indigo-900">
                {t('legalAid.attributed_nalsa_title', { defaultValue: 'Official NALSA Attribution:' })}
              </span>
              <p>
                “{t('legalAid.attributed_nalsa_text', {
                  defaultValue:
                    'NALSA states that a woman is entitled to free legal aid irrespective of income or financial status.',
                })}”
              </p>
              <p className="text-[11px] text-indigo-800">
                {t('legalAid.statutory_procedure_note', {
                  defaultValue:
                    'Statutory provision: Under Section 12(c) of the Legal Services Authorities Act, 1987, a woman is identified as a category eligible to seek legal services. Applications, services, and current procedures should be confirmed with NALSA or the relevant Legal Services Authority.',
                })}
              </p>
            </div>
          </div>
        </section>

        {/* 2. What Legal Aid May Include */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileText className="w-5 h-5 text-teal-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">
              {t('legalAid.sec2_title', { defaultValue: '2. What Legal Aid May Include' })}
            </h2>
          </div>

          <p className="text-xs text-slate-500 italic">
            {t('legalAid.sec2_disclaimer', {
              defaultValue:
                'Statutory legal services may encompass several forms of institutional assistance. Not every applicant is guaranteed every listed service, as scope depends on case merit and authority evaluation:',
            })}
          </p>

          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Legal advice and consultation:</strong> Initial consultation with a designated legal-aid retainer or clinic advocate regarding rights, options, and remedies.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Panel advocate assistance:</strong> Assignment of an empanelled legal-aid lawyer to represent the eligible person before judicial or quasi-judicial forums, where approved.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Document preparation:</strong> Assistance in drafting applications, petitions, legal notices, or formal representations.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Process fees and court assistance:</strong> Payment of process fees, preparation of paper-books, and associated procedural expenditure where authorized by the legal services regulations.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Mediation & Lok Adalat facilitation:</strong> Support for pre-litigation dispute resolution or pre-institution mediation through Lok Adalats or mediation centres.</span>
            </li>
          </ul>
        </section>

        {/* 3. How to Seek Help */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Building className="w-5 h-5 text-indigo-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">
              {t('legalAid.sec3_title', { defaultValue: '3. How to Seek Help' })}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-indigo-700" />
                <span>NALSA Helpline 15100</span>
              </span>
              <p className="text-slate-600 text-xs leading-relaxed">
                Call the toll-free national legal-aid helpline 15100 for procedural guidance and referral to jurisdictional state and district clinics.
              </p>
              <a
                href="tel:15100"
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 underline"
              >
                <span>Call 15100 Now</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <ExternalLink className="w-4 h-4 text-indigo-700" />
                <span>Official NALSA Portal</span>
              </span>
              <p className="text-slate-600 text-xs leading-relaxed">
                Visit NALSA's official website to track application procedures, online legal-aid forms, and state directories.
              </p>
              <a
                href="https://nalsa.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 underline"
              >
                <span>Visit nalsa.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block">State Legal Services Authority (SLSA)</span>
              <p className="text-slate-600 text-xs leading-relaxed">
                Operates at the High Court level in each State/UT, supervising statewide legal services and policy frameworks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block">District & Taluk Committees (DLSA & TLSC)</span>
              <p className="text-slate-600 text-xs leading-relaxed">
                Located in district court complexes and taluka court buildings. Direct point of contact for in-person application filing.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Steps to Find Legal-Aid Support */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <HelpCircle className="w-5 h-5 text-teal-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">
              {t('legalAid.sec4_title', { defaultValue: '4. Steps to Find Legal-Aid Support' })}
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-primary-800 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-slate-900 block">Helpline Guidance First:</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  Dial 15100 to discuss the general nature of your legal issue and receive contact details for your local District Legal Services Authority (DLSA).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-primary-800 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-slate-900 block">Identify Local Authority (DLSA / TLSC):</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  Locate the DLSA front office in your district court complex or the Taluk Legal Services Committee (TLSC) at the sub-divisional court.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-primary-800 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-slate-900 block">Submit Application Through Official Channels:</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  Submit an application in person at the DLSA front office or via the official NALSA legal services online portal. Do not submit paperwork to unofficial intermediaries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-primary-800 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                4
              </span>
              <div>
                <strong className="text-slate-900 block">Review and Panel Assignment:</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  The Member Secretary or designated legal officer reviews the application. If eligible and legally maintainable, a panel advocate is assigned. Note: Immediate assignment is not guaranteed; authorities follow administrative verification procedures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Documents and Information */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Info className="w-5 h-5 text-indigo-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">
              {t('legalAid.sec5_title', { defaultValue: '5. Documents and Information' })}
            </h2>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
            <strong>Important Guidance on Documentation:</strong>
            <p className="leading-relaxed">
              “An authority may ask for information or documents relevant to the application. Requirements can vary. Confirm current requirements with NALSA, the relevant Legal Services Authority, or the official portal.”
            </p>
            <p className="text-[11px] text-amber-900 font-semibold mt-1">
              • Aadhaar or any specific single identity document is not universally mandatory for seeking initial legal advice.
              <br />
              • NARI-SURAKSHA does not collect, request, or process identity documents. Never upload personal legal records to this website.
            </p>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <p className="font-semibold text-slate-800">Examples of documents an authority may review:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Basic identification and contact details requested by the authority.</li>
              <li>A written statement summarizing the legal dispute or relief sought.</li>
              <li>Copies of relevant existing court notices, petitions, or orders, if applicable.</li>
              <li>FIR copy, complaint copy, or police acknowledgment if relating to criminal proceedings.</li>
              <li>Marriage certificate or relevant domestic records if relating to matrimonial proceedings.</li>
            </ul>
          </div>
        </section>

        {/* 6. Important Limitations */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">
              {t('legalAid.sec6_title', { defaultValue: '6. Important Limitations' })}
            </h2>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>No Application Processing:</strong> This website is an educational public awareness portal and cannot receive, review, or process legal applications.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>No Advocate Assignment:</strong> NARI-SURAKSHA does not appoint or assign legal counsel. Lawyers are assigned exclusively by statutory authorities (NALSA/SLSA/DLSA).</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>No Eligibility Determination:</strong> Factual and legal eligibility for specific representation is determined solely by the jurisdictional legal services committee.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>No Outcome Guarantees:</strong> Legal aid guarantees access to institutional legal representation; it does not promise or guarantee judicial outcomes.</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Always verify current administrative instructions, clinic operating hours, and localized procedures through official statutory authorities.
            </p>
          </div>
        </section>

        {/* 7. Official Sources */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <Shield className="w-5 h-5 text-teal-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">
              {t('legalAid.sec7_title', { defaultValue: '7. Official Sources & Registry Citations' })}
            </h2>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white rounded-xl border border-slate-200">
              <div>
                <strong className="text-slate-900 block">National Legal Services Authority (NALSA) Official Portal</strong>
                <span className="text-slate-500 text-[11px]">Primary statutory source for nationwide legal services and policy guidelines.</span>
              </div>
              <a
                href="https://nalsa.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary-700 hover:text-primary-900 font-bold underline shrink-0"
              >
                <span>nalsa.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white rounded-xl border border-slate-200">
              <div>
                <strong className="text-slate-900 block">Legal Services Authorities Act, 1987 (Act No. 39 of 1987)</strong>
                <span className="text-slate-500 text-[11px]">India Code Legislative Department official statutory gazette text.</span>
              </div>
              <a
                href="https://legislative.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary-700 hover:text-primary-900 font-bold underline shrink-0"
              >
                <span>legislative.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white rounded-xl border border-slate-200">
              <div>
                <strong className="text-slate-900 block">NALSA Toll-Free Helpline: 15100</strong>
                <span className="text-slate-500 text-[11px]">Verified national legal aid telephone contact in NARI-SURAKSHA resource registry (ID: res-nalsa-legal-aid).</span>
              </div>
              <a
                href="tel:15100"
                className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 font-bold underline shrink-0"
              >
                <PhoneCall className="w-3 h-3" />
                <span>15100</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
              <span>{t('common.last_reviewed', { defaultValue: 'Last Reviewed' })}: 2026-10-09</span>
              <span>{t('common.next_review_due', { defaultValue: 'Next Review Due' })}: 2027-04-09</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
