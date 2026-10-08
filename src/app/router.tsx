import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { HomePage } from '@/pages/HomePage';
import { RightsPage } from '@/pages/RightsPage';
import { TopicPage } from '@/pages/TopicPage';
import { WhatToDoPage } from '@/pages/WhatToDoPage';
import { CyberSafetyPage } from '@/pages/CyberSafetyPage';
import { WorkplaceSafetyPage } from '@/pages/WorkplaceSafetyPage';
import { LawsPage } from '@/pages/LawsPage';
import { HelpPage } from '@/pages/HelpPage';
import { FAQPage } from '@/pages/FAQPage';
import { QuizPage } from '@/pages/QuizPage';
import { SurveyPage } from '@/pages/SurveyPage';
import { AboutPage } from '@/pages/AboutPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { DisclaimerPage } from '@/pages/DisclaimerPage';
import { SourcesPage } from '@/pages/SourcesPage';
import { AccessibilityPage } from '@/pages/AccessibilityPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'rights',
        element: <RightsPage />,
      },
      {
        path: 'rights/:slug',
        element: <TopicPage />,
      },
      {
        path: 'what-to-do',
        element: <WhatToDoPage />,
      },
      {
        path: 'cyber-safety',
        element: <CyberSafetyPage />,
      },
      {
        path: 'workplace',
        element: <WorkplaceSafetyPage />,
      },
      {
        path: 'laws',
        element: <LawsPage />,
      },
      {
        path: 'get-help',
        element: <HelpPage />,
      },
      {
        path: 'faq',
        element: <FAQPage />,
      },
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      {
        path: 'survey',
        element: <SurveyPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'disclaimer',
        element: <DisclaimerPage />,
      },
      {
        path: 'sources',
        element: <SourcesPage />,
      },
      {
        path: 'accessibility',
        element: <AccessibilityPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
