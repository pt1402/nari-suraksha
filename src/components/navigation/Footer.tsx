import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Heart, PhoneCall } from 'lucide-react';
import { APP_NAME, FOOTER_LINKS, EMERGENCY_NUMBER } from '@/lib/constants';
import { DisclaimerBox } from '../common/DisclaimerBox';
import { useLanguage } from '@/hooks/useLanguage';

const FOOTER_KEY_MAP: Record<string, string> = {
  '/about': 'nav.about',
  '/survey': 'nav.survey',
  '/privacy': 'nav.privacy',
  '/disclaimer': 'nav.disclaimer',
  '/sources': 'nav.sources',
  '/accessibility': 'nav.accessibility',
};

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-950 text-primary-200 border-t border-primary-800/80 pt-12 pb-8 mt-16" aria-label="Portal footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Disclaimer in Footer */}
        <div className="mb-10">
          <DisclaimerBox variant="subtle" className="bg-primary-900/60 text-primary-100 border-primary-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About Portal */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg shrink-0"
              aria-label="NARI-SURAKSHA — Women’s Safety, Rights & Awareness Portal"
            >
              <img
                src="/brand/nari-suraksha-header.jpg"
                alt="NARI-SURAKSHA — Women’s Safety, Rights & Awareness Portal"
                width={500}
                height={95}
                className="block object-contain max-w-full w-[260px] sm:w-[320px] md:w-[360px] lg:w-full xl:max-w-[400px] h-auto"
              />
            </Link>
            <p className="text-xs sm:text-sm text-primary-300 leading-relaxed">
              {t('footer.about_desc', {
                defaultValue:
                  'India-focused public awareness portal dedicated to women’s legal rights, cyber safety, workplace protections, and verified official help contacts.',
              })}
            </p>
            <div className="text-xs text-teal-300 bg-primary-900/70 p-2.5 rounded-xl border border-primary-800">
              <span className="font-semibold block mb-0.5">
                {t('footer.privacy_title', { defaultValue: 'Privacy First:' })}
              </span>
              {t('footer.privacy_desc', {
                defaultValue: 'No registration, no tracking of personal incident data, and no login required.',
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-primary-800 pb-1">
              {t('footer.important_pages', { defaultValue: 'Important Pages' })}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white hover:underline transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                  >
                    {t(FOOTER_KEY_MAP[link.path] || link.label, { defaultValue: link.label })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Awareness Topics */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-primary-800 pb-1">
              {t('footer.safety_domains', { defaultValue: 'Safety Domains' })}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/rights" className="hover:text-white transition-colors">
                  {t('nav.rights', { defaultValue: 'Know Your Rights' })}
                </Link>
              </li>
              <li>
                <Link to="/what-to-do" className="hover:text-white transition-colors">
                  {t('nav.what_to_do', { defaultValue: 'What Should I Do?' })}
                </Link>
              </li>
              <li>
                <Link to="/cyber-safety" className="hover:text-white transition-colors">
                  {t('nav.cyber_safety', { defaultValue: 'Cyber Safety' })}
                </Link>
              </li>
              <li>
                <Link to="/workplace" className="hover:text-white transition-colors">
                  {t('nav.workplace', { defaultValue: 'Workplace Safety' })}
                </Link>
              </li>
              <li>
                <Link to="/laws" className="hover:text-white transition-colors">
                  {t('nav.laws', { defaultValue: 'Know the Law' })}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: National Emergency Contacts */}
          <div className="bg-primary-900/50 p-4 rounded-2xl border border-primary-800 space-y-3">
            <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <span>{t('help.page_badge', { defaultValue: 'National Helplines' })}</span>
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center justify-between border-b border-primary-800/60 pb-2">
                <span>{t('footer.national_emergency', { defaultValue: 'Emergency (Police/Fire/Med): 112' })}</span>
                <a
                  href={`tel:${EMERGENCY_NUMBER}`}
                  className="font-bold text-white bg-emergency-800 px-2.5 py-1 rounded-md hover:bg-emergency-700 inline-flex items-center gap-1"
                  aria-label="Call emergency 112"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>{EMERGENCY_NUMBER}</span>
                </a>
              </li>
              <li className="flex flex-col gap-0.5 border-b border-primary-800/60 pb-2">
                <div className="flex items-center justify-between">
                  <span>Women Helpline Reference:</span>
                  <span className="font-semibold text-teal-300">1091</span>
                </div>
                <span className="text-[10px] text-amber-300">
                  {t('common.verify_warning', { defaultValue: 'Verify from official source before public launch' })}
                </span>
              </li>
              <li className="flex flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <span>Cyber Crime Helpline:</span>
                  <span className="font-semibold text-teal-300">1930</span>
                </div>
                <span className="text-[10px] text-amber-300">Official MHA Cyber Reference</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-primary-800 text-[11px] text-primary-300">
              <span>Always prioritize calling 112 in life-threatening emergencies.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-primary-800 text-xs text-primary-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {APP_NAME}. {t('footer.all_rights_reserved', { defaultValue: 'All rights reserved. Public awareness initiative.' })}</p>
          <div className="flex items-center gap-1 text-primary-400">
            <span>Built for Women’s Safety & Empowerment</span>
            <Heart className="w-3.5 h-3.5 text-emergency-500 fill-emergency-500" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  );
};
