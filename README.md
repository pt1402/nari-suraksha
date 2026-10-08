# NARI-SURAKSHA (नारी सुरक्षा)
**India-Focused Women’s Safety, Rights and Awareness Portal**

---

## 📌 Project Overview
**NARI-SURAKSHA** is a public awareness and educational web platform built to provide clear, accessible, and multilingual awareness on women's legal rights, procedural safeguards, cyber safety, workplace protections (POSH Act), and verified emergency helplines across India.

---

## 🛡️ Non-Negotiable Safety & Privacy Architecture

This portal adheres to strict safety boundaries designed to protect visitors:
- ❌ **No User Accounts / Login:** No public registration, login, or authentication system.
- ❌ **No Incident Reporting or Grievance Filing:** This is an informational platform; we do not collect complaints, evidence uploads, or incident reports.
- ❌ **Zero PII Collection:** The platform never requests names, phone numbers, email addresses, live GPS locations, photos, banking details, or passwords.
- ❌ **Not an AI Lawyer or Medical Substitute:** Clearly disclaimed across all pages.
- ❌ **Respectful, Dignified Tone:** No victim-blaming language or sensationalized fear-based content.
- ⚠️ **Verification Protocol:** All resource contact data is clearly labelled with `"Verify from official source before launch"` until administrative verification is complete.

---

## 🚀 Technology Stack
- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Accessible high-contrast palette, Noto Sans / Devanagari font fallbacks)
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Client-Side Search:** Fuse.js
- **Persistence:** Browser `localStorage` (for language & accessibility scaling only)

---

## 📂 Project Structure

```
nari-suraksha/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── manifest.webmanifest
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── providers.tsx
│   ├── assets/
│   ├── components/
│   │   ├── accessibility/
│   │   ├── common/
│   │   ├── emergency/
│   │   ├── faq/
│   │   ├── guides/
│   │   ├── help/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── quiz/
│   │   ├── search/
│   │   └── ui/
│   ├── content/
│   │   ├── en/
│   │   │   ├── topics.ts
│   │   │   ├── laws.ts
│   │   │   ├── resources.ts
│   │   │   ├── faqs.ts
│   │   │   ├── quizzes.ts
│   │   │   └── workflows.ts
│   │   ├── hi/
│   │   │   └── translations.ts
│   │   ├── mr/
│   │   │   └── translations.ts
│   │   └── sources.ts
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   ├── useLanguage.ts
│   │   ├── useSearch.ts
│   │   └── useDocumentTitle.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── search.ts
│   │   ├── utils.ts
│   │   └── validation.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── RightsPage.tsx
│   │   ├── TopicPage.tsx
│   │   ├── WhatToDoPage.tsx
│   │   ├── CyberSafetyPage.tsx
│   │   ├── WorkplaceSafetyPage.tsx
│   │   ├── LawsPage.tsx
│   │   ├── HelpPage.tsx
│   │   ├── FAQPage.tsx
│   │   ├── QuizPage.tsx
│   │   ├── SurveyPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   ├── DisclaimerPage.tsx
│   │   ├── SourcesPage.tsx
│   │   ├── AccessibilityPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   ├── content.ts
│   │   ├── quiz.ts
│   │   ├── workflow.ts
│   │   └── resources.ts
│   └── main.tsx
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

---

## 🌐 Public Routes

| Route | Page / Purpose |
|---|---|
| `/` | Portal Overview, Emergency Strip, Quick Reference |
| `/rights` | Legal Rights Directory & Search |
| `/rights/:slug` | In-depth Rights Safeguard Guide |
| `/what-to-do` | Step-by-Step Practical Guides |
| `/cyber-safety` | Digital Safety & Evidence Preservation |
| `/workplace` | Workplace Safety & POSH Act 2013 |
| `/laws` | Indian Acts & Statutory Summaries |
| `/get-help` | Verified Helpline Directory (Emergency 112 priority) |
| `/faq` | Frequently Asked Questions & Answers |
| `/quiz` | Interactive Self-Assessment Awareness Quizzes |
| `/survey` | Anonymous Portal Usability Feedback |
| `/about` | Mission, Vision & Guiding Principles |
| `/privacy` | Privacy Architecture & Zero-Data Commitment |
| `/disclaimer` | Legal & Emergency Disclaimer |
| `/sources` | Verified Official Citations & Sources |
| `/accessibility` | WCAG 2.2 AA Conformance Statement |

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The server will start at `http://localhost:3000`.

### 3. Production Build & TypeScript Verification
```bash
npm run build
```
Runs `tsc` validation and creates optimized assets in `/dist`.

---

## ♿ Accessibility (WCAG 2.2 AA)
- **High Contrast:** All text passes 4.5:1 ratio against background.
- **Keyboard Traversal:** Visible focus rings (`focus-visible`) and Skip-to-content links.
- **Scalable Text:** Text can be resized between 90% and 130% via built-in controls.
- **Screen Reader Support:** Semantic HTML5 landmarks (`header`, `main`, `footer`, `nav`, `aside`, `article`) and ARIA roles.
- **Reduced Motion:** Respects user OS preference for reduced animation.

---

## 📄 License & Disclaimer
This project is open-source for educational and public-awareness purposes. All content is for general information only and does not constitute formal legal counsel or police dispatch.
