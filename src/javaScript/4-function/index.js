console.log("函数进阶--高级应用")

let btn=document.querySelector("button");
function car(){
    this.name="car";
    console.log("构造函数this:",this);
    this.fn=function(){
        console.log("对象的方法this:",this);
    }
}


//一：函数地定义和调用
//1：定义函数的三种方法
//1.1  自定义函数（命名函数）
function test(a,b){console.log("test(a,b):",a+b,"普通函数this:",this)}
//1.2 函数表达式（匿名函数）
let run=function(){}
//1.3 new Function(arg1,arg2,'函数体')  最原始
let f=new Function('a','b','console.log(a+b)');
f(1,3);
//1.4 所有的函数都是Fucntion的实例（对象）,js中万物皆对象
console.log(f);
//1.5 函数也是一个对象
console.log(f instanceof Object);


//2：函数的调用
//2.1普通函数
test(2,3);
//2.3 构造函数 --function car(){} --new car()
let varChar= new car();
//2.2 对象的方法--obtest()
varChar.fn();
//2.4 绑定事件函数  --btn.onclick=function(){}--触发事件调用
btn.onclick=function(){console.log("btn绑定事件函数this:",this)}
//2.5 定时器函数 --setInterval(function(){},1000);-- 定时器每隔1s执行一次调用
//setInterval(function(){ console.log("定时器函数this:",this);},10000);
//setInterval(function(){ console.log("定时器函数this:",this);},3000);
//2.6 立即执行函数  --自动调用
(function(){
    console.log("立即执行函数this:",this);
}());

//二：this
//1:this的调用方法
//1.1 普通的函数 --windows
//1.2 对象的方法this --是调用者对象
//1.3 构造函数==原型对象里面this-- 执行new出来的对象
//1.4 绑定事件==this执行函数调用，btn等控件
//1.5 定时器函数 this执行windows
//2 改变函数内部的this指向
//2.1 call  -- 通过call和构造函数，可以实现继承成员
let obj ={name:"call 调整this指向"}
test.call(obj,2,3);//可以实现调用和调整this指向

//2.2 apply 
//a:调用函数和改变this指向，参数必须是数组
//b:参数必须是数组
//c:apply主要应用，配合内置函数，把只能接受不定个数的函数，改变接受数组参数
test.apply(obj,[2,5]);
console.log("求数组最大值:",Math.max.apply(Math,[2,3]));//求最大值

//2.3 bind  只能改变函数内部的指向，不能调用函数，返回一个新的方法
let bindTest =test.bind(obj,6,7);
bindTest(3,4);//新参数已经不起作用

//按钮点击后，禁用三秒种，然后可用
btn.onclick=function(){
    this.disabled=true;
    console.log("绑定事件this:",this);
    setTimeout(function(){
        this.disabled=false;
    }.bind(this),3000);//使用bind，把回调函数的this指向为调用的控件
}

//call apply bind区别
//相同点：都可以改变函数的this指向
//1:call和apply调用后执行函数，bind不执行函数
//2:参数不同，call传递arg1,arg2... aplly使用数组作为参数
//3:bind不会调用函数，可以调整this指向
//应用点：
//1：call实现类的继承
//2: apply使用借助内部函数，实现数组的调用，比如说最大值，最小值，求和等
//3: bind 不调用函数，但向改变this指向，比如改变定时器函数this,另外不调整this指向,bind参数实现通用化。

//三：严格模式
"use strict"
//1：变量声明之前不可以使用
//2：变量名称不能重名
//3：严谨删除已声明的对象
//4：this调整，全局作用域中，函数this是undefined
//5: 以前构造函数，是可以直接调用的，其this是window,严格模式下没有this，只能通过new调用构造函数
//6：定时器的函数内部this还是window
//7: 函数的形参不能重名
//8：函数的声明必须放到顶层，禁止在非函数内声明函数。

//四：高阶函数
//一个函数接受一个函数参数，或者返回值是一个函数，就是高阶好事
function gjTest(callback,a,b){
    callback(a,b);
}
gjTest(test,43,4);

//五：闭包
//闭包：有权访问另外一个函数作用域的中变量的函数。
//1:函数内部的函数，内部函数可以访问外部函数的局部变量
//2:把内部函数返回，形成了高阶函数
//3：闭包作用延长了局部变量的作用范围。
function closureFunc(a){
    let num=a;
    function funTest(){
        console.log("num:",num);
    }
    funTest();
    return funTest;
}
let closureTempFun =closureFunc(45);
closureTempFun();


//click获取li的索引号
function clickTest()
{
    let lis =document.querySelector(".nav").querySelectorAll("li");
    //常规的方式实现
    // for(let i=0;i<lis.length;i++){
    //     lis[i].index=i;
    //     lis[i].onclick=function(){
    //         console.log(this.index);
    //     }
    // }

    //利用闭包函数
    for(let i=0;i<lis.length;i++){
       (function(i){
            //console.log(i);
            lis[i].onclick=function(){
                console.log(i);
            }
       })(i);
    }
}
clickTest();
let name="windows";
console.log("window.name:",window.name);
let objTest={
    name:"obj name",
    getFuncName:function(){
        return function(){
           return this.name;
        };
    }
}

console.log("FUNC:",objTest.getFuncName()());

//六：递归
function fua(n){
    if(n===1 || n===2){
        return 1;
    }
    return fua(n-1)+fua(n-2);
}
console.log("斐波那契数列函数：",fua(4));

//七：对象拷贝
//1:浅拷贝
function copyTest(){
    //1：浅拷贝
    let obj={
        id:1,
        name:"dog",
        msg:{
            age:10
        }
    }
    let outObj={}
    for(let key in obj){
        outObj[key]=obj[key];
    }
    obj.msg.age=20;
    console.log(outObj.msg.age);
    ////////////////////////////////////
    //浅拷贝语法糖
    let obj1={};
    Object.assign(obj1,obj);
    console.log(obj1);
}
//2:深拷贝
function deepCopy(newItem,srcItem){
    for(let key in srcItem)
    {
        let item=srcItem[key];
        if(item instanceof Array){
            newItem[key]=[];
            deepCopy(newItem[key],item);
        }
        else if(item instanceof Object){
            newItem[key]={};
            deepCopy(newItem[key],item);
        }
        else{
            newItem[key]=item;
        }
    }
}
copyTest();