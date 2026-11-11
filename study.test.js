import test from 'node:test';
import assert from 'node:assert/strict';
import {formatStudyClock,studyBackgroundIndex,STUDY_BACKGROUND_INTERVAL} from './study.js';

test('沉浸学习时钟按本机时间格式显示并更新到秒',()=>{
  const now=new Date(2026,10,10,9,7,5);
  assert.match(formatStudyClock(now),/09:07:05/);
});

test('沉浸学习背景按固定间隔轮换并循环',()=>{
  assert.equal(studyBackgroundIndex(0),0);
  assert.equal(studyBackgroundIndex(STUDY_BACKGROUND_INTERVAL-1),0);
  assert.equal(studyBackgroundIndex(STUDY_BACKGROUND_INTERVAL),1);
  assert.equal(studyBackgroundIndex(STUDY_BACKGROUND_INTERVAL*3),0);
});
