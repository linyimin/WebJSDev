"use strick"
//正则表达式 在js中的使用
//一:正则表达式声明
//1:利用RegExp声明
let reg = new RegExp(/123/);
//2:利用字面值创建正则表达式
let rg = /123/;
console.log(rg);
//3：test方法检测字符串是否满足正则表达式
console.log(rg.test(123));
console.log("*******************************************")
//二：正则表达式特殊字符
let rgStartTest=/^abc/  //abc开头的字符串以
console.log(rg.test('abc'));//true
console.log(rg.test('abcd'));//true
console.log(rg.test('aabcd'));//false
console.log("*******************************************")
let rgStartEndTest=/^abc$/  //abc开头的字符串以
console.log(rgStartEndTest.test('abc'));//true
console.log(rgStartEndTest.test('abcd'));//false
console.log(rgStartEndTest.test('abcabc'));//false
console.log("*******************************************")
let rgEndTest=/abc$/  //abc开头的字符串以
console.log(rgEndTest.test('dabc'));//true
console.log("*******************************************")

var regAny = /[abc]/;  //[]只要包含其中一个就可以
console.log(regAny.test("addd"));//true
console.log(regAny.test("dbddd"));//true
console.log(regAny.test("eess"));//false
console.log("*******************************************")
var regAny = /^[abc]$/;  //[]必须a,b,c一个
console.log(regAny.test("a"));//true
console.log(regAny.test("b"));//true
console.log(regAny.test("c"));//true
console.log(regAny.test("addd"));//false
console.log(regAny.test("cb"));//false
console.log("*******************************************")
var regAny1 = /^[a-z]$/;  //[]任何一个26字母
console.log(regAny1.test("a"));//true
console.log(regAny1.test("b"));//true
console.log(regAny1.test("c"));//true
console.log(regAny1.test("A"));//false
console.log(regAny1.test("1"));//false
console.log("*******************************************")

//使用正则表达式进行字符替换
//replace
console.log("使用正则表达式替换字符")
let strData="andy,red,andy,aNdy,test,Test";
let newData =strData.replace('andy','baby');//默认只匹配第一个，且大小写敏感
console.log(newData);
console.log(strData.replace(/andy/g,'baby'));//全局
console.log(strData.replace(/andy|test/gi,'baby'));//gi忽略大小写

