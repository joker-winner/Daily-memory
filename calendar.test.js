import test from 'node:test';import assert from 'node:assert/strict';import {monthCells,shiftMonth} from './calendar.js';
test('月历固定显示六周，星期一开头并标记相邻月份日期',()=>{const cells=monthCells(2026,10);assert.equal(cells.length,42);assert.equal(new Date(`${cells[0].date}T12:00:00`).getDay(),1);assert.ok(cells.some(x=>!x.inMonth));assert.equal(cells.find(x=>x.date==='2026-11-09').inMonth,true)});
test('月历前后切换正确跨年',()=>{assert.deepEqual(shiftMonth(2026,0,-1),{year:2025,month:11});assert.deepEqual(shiftMonth(2026,11,1),{year:2027,month:0})});
