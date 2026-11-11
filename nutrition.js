export const FOOD_CATALOG = [
  {name:'米饭',kcalPer100g:116},{name:'燕麦',kcalPer100g:389},{name:'鸡蛋',kcalPer100g:143},
  {name:'鸡胸肉',kcalPer100g:165},{name:'牛肉',kcalPer100g:250},{name:'三文鱼',kcalPer100g:208},
  {name:'豆腐',kcalPer100g:84},{name:'西兰花',kcalPer100g:34},{name:'苹果',kcalPer100g:52},
  {name:'香蕉',kcalPer100g:89},{name:'红薯',kcalPer100g:86},{name:'面条（熟）',kcalPer100g:138},
  {name:'全麦面包',kcalPer100g:247},{name:'牛奶',kcalPer100g:61},{name:'酸奶',kcalPer100g:63},
  {name:'糙米饭',kcalPer100g:111},{name:'小米粥',kcalPer100g:46},{name:'馒头',kcalPer100g:223},{name:'玉米',kcalPer100g:112},{name:'土豆',kcalPer100g:77},{name:'紫薯',kcalPer100g:86},
{name:'南瓜',kcalPer100g:26},{name:'荞麦面（熟）',kcalPer100g:99},{name:'意大利面（熟）',kcalPer100g:158},{name:'杂粮饭',kcalPer100g:120},
  {name:'猪里脊',kcalPer100g:143},{name:'猪瘦肉',kcalPer100g:143},{name:'鸡腿肉',kcalPer100g:181},{name:'鸭肉',kcalPer100g:240},{name:'虾仁',kcalPer100g:85},
{name:'鳕鱼',kcalPer100g:82},{name:'金枪鱼',kcalPer100g:132},{name:'猪排',kcalPer100g:231},{name:'鸡翅',kcalPer100g:194},
  {name:'黄瓜',kcalPer100g:15},{name:'番茄',kcalPer100g:18},{name:'菠菜',kcalPer100g:23},{name:'生菜',kcalPer100g:15},{name:'小白菜',kcalPer100g:13},
  {name:'胡萝卜',kcalPer100g:41},{name:'彩椒',kcalPer100g:31},{name:'蘑菇',kcalPer100g:22},{name:'香菇',kcalPer100g:34},{name:'芹菜',kcalPer100g:16},
  {name:'菜花',kcalPer100g:25},{name:'卷心菜',kcalPer100g:25},{name:'洋葱',kcalPer100g:40},{name:'茄子',kcalPer100g:25},{name:'生菜沙拉',kcalPer100g:20},
  {name:'橙子',kcalPer100g:47},{name:'梨',kcalPer100g:57},{name:'葡萄',kcalPer100g:69},{name:'草莓',kcalPer100g:32},{name:'蓝莓',kcalPer100g:57},
  {name:'西瓜',kcalPer100g:30},{name:'猕猴桃',kcalPer100g:61},{name:'牛油果',kcalPer100g:160},{name:'桃子',kcalPer100g:39},{name:'芒果',kcalPer100g:60},
  {name:'无糖豆浆',kcalPer100g:31},{name:'豆干',kcalPer100g:140},{name:'嫩豆腐',kcalPer100g:61},{name:'毛豆',kcalPer100g:121},{name:'花生',kcalPer100g:567},
  {name:'杏仁',kcalPer100g:579},{name:'核桃',kcalPer100g:654},{name:'芝麻',kcalPer100g:573},{name:'奶酪',kcalPer100g:402},{name:'黄油',kcalPer100g:717},
  {name:'橄榄油',kcalPer100g:884},{name:'花生油',kcalPer100g:884},{name:'蜂蜜',kcalPer100g:304},{name:'黑巧克力',kcalPer100g:546}
];
export function foodByName(name){return FOOD_CATALOG.find(x=>x.name===String(name||'').trim())||null}
export function foodCalories({food,weightGrams,kcalPer100g}){const grams=Number(weightGrams),catalog=foodByName(food),per100=catalog?.kcalPer100g??Number(kcalPer100g);if(!String(food||'').trim()||!Number.isFinite(grams)||grams<=0||!Number.isFinite(per100)||per100<=0)throw new Error('请填写食物、正数重量；自定义食物还需填写每100克热量');return Math.round(grams*per100/100)}
export function dailyFoodCalories(records,date){return records.filter(x=>x.date===date&&x.kind==='实际').reduce((sum,x)=>sum+(Number(x.calories)||0),0)}
