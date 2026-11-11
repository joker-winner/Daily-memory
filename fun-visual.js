const activityVisuals=[
  {keywords:['电影','观影','影片','影院','电影院'],icon:'🎬',theme:'film'},
  {keywords:['游戏','联机','手游','电脑游戏','星露谷','原神','王者','steam'],icon:'🎮',theme:'game'},
  {keywords:['音乐','听歌','专辑','演唱会','歌曲','乐队','唱歌'],icon:'🎵',theme:'music'},
  {keywords:['阅读','看书','小说','漫画','读书'],icon:'📚',theme:'reading'},
  {keywords:['散步','徒步','爬山','骑行','郊游'],icon:'🚶',theme:'outdoor'},
  {keywords:['咖啡','喝茶','下午茶','甜品'],icon:'☕',theme:'cafe'},
  {keywords:['桌游','棋牌','象棋','围棋','卡牌'],icon:'♟',theme:'board'}
];
export function funActivityVisual(title=''){const normalized=String(title).trim().toLowerCase();return activityVisuals.find(item=>item.keywords.some(keyword=>normalized.includes(keyword)))||{icon:'✨',theme:'default'}}
