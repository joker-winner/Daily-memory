export const STUDY_BACKGROUND_INTERVAL=30_000;

export function formatStudyClock(now=new Date()){
  return new Intl.DateTimeFormat('zh-CN',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
}

export function studyBackgroundIndex(elapsedMs,count=3,interval=STUDY_BACKGROUND_INTERVAL){
  if(!Number.isFinite(count)||count<1)return 0;
  return Math.floor(Math.max(0,elapsedMs)/interval)%Math.floor(count);
}
