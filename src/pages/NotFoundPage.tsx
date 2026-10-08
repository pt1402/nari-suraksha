import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, ArrowLeft } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle('Page Not Found (404)');

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="inline-flex p-4 bg-amber-100 text-amber-800 rounded-full">
        <ShieldAlert className="w-10 h-10" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        404 - Page Not Found
      </h1>
      <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
        The page or section you were looking for does not exist or may have been relocated.
      </p>
      <div className="flex items-center justify-center gap-4 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-800 hover:bg-primary-900 text-white font-semibold text-sm rounded-xl transition shadow"
        >
          <Home className="w-4 h-4" />
          <span>Go to Homepage</span>
        </Link>
        <Link
          to="/get-help"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-xl transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Emergency Helplines</span>
        </Link>
      </div>
    </div>
  );
};
