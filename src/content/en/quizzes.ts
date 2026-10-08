import { QuizTopic } from '@/types/quiz';

export const quizzesData: QuizTopic[] = [
  {
    id: 'quiz-legal-rights',
    title: 'Basic Legal Rights Awareness',
    description: 'Test your understanding of foundational rights regarding police interactions, FIRs, and legal aid.',
    questions: [
      {
        id: 'q1',
        category: 'rights',
        question: 'Can a police officer refuse to file an FIR if the incident occurred outside their police station limits?',
        options: [
          'Yes, you must go to the exact area station.',
          'No, they must file a Zero FIR and transfer the case.',
          'Only if the victim brings a lawyer.',
          'Only during daytime.',
        ],
        correctAnswerIndex: 1,
        explanation: 'A Zero FIR can be registered at any police station regardless of jurisdiction, to prevent delays.',
      },
      {
        id: 'q2',
        category: 'rights',
        question: 'Who is entitled to free legal aid in India under the Legal Services Authorities Act?',
        options: [
          'Only citizens living below the poverty line.',
          'All women, irrespective of their income or financial status.',
          'Only government employees.',
          'Only individuals with a recommendation letter.',
        ],
        correctAnswerIndex: 1,
        explanation: 'Under Section 12 of the Legal Services Authorities Act, 1987, all women are entitled to free legal aid.',
      },
    ],
  },
  {
    id: 'quiz-cyber-safety',
    title: 'Cyber Safety & Online Privacy',
    description: 'Check your knowledge about reporting online harassment and protecting digital privacy.',
    questions: [
      {
        id: 'q1',
        category: 'cyber',
        question: 'What is the national helpline number for reporting cyber fraud and cyber crimes in India?',
        options: ['100', '1930', '1098', '139'],
        correctAnswerIndex: 1,
        explanation: '1930 is the dedicated national cyber crime reporting helpline across India.',
      },
      {
        id: 'q2',
        category: 'cyber',
        question: 'What is the first step you should take if you receive harassing or blackmail messages online?',
        options: [
          'Delete your social media account immediately without taking copies.',
          'Preserve screenshots and evidence with visible dates, URLs, and numbers before blocking/reporting.',
          'Pay any money demanded to make them stop.',
          'Ignore it completely and hope it goes away.',
        ],
        correctAnswerIndex: 1,
        explanation: 'Preserving unedited screenshots with timestamps and identifiers is essential for subsequent investigation.',
      },
    ],
  },
];
