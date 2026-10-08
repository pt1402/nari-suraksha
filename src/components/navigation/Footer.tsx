import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertCircle, Heart } from 'lucide-react';
import { APP_NAME, FOOTER_LINKS, EMERGENCY_NUMBER, WOMEN_HELPLINE_NATIONAL, CYBER_CRIME_HELPLINE } from '@/lib/constants';
import { DisclaimerBox } from '../common/DisclaimerBox';

export const Footer: React.FC = () => {
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
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-teal-600 rounded-lg text-white">
                <Shield className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">{APP_NAME}</span>
            </div>
            <p className="text-xs sm:text-sm text-primary-300 leading-relaxed">
              India-focused public awareness portal dedicated to women’s legal rights, cyber safety, workplace protections, and verified official help contacts.
            </p>
            <div className="text-xs text-teal-300 bg-primary-900/70 p-2.5 rounded border border-primary-800">
              <span className="font-semibold block mb-0.5">Privacy First:</span>
              No registration, no tracking of personal incident data, and no login required.
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary-800 pb-1">
              Important Pages
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white hover:underline transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Awareness Topics */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary-800 pb-1">
              Safety Domains
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/rights" className="hover:text-white transition-colors">
                  Fundamental & Police Rights
                </Link>
              </li>
              <li>
                <Link to="/what-to-do" className="hover:text-white transition-colors">
                  Step-by-Step Action Guides
                </Link>
              </li>
              <li>
                <Link to="/cyber-safety" className="hover:text-white transition-colors">
                  Cyber Safety & Online Abuse
                </Link>
              </li>
              <li>
                <Link to="/workplace" className="hover:text-white transition-colors">
                  Workplace Safety & POSH Act
                </Link>
              </li>
              <li>
                <Link to="/laws" className="hover:text-white transition-colors">
                  Indian Laws & Protections
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: National Emergency Contacts */}
          <div className="bg-primary-900/50 p-4 rounded-xl border border-primary-800">
            <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <span>National Helplines</span>
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center justify-between border-b border-primary-800/60 pb-2">
                <span>All Emergencies (Police/Fire/Ambulance):</span>
                <a href={`tel:${EMERGENCY_NUMBER}`} className="font-bold text-white bg-emergency-800 px-2 py-0.5 rounded hover:bg-emergency-700">
                  {EMERGENCY_NUMBER}
                </a>
              </li>
              <li className="flex items-center justify-between border-b border-primary-800/60 pb-2">
                <span>Women Helpline:</span>
                <a href={`tel:${WOMEN_HELPLINE_NATIONAL}`} className="font-bold text-teal-300 hover:text-white">
                  {WOMEN_HELPLINE_NATIONAL}
                </a>
              </li>
              <li className="flex items-center justify-between">
                <span>Cyber Crime Helpline:</span>
                <a href={`tel:${CYBER_CRIME_HELPLINE}`} className="font-bold text-teal-300 hover:text-white">
                  {CYBER_CRIME_HELPLINE}
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-2 border-t border-primary-800 text-[11px] text-primary-300">
              <span>Always prioritize calling 112 in life-threatening emergencies.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-primary-800 text-xs text-primary-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NARI-SURAKSHA Public Information Project. Community Awareness & Rights Education.</p>
          <div className="flex items-center gap-1 text-primary-400">
            <span>Built for Women’s Safety & Empowerment</span>
            <Heart className="w-3.5 h-3.5 text-emergency-500 fill-emergency-500" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  );
};
