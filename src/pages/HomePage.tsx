import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  BookOpen,
  Laptop,
  Briefcase,
  Scale,
  PhoneCall,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { FeatureCard } from '@/components/common/FeatureCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { topicsData } from '@/content/en/topics';
import { emergencyContacts } from '@/content/en/resources';

export const HomePage: React.FC = () => {
  useDocumentTitle('Home');

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <PageHero
        badge="National Awareness & Safety Initiative"
        title="Knowledge, Rights & Safety for Every Woman in India"
        subtitle="Empowering women with clear, actionable awareness on constitutional rights, legal protections, cyber hygiene, and verified emergency helplines."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/what-to-do"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <span>What Should I Do?</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/get-help"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-800/90 hover:bg-primary-700 text-white font-medium text-sm border border-primary-600 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            <span>Verified Helplines</span>
          </Link>
        </div>
      </PageHero>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Global Mandatory Disclaimer Notice */}
        <DisclaimerBox variant="prominent" />

        {/* Quick Emergency Helplines Strip */}
        <section aria-label="Quick helpline summary" className="bg-gradient-to-r from-slate-900 to-primary-950 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-primary-900">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span>Emergency Quick Reference</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold">In Crisis or Danger?</h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Call the national 24/7 emergency response support number immediately for police, medical, and rescue assistance.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {emergencyContacts.map((contact) => (
                <a
                  key={contact.number}
                  href={`tel:${contact.number}`}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 flex flex-col items-center text-center transition group focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <span className="text-xs text-slate-300 mb-1 line-clamp-1">{contact.label}</span>
                  <span className="text-lg font-black text-amber-300 group-hover:text-white transition-colors">
                    {contact.number}
                  </span>
                  <span className="text-[10px] text-teal-300 mt-1">{contact.available}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Core Exploration Modules */}
        <section aria-label="Portal core sections">
          <SectionHeading
            badge="Portal Domains"
            title="Explore Safety & Legal Awareness"
            subtitle="Access plain-language explanations of your constitutional protections, workplace safety mechanisms, and step-by-step guides."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={BookOpen}
              title="Know Your Rights"
              description="Learn about fundamental rights, Zero FIR procedures, rights against unlawful night arrests, and free legal aid entitlements."
              to="/rights"
              badge="Key Rights"
              badgeColor="indigo"
            />
            <FeatureCard
              icon={CheckCircle}
              title="What Should I Do?"
              description="Guided, calm next-steps when encountering harassment, cyber bullying, domestic distress, or workplace discrimination."
              to="/what-to-do"
              badge="Action Flows"
              badgeColor="teal"
            />
            <FeatureCard
              icon={Laptop}
              title="Cyber Safety"
              description="Protections against cyber stalking, morphed images, doxxing, online blackmail, and how to safely preserve digital evidence."
              to="/cyber-safety"
              badge="Digital Safety"
              badgeColor="amber"
            />
            <FeatureCard
              icon={Briefcase}
              title="Workplace Safety (POSH)"
              description="Understand POSH Act, Internal Complaints Committees (IC), timelines, filing procedures, and retaliation protections."
              to="/workplace"
              badge="POSH Law"
              badgeColor="teal"
            />
            <FeatureCard
              icon={Scale}
              title="Know the Law"
              description="Detailed breakdowns of Indian legislation protecting women: POSH Act 2013, DV Act 2005, IT Act 2000, and criminal laws."
              to="/laws"
              badge="Statutes"
              badgeColor="indigo"
            />
            <FeatureCard
              icon={PhoneCall}
              title="Get Help & Helplines"
              description="Verified helpline contacts, One Stop Centers (Sakhi), Legal Services Authorities (NALSA/DLSA), and NCW support."
              to="/get-help"
              badge="Helplines"
              badgeColor="emergency"
            />
          </div>
        </section>

        {/* Featured Rights Highlight */}
        <section className="bg-primary-50/70 border border-primary-100 rounded-2xl p-6 sm:p-10">
          <div className="max-w-3xl">
            <SectionHeading
              badge="Legal Clarity"
              title="Did You Know? Critical Procedural Rights"
              subtitle="Indian law contains strict safeguards designed specifically to protect women's dignity during police interactions and investigations."
            />

            <div className="space-y-4">
              {topicsData.slice(0, 3).map((topic) => (
                <div key={topic.id} className="bg-white p-5 rounded-xl border border-primary-200/60 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{topic.title}</h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{topic.summary}</p>
                    </div>
                    <Link
                      to={`/rights/${topic.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary-700 hover:text-primary-900 shrink-0 mt-1"
                    >
                      <span>Read Law</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-primary-200/60 flex items-center justify-between">
              <span className="text-xs text-slate-600">Explore all topics including arrest protocols and free legal aid.</span>
              <Link
                to="/rights"
                className="text-xs font-bold text-primary-800 hover:underline flex items-center gap-1"
              >
                <span>View all rights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Community & Safety Ethics Banner */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-teal-600" />
              <h2 className="text-lg font-bold text-slate-900">Safety & Privacy Principles</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              NARI-SURAKSHA does not require any account creation, login, or personal incident details. This platform is strictly designed to inform, educate, and empower.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/privacy"
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
            >
              Privacy Notice
            </Link>
            <Link
              to="/disclaimer"
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
            >
              Legal Disclaimer
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
