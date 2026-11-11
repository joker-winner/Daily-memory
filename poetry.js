export const POETRY_INTERVAL=12_000;

export const POEMS=Object.freeze([
  {title:'春晓',author:'孟浩然',lines:['春眠不觉晓，','处处闻啼鸟。']},
  {title:'山居秋暝',author:'王维',lines:['明月松间照，','清泉石上流。']},
  {title:'饮酒·其五',author:'陶渊明',lines:['采菊东篱下，','悠然见南山。']},
  {title:'望庐山瀑布',author:'李白',lines:['飞流直下三千尺，','疑是银河落九天。']},
  {title:'渔歌子',author:'张志和',lines:['青箬笠，绿蓑衣，','斜风细雨不须归。']}
]);

export function getPoemAt(elapsedMs){
  const index=Math.floor(Math.max(0,elapsedMs)/POETRY_INTERVAL)%POEMS.length;
  return POEMS[index];
}
