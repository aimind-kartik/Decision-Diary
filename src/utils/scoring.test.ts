import { describe, expect, it } from 'vitest';
import { rankAlternatives, weightedScore } from './scoring';
const criteria = [{id:'p',name:'Price',weight:2},{id:'q',name:'Quality',weight:8}];
const a = {id:'a',name:'A',scores:{p:10,q:5}};
describe('weighted scoring', () => {
 it('calculates weighted score',()=>expect(weightedScore(a,criteria)).toBe(6));
 it('uses criterion weights',()=>expect(weightedScore({ ...a,scores:{p:1,q:10}},criteria)).toBe(8.2));
 it('handles equal scores',()=>expect(weightedScore({ ...a,scores:{p:7,q:7}},criteria)).toBe(7));
 it('ignores invalid values',()=>expect(weightedScore({ ...a,scores:{p:20,q:6}},criteria)).toBe(6));
 it('handles empty criteria',()=>expect(weightedScore(a,[])).toBe(0));
 it('ranks descending',()=>expect(rankAlternatives([a,{id:'b',name:'B',scores:{p:5,q:10}}],criteria).map(x=>x.name)).toEqual(['B','A']));
});
