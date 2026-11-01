import type { Alternative, Criterion, RankedAlternative } from '../types';
const valid = (n: number) => Number.isFinite(n) && n >= 1 && n <= 10;
export function weightedScore(alternative: Alternative, criteria: Criterion[]): number {
  const usable = criteria.filter(c => valid(c.weight) && valid(alternative.scores[c.id]));
  const total = usable.reduce((sum, c) => sum + c.weight, 0);
  return total ? usable.reduce((sum, c) => sum + alternative.scores[c.id] * c.weight, 0) / total : 0;
}
export function rankAlternatives(alternatives: Alternative[], criteria: Criterion[]): RankedAlternative[] {
  return alternatives.map(a => ({ ...a, weightedScore: weightedScore(a, criteria), rank: 0 }))
    .sort((a,b) => b.weightedScore - a.weightedScore || a.name.localeCompare(b.name))
    .map((a, i) => ({ ...a, rank: i + 1 }));
}
