import test from 'node:test';
import assert from 'node:assert/strict';
import {getPoemAt,POETRY_INTERVAL} from './poetry.js';

test('首页古诗词轮播按设定间隔自动切换并循环',()=>{
  assert.equal(getPoemAt(0).title,'春晓');
  assert.equal(getPoemAt(POETRY_INTERVAL-1).title,'春晓');
  assert.notEqual(getPoemAt(POETRY_INTERVAL).title,'春晓');
  assert.equal(getPoemAt(POETRY_INTERVAL*5).title,'春晓');
});

test('轮播诗句均包含篇名、作者和展示诗句',()=>{
  for(let i=0;i<5;i++){
    const poem=getPoemAt(POETRY_INTERVAL*i);
    assert.ok(poem.title&&poem.author&&poem.lines.length>=1);
  }
});
