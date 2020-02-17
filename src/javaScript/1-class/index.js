"use strict"
//es6新增对象
console.log("demo1.js begin");

//类的声明
class Car{
    //构造函数
    constructor(name,age){
        console.log("constructor car")
        this.name=name;
        this.age=age;
    }

    //成员方法
    sayHello(){
        console.log("hello my name is ",this.name, "age:",this.age);
    }

    //虚函数--可以直接在子类继承重写
    run(){
        console.log("car run");
    }
}


//继承函数--super调用父类的构造函数，super还可以调用父类的普通方法
class CBus extends Car{
    constructor(name,age){
        super(name,age);//必须首先调用
        super.run();
        this.run();
        this.btn = document.getElementById("btn");
        this.btn.onclick=this.play;
    }

    run(){
        console.log("CBus run");
    }
    //子类特有的方法
    play(){
        //谁调用，this就是谁的对象
        console.log("click play 方法 :",this);
    }
}


function classTest(){
    console.log("class Test begin")
    let car =new CBus("法拉利",10);
    car.sayHello();
    car.run();
}


classTest();
