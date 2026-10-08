import { useEffect } from 'react';
import { APP_NAME } from '@/lib/constants';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | ${APP_NAME}` : `${APP_NAME} | Women's Safety & Rights Portal`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
