import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '@/i18n/config';
import { Language } from '@/types/content';
import {
  getTopicsData,
  getLawsData,
  getHelpResourcesData,
  getOrganizationsData,
  getEmergencyContacts,
  getFaqsData,
  getQuizzesData,
  getWorkflowsData,
  getConcernsList,
  getSafeNextStepsFlows,
} from '@/content';
import { TopicItem, LawItem, FAQItem } from '@/types/content';
import { HelpResource, EmergencyContact } from '@/types/resources';
import { OrganizationResource } from '@/types/organizations';
import { QuizTopic } from '@/types/quiz';
import { WorkflowGuide, SafeNextStepsFlowData, ConcernOption } from '@/types/workflow';

export interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: any) => string;
  topicsData: TopicItem[];
  lawsData: LawItem[];
  helpResourcesData: HelpResource[];
  organizationsData: OrganizationResource[];
  emergencyContacts: EmergencyContact[];
  faqsData: FAQItem[];
  quizzesData: QuizTopic[];
  workflowsData: WorkflowGuide[];
  concernsList: ConcernOption[];
  safeNextStepsFlows: Record<string, SafeNextStepsFlowData>;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t, i18n: activeI18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    () => (activeI18n.language as Language) || 'en'
  );

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      if (lng === 'en' || lng === 'hi' || lng === 'mr') {
        setCurrentLanguage(lng);
      }
    };
    activeI18n.on('languageChanged', handleLangChange);
    return () => {
      activeI18n.off('languageChanged', handleLangChange);
    };
  }, [activeI18n]);

  const setLanguage = useCallback(
    (lang: Language) => {
      activeI18n.changeLanguage(lang);
      setCurrentLanguage(lang);
    },
    [activeI18n]
  );

  const value = useMemo(
    () => ({
      currentLanguage,
      setLanguage,
      t,
      topicsData: getTopicsData(currentLanguage),
      lawsData: getLawsData(currentLanguage),
      helpResourcesData: getHelpResourcesData(currentLanguage),
      organizationsData: getOrganizationsData(currentLanguage),
      emergencyContacts: getEmergencyContacts(currentLanguage),
      faqsData: getFaqsData(currentLanguage),
      quizzesData: getQuizzesData(currentLanguage),
      workflowsData: getWorkflowsData(currentLanguage),
      concernsList: getConcernsList(currentLanguage),
      safeNextStepsFlows: getSafeNextStepsFlows(currentLanguage),
    }),
    [currentLanguage, setLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContextProvider>{children}</LanguageContextProvider>
    </I18nextProvider>
  );
};
