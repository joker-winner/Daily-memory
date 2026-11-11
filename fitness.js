import {SOURCE_EXERCISES} from './exercise-catalog.js';
const KNOWN_KCAL={'标准俯卧撑':0.32,'引体向上':0.42,'深蹲':0.35,'哑铃推肩':0.3,'哑铃侧平举':0.22,'哑铃弯举':0.2,'卷腹':0.18};
export const EXERCISES = SOURCE_EXERCISES.map(x=>({...x,kcalPerRep:KNOWN_KCAL[x.name]??(x.part==='有氧运动'?({'跑步':10,'爬坡':9,'爬楼梯':9,'游泳':8,'骑车':7,'散步':4.5}[x.name]):x.part==='核心'?0.22:x.part==='手臂'?0.2:x.part==='腿部'?0.38:0.3),unit:x.part==='有氧运动'?'分钟':'次'}));
export function exerciseByName(name,part){return EXERCISES.find(x=>x.name===name&&(!part||x.part===part))||null}
export function exerciseMatchesPart(part,action){return exerciseByName(action,part)!==null}
export function exerciseCalories(record){const {action,reps,weightKg=60,part}=record;const exercise=exerciseByName(action,part);const n=record.repsPerSet!==undefined?Number(record.repsPerSet)*Number(record.sets||1):Number(reps),w=Number(weightKg);if(!exercise||!Number.isFinite(n)||n<0||!Number.isFinite(w)||w<=0)throw new Error('请检查动作、次数和体重');return Math.round(n*exercise.kcalPerRep*w/60*10)/10}
export function dailyExerciseCalories(records,date){return Math.round(records.filter(x=>x.date===date).reduce((sum,x)=>sum+exerciseCalories(x),0)*10)/10}

export function selectedWorkoutParts(saved,allParts){return Array.isArray(saved)?saved.filter(part=>allParts.includes(part)):[]}
