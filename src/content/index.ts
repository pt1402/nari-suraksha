import { Language } from '@/types/content';
import { TopicItem, LawItem, FAQItem } from '@/types/content';
import { HelpResource, EmergencyContact } from '@/types/resources';
import { OrganizationResource } from '@/types/organizations';
import { QuizTopic } from '@/types/quiz';
import { WorkflowGuide, SafeNextStepsFlowData } from '@/types/workflow';

import { topicsData as enTopics } from './en/topics';
import { topicsData as hiTopics } from './hi/topics';
import { topicsData as mrTopics } from './mr/topics';

import { lawsData as enLaws } from './en/laws';
import { lawsData as hiLaws } from './hi/laws';
import { lawsData as mrLaws } from './mr/laws';

import { helpResourcesData as enResources, emergencyContacts as enEmergency } from './en/resources';
import { helpResourcesData as hiResources, emergencyContacts as hiEmergency } from './hi/resources';
import { helpResourcesData as mrResources, emergencyContacts as mrEmergency } from './mr/resources';

import { organizationsData as enOrganizations } from './en/organizations';
import { organizationsData as hiOrganizations } from './hi/organizations';
import { organizationsData as mrOrganizations } from './mr/organizations';

import { faqsData as enFaqs } from './en/faqs';
import { faqsData as hiFaqs } from './hi/faqs';
import { faqsData as mrFaqs } from './mr/faqs';

import { quizzesData as enQuizzes } from './en/quizzes';
import { quizzesData as hiQuizzes } from './hi/quizzes';
import { quizzesData as mrQuizzes } from './mr/quizzes';

import {
  workflowsData as enWorkflows,
  CONCERNS_LIST as enConcerns,
  SAFE_NEXT_STEPS_FLOWS as enFlows,
  ConcernOption,
} from './en/workflows';
import {
  workflowsData as hiWorkflows,
  CONCERNS_LIST as hiConcerns,
  SAFE_NEXT_STEPS_FLOWS as hiFlows,
} from './hi/workflows';
import {
  workflowsData as mrWorkflows,
  CONCERNS_LIST as mrConcerns,
  SAFE_NEXT_STEPS_FLOWS as mrFlows,
} from './mr/workflows';

export function getTopicsData(lang: Language): TopicItem[] {
  if (lang === 'hi') return hiTopics;
  if (lang === 'mr') return mrTopics;
  return enTopics;
}

export function getLawsData(lang: Language): LawItem[] {
  if (lang === 'hi') return hiLaws;
  if (lang === 'mr') return mrLaws;
  return enLaws;
}

export function getHelpResourcesData(lang: Language): HelpResource[] {
  if (lang === 'hi') return hiResources;
  if (lang === 'mr') return mrResources;
  return enResources;
}

export function getOrganizationsData(lang: Language): OrganizationResource[] {
  if (lang === 'hi') return hiOrganizations;
  if (lang === 'mr') return mrOrganizations;
  return enOrganizations;
}

export function getEmergencyContacts(lang: Language): EmergencyContact[] {
  if (lang === 'hi') return hiEmergency;
  if (lang === 'mr') return mrEmergency;
  return enEmergency;
}

export function getFaqsData(lang: Language): FAQItem[] {
  if (lang === 'hi') return hiFaqs;
  if (lang === 'mr') return mrFaqs;
  return enFaqs;
}

export function getQuizzesData(lang: Language): QuizTopic[] {
  if (lang === 'hi') return hiQuizzes;
  if (lang === 'mr') return mrQuizzes;
  return enQuizzes;
}

export function getWorkflowsData(lang: Language): WorkflowGuide[] {
  if (lang === 'hi') return hiWorkflows;
  if (lang === 'mr') return mrWorkflows;
  return enWorkflows;
}

export function getConcernsList(lang: Language): ConcernOption[] {
  if (lang === 'hi') return hiConcerns;
  if (lang === 'mr') return mrConcerns;
  return enConcerns;
}

export function getSafeNextStepsFlows(lang: Language): Record<string, SafeNextStepsFlowData> {
  if (lang === 'hi') return hiFlows;
  if (lang === 'mr') return mrFlows;
  return enFlows;
}
