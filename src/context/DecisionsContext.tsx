import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Decision } from '../types';
import { samples } from '../data/samples';
type Store={decisions:Decision[]; save:(d:Decision)=>void; remove:(id:string)=>void; clear:()=>void; restore:()=>void};
const Context=createContext<Store | null>(null); const KEY='decision-diary-decisions';
export function DecisionsProvider({children}:{children:ReactNode}){const [decisions,setDecisions]=useState<Decision[]>(()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return []}});useEffect(()=>localStorage.setItem(KEY,JSON.stringify(decisions)),[decisions]);const save=(d:Decision)=>setDecisions(x=>x.some(i=>i.id===d.id)?x.map(i=>i.id===d.id?d:i):[d,...x]);return <Context.Provider value={{decisions,save,remove:id=>setDecisions(x=>x.filter(d=>d.id!==id)),clear:()=>setDecisions([]),restore:()=>setDecisions(samples)}}>{children}</Context.Provider>};
export const useDecisions=()=>{const v=useContext(Context);if(!v)throw Error('Missing provider');return v};
