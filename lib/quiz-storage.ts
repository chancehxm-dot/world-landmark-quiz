export type AnswerId = 'a' | 'b' | 'c' | 'd';

export type AnswerMap = Record<string, AnswerId | undefined>;

const STORAGE_KEY = 'world_capital_quiz_answers_v1';

export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function loadAnswers(): AnswerMap {
  if (!isBrowser()) return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return parsed as AnswerMap;
    }
    return {};
  } catch {
    return {};
  }
}

export function saveAnswers(answers: AnswerMap): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    /* ignore quota / private mode errors */
  }
}

export function clearAnswers(): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
