"use strict"
console.log("构造函数和原型测试开始");

/*
1：构造函数和原型
1.1 构造函数
    es6之前,对象不是基于类创建的，通过构造函数创建对象,是特殊的构造函数，通过new调用，把公共的属性和方法封装起来
1.2 构造函数的实例成员和静态成员
    1：构造函数实例成员通过this访问
    2：在构造函数静态成员，在构造函数身上添加的方法和成员变量，通过构造函数访问
1.3：构造函数的原型对象prototype
    描述：构造函数构造的对象有浪费内存的问题，每一个对象函数都有自己的内存存放
    解决：使用构造函数原型prototype解决，把共享函数添加到构造函数的原型对象上，通过原型对象实现函数被所有的对象共享的。
1.4: 对象的prototype对象
    通过构造函数创建的对象，都一个prototype对象，该对象指向构造函数的prototype对象，通过这种技术实现共享。 
1.5:原型prototype的构造函数

*/
function createStar(uname,age)
{
    //1：实例成员，通过this访问
    this.uname=uname;
    this.age=age;
    this.sing=function(){
        console.log("成员函数")
    }
}

//2：静态成员，在构造函数身上的添加的成员
createStar.getIndex=function(){
    console.log("静态成员函数")
}
createStar.staticMen="static";

//3：prototype对象，每一个构造函数都存在，共享方法
createStar.prototype.run=function(){
    console.log("i can run !");
}

console.log(createStar);

//创建对象三种方式
function createObject()
{
    //1：利用new Object()创建对象
    let obj1= new Object();
    obj1.uname="dong";
    console.log("obj1:name",obj1.uname);
    //2：利用 对象字面量创建对象
    let obj2={}
    obj2.sing=function(){
        console.log("i can sing");
    }
    obj2.sing();
    //3：利用构造函数创建对象
    let obj3= new createStar('linyimin',20);
    obj3.sing();
    let obj4= new createStar('linyimin',20);
    console.log('obj3.sing===obj4.sing',obj3.sing===obj4.sing);
    console.log('obj3.run===obj4.run',obj3.run===obj4.run);

    console.log(obj3.__proto__===obj4.__proto__);
    console.log(createStar.prototype===obj4.__proto__);
    console.log(createStar.prototype.constructor);
    console.log(obj4.__proto__.constructor);
    
    //原型链，1：原型对象也是一个对象，是否也存在原型对象
    console.log("原型对象的prototype对象：",obj4.__proto__.__proto__===Object.prototype,obj4.__proto__.__proto__);
    console.log("原型对象的prototype对象的prototype对象：",obj4.__proto__.__proto__.__proto__);

}

//1.6 使用protetyoe扩展内置对象功能
function extendFunc()
{
    //扩展内置对象的功能更
    Array.prototype.sum=function(){
        let sum=0;
        for(let i=0;i<this.length;i++){
            sum +=this[i];
        }
        return sum;
    }

    let arr = [1,2,3,4];
    console.log("sum:",arr.sum());
}

//1.7 使用call函数修改函数的this对象
function callFunc(x,y){
    console.log("call 可以修改函数的this对象");
    console.log(this);
    console.log("x+y=",x+y);
}

function callTest(){
    callFunc.call();
    let temp={
        name:"lin"
    }
    callFunc.call(temp,1,3);
}

//1.8 es6之前没有extends,可以借助call实现继承
function Father(name,age){
    this.name=name;
    this.age=age;
}

//共享方法在原型对象
Father.prototype.money=function(){
    console.log("i can pay money");
}

function Son(name,age){
    //{1）：this对象修改Father的this，继承成员变量
    Father.call(this,name,age);
    this.sayHello=function(){
        console.log("i can say!");
    }
}
//(2):把prototype调整为Father实例对象，继承成员函数
//Son.prototype=Father.prototype;
Son.prototype=new Father();
//(3):经过步骤（2）原型对象构造函数指向是错误的，constructor调整为Son
Son.prototype.constructor=Son;
Son.prototype.exam=function(){
    console.log("eaxm");
}

function inheritImplTest()
{
    let son = new Son("dong",10);
    console.log(son);
    son.money();
}

//es6 class本质还是一个函数
/*
es6之前 通过构造函数+原型对象实现面向对象编程
(1):构造函数有一个原型对象prototype
(2):构造函数的原型对象prototype有一个constructor执行构造函数
(3):构造函数可以通过原型对象添加方法
(4):构造函数创建的实例对象有__proto__原型对象，指向构造函数的原型对象
es6 通过 class 实现面向对象 是一种特殊的构造函数，es6就是class的语法糖
语法糖：就是一种更便捷写法，简单理解
*/
class CPerson{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
}
function classDemo()
{
    console.log("class对象=",typeof CPerson);
    //(1):类有一个原型对象prototype
    console.log(CPerson.prototype);
    //(2):类的原型对象prototype有一个constructor执行构造函数
    console.log(CPerson.prototype.constructor);
    //(3):类可以通过原型对象添加方法
    CPerson.prototype.sing=function(){
        console.log("i can sing sun day");
    }
    //(4):类创建的实例对象有__proto__原型对象，指向构造函数的原型对象
    let pTemp = new CPerson("fei","男");
    console.log(pTemp.__proto__===CPerson.prototype)
}

createObject();
extendFunc();
callTest();
inheritImplTest();
classDemo();

