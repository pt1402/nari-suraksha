/**
 * Basic client-side validation utilities for static checks.
 * Note: NARI-SURAKSHA does not collect personal identifiers or sensitive inputs.
 */

export function isValidSurveyRating(rating: number): boolean {
  return Number.isInteger(rating) && rating >= 1 && rating <= 5;
}

export function sanitizePlainText(input: string): string {
  return input.replace(/[<>]/g, '').trim();
}
