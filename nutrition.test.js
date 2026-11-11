import test from 'node:test';import assert from 'node:assert/strict';import {FOOD_CATALOG,foodByName,foodCalories,dailyFoodCalories} from './nutrition.js';
test('问题4：常见食物按重量计算估算热量',()=>{assert.ok(FOOD_CATALOG.length>=10);assert.equal(foodByName('米饭').kcalPer100g,116);assert.equal(foodCalories({food:'米饭',weightGrams:150}),174);assert.equal(foodCalories({food:'鸡蛋',weightGrams:50}),72)});
test('问题4：自定义食物按输入的每百克热量计算',()=>assert.equal(foodCalories({food:'手作点心',weightGrams:80,kcalPer100g:300}),240));
test('问题4：每日实际摄入汇总仅计实际记录',()=>{const r=[{date:'2026-05-01',kind:'实际',calories:174},{date:'2026-05-01',kind:'计划',calories:300},{date:'2026-05-02',kind:'实际',calories:100}];assert.equal(dailyFoodCalories(r,'2026-05-01'),174)});
test('问题4：无效食物或重量拒绝计算',()=>{assert.throws(()=>foodCalories({food:'米饭',weightGrams:0}));assert.throws(()=>foodCalories({food:'自定义',weightGrams:100}))});
test('饮食食物目录已扩充常见主食、肉类、蔬菜、水果和其他食材',()=>{assert.ok(FOOD_CATALOG.length>=60);assert.equal(new Set(FOOD_CATALOG.map(x=>x.name)).size,FOOD_CATALOG.length);for(const name of ['糙米饭','猪里脊','虾仁','菠菜','草莓','无糖豆浆','杏仁','橄榄油'])assert.ok(foodByName(name),`目录缺少${name}`);assert.ok(FOOD_CATALOG.every(x=>Number.isFinite(x.kcalPer100g)&&x.kcalPer100g>0))});

test('选择鸡胸肉并输入200克时即时估算330千卡',()=>assert.equal(foodCalories({food:'鸡胸肉',weightGrams:200}),330));
