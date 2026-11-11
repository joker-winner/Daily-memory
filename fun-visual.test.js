import test from 'node:test';import assert from 'node:assert/strict';import {funActivityVisual} from './fun-visual.js';
test('娱乐卡片图标根据活动名称匹配影视、游戏、音乐和休闲内容',()=>{assert.equal(funActivityVisual('看电影').icon,'🎬');assert.equal(funActivityVisual('星露谷物语').icon,'🎮');assert.equal(funActivityVisual('听一张喜欢的专辑').icon,'🎵');assert.equal(funActivityVisual('周末散步').icon,'🚶');assert.equal(funActivityVisual('没有匹配关键词的活动').icon,'✨')});
test('活动名称匹配不区分英文大小写并去除首尾空格',()=>{assert.equal(funActivityVisual('  Play Steam Games  ').theme,'game')});
