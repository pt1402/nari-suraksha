import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowLeft,
  Info,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { SearchBar } from '@/components/search/SearchBar';
import { OrganizationCard } from '@/components/help/OrganizationCard';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useLanguage } from '@/hooks/useLanguage';

export const OrganizationsPage: React.FC = () => {
  useDocumentTitle('Verified Organizations & Support Services');
  const { organizationsData, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: { key: string; labelKey: string; defaultLabel: string }[] = [
    { key: 'all', labelKey: 'organizations.filter_all', defaultLabel: 'All Organizations' },
    { key: 'Maternal & Child Health', labelKey: 'organizations.category_maternal_child', defaultLabel: 'Maternal & Child Health' },
    { key: 'Mental Health', labelKey: 'organizations.category_mental_health', defaultLabel: 'Mental Health' },
    { key: 'Economic Empowerment', labelKey: 'organizations.category_economic_empowerment', defaultLabel: 'Economic Empowerment' },
    { key: 'Menstrual Health', labelKey: 'organizations.category_menstrual_health', defaultLabel: 'Menstrual Health' },
    { key: "Women's Rights", labelKey: 'organizations.category_womens_rights', defaultLabel: "Women's Rights" },
    { key: 'Gender Justice', labelKey: 'organizations.category_gender_justice', defaultLabel: 'Gender Justice' },
    { key: "Women's Empowerment", labelKey: 'organizations.category_womens_empowerment', defaultLabel: "Women's Empowerment" },
  ];

  const filteredOrganizations = organizationsData.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(search.toLowerCase()) ||
      org.description.toLowerCase().includes(search.toLowerCase()) ||
      org.location.toLowerCase().includes(search.toLowerCase()) ||
      org.focusArea.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || org.focusArea === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Header */}
      <PageHero
        icon={Building2}
        badge={t('organizations.hero_badge', { defaultValue: 'Community & NGO Directory' })}
        title={t('organizations.page_title', { defaultValue: 'Verified Organizations & Support Services' })}
        subtitle={t('organizations.page_description', {
          defaultValue:
            'Organizations listed here may offer specialized health, mental-health, women’s-rights, gender-justice, or empowerment support. Review each organization’s own website for current services, locations, eligibility, and contact information.',
        })}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/get-help"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-800/80 hover:bg-primary-700 text-white text-xs font-semibold rounded-xl border border-primary-600 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t('organizations.back_to_helplines', { defaultValue: 'Official Helplines Directory' })}</span>
          </Link>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox variant="prominent" />

        {/* Mandatory Non-Emergency & Independent Organization Disclaimer */}
        <section
          aria-label="Independent organizations disclaimer"
          className="bg-amber-50/80 border border-amber-300 p-5 rounded-2xl text-xs sm:text-sm text-amber-950 space-y-2 shadow-sm"
        >
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <Info className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
            <span>{t('organizations.disclaimer_heading', { defaultValue: 'Independent Community Organizations Notice' })}</span>
          </div>
          <p className="leading-relaxed text-amber-900">
            {t('organizations.disclaimer_body', {
              defaultValue:
                'These are independent organizations, not emergency services or a substitute for police, legal, medical, or counselling support. NARI-SURAKSHA does not administer their programs or guarantee service availability.',
            })}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <span className="font-semibold text-amber-800">
              {t('organizations.emergency_reminder', { defaultValue: 'In active physical danger, dial 112 immediately:' })}
            </span>
            <a
              href="tel:112"
              className="inline-flex items-center gap-1 font-bold text-emergency-800 hover:text-emergency-900 underline"
            >
              <PhoneCall className="w-3 h-3" />
              <span>{t('home.call_112_now', { defaultValue: 'Call 112 Now' })}</span>
            </a>
          </div>
        </section>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="w-full sm:max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={t('organizations.search_placeholder', {
                defaultValue: 'Search by organization name, focus, or city...',
              })}
            />
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label={t('organizations.category_filter_group', { defaultValue: 'Organization focus areas' })}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  selectedCategory === cat.key
                    ? 'bg-primary-800 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {t(cat.labelKey, { defaultValue: cat.defaultLabel })}
              </button>
            ))}
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOrganizations.map((org) => (
            <OrganizationCard key={org.id} organization={org} />
          ))}
        </div>

        {/* Empty State */}
        {filteredOrganizations.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <Building2 className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-slate-800 font-bold text-base">
              {t('organizations.no_results_title', { defaultValue: 'No organizations match your query.' })}
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {t('organizations.no_results_hint', {
                defaultValue:
                  'Try clearing the search query or selecting "All Organizations" to browse the full directory.',
              })}
            </p>
          </div>
        )}

        {/* Bottom Navigation to Help Directory */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              {t('organizations.need_official_helpline', { defaultValue: 'Looking for verified government helplines?' })}
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              {t('organizations.official_helpline_desc', {
                defaultValue:
                  'Access official 24/7 national helplines including Women Helpline 181, NCW 14490, NALSA 15100, and ERSS 112.',
              })}
            </p>
          </div>
          <Link
            to="/get-help"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary-800 text-white font-bold text-xs rounded-xl hover:bg-primary-900 transition shrink-0"
          >
            <span>{t('organizations.view_official_helplines', { defaultValue: 'View Official Helplines' })}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>
    </div>
  );
};
