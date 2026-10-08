import React, { useState } from 'react';
import { PhoneCall, ShieldAlert, AlertTriangle } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { ResourceCard } from '@/components/help/ResourceCard';
import { SearchBar } from '@/components/search/SearchBar';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { helpResourcesData } from '@/content/en/resources';
import { EMERGENCY_NUMBER } from '@/lib/constants';

export const HelpPage: React.FC = () => {
  useDocumentTitle('Get Help & Helplines');
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredResources = helpResourcesData.filter((res) => {
    const matchesSearch =
      res.name.toLowerCase().includes(search.toLowerCase()) ||
      res.description.toLowerCase().includes(search.toLowerCase()) ||
      res.contactNumber.includes(search);
    const matchesCategory =
      categoryFilter === 'all' || res.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={PhoneCall}
        badge="Official Helplines & Support"
        title="Get Help: Verified Directory & Support Services"
        subtitle="Access national emergency numbers, police helpdesks, cyber crime reporting helplines, One Stop Centres, and free legal aid."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <DisclaimerBox variant="prominent" />

        {/* Emergency First Priority Card */}
        <section aria-label="Emergency response priority" className="bg-emergency-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-emergency-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-300 bg-emergency-950/60 px-2.5 py-1 rounded-full">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>Life Threatening or Immediate Crisis</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Emergency Response Support (112)</h2>
              <p className="text-slate-200 text-xs sm:text-sm max-w-xl">
                Toll-free 24/7 nationwide emergency service for immediate police, fire, or medical dispatch across all states and union territories.
              </p>
            </div>

            <a
              href={`tel:${EMERGENCY_NUMBER}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-emergency-900 hover:bg-emergency-50 text-base font-extrabold rounded-xl shadow-lg transition-transform transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              <PhoneCall className="w-5 h-5 text-emergency-700" />
              <span>Dial 112 Immediately</span>
            </a>
          </div>
        </section>

        {/* Verification Status Warning Notice */}
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Directory Verification Notice:</span>
            All helpline numbers and resources listed below are structured placeholders undergoing official administrative validation. Please confirm local jurisdictional contacts before relying on them for non-emergency matters.
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search helplines by name, category, or number..."
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {['all', 'Police & Emergency', 'National Helpline', 'Cyber Crime', 'Legal Aid', 'Counseling & Support'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  categoryFilter === cat
                    ? 'bg-primary-800 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'All Helplines' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
            <PhoneCall className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold">No helplines match your query.</p>
          </div>
        )}
      </div>
    </div>
  );
};
