export type Criterion = { id: string; name: string; weight: number };
export type Alternative = { id: string; name: string; scores: Record<string, number> };
export type Decision = { id: string; title: string; description: string; category: string; createdAt: string; alternatives: Alternative[]; criteria: Criterion[] };
export type RankedAlternative = Alternative & { weightedScore: number; rank: number };
