import type { Decision } from '../types';
const d=(id:string,title:string,category:string,names:string[], criteria:[string,number][], scores:number[][]):Decision=>({id,title,category,description:`A considered comparison for a ${title.toLowerCase()}.`,createdAt:new Date('2026-10-20').toISOString(),criteria:criteria.map(([name,weight],i)=>({id:`${id}c${i}`,name,weight})),alternatives:names.map((name,i)=>({id:`${id}a${i}`,name,scores:Object.fromEntries(criteria.map((_,j)=>[`${id}c${j}`,scores[i][j]]))}))});
export const samples:Decision[]=[
 d('laptop','Laptop for design studies','Technology',['Acer Swift Go','ASUS Zenbook','Lenovo Yoga'],[['Price',8],['Performance',10],['Battery life',7],['Energy efficiency',6],['Environmental impact',5]],[[8,8,7,8,7],[7,9,8,9,8],[8,8,9,8,8]]),
 d('phone','Smartphone upgrade','Technology',['Pixel 9a','Samsung Galaxy S25','Nothing Phone'],[['Price',8],['Camera',9],['Battery life',8],['Durability',7],['Energy efficiency',6]],[[9,9,8,7,9],[6,9,8,9,7],[8,7,9,7,8]]),
 d('bottle','Sustainable water bottle','Lifestyle',['Klean Kanteen','Hydro Flask','Nalgene Sustain'],[['Price',6],['Durability',9],['Insulation',7],['Environmental impact',10],['Ease of cleaning',5]],[[7,10,8,9,8],[6,9,10,8,7],[10,7,4,9,9]])
];
