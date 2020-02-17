"use strict"
//es6新增语法
//1：let  声明变量
//备注:var声明的变量没有作用域
function letTest(){
    //1：let什么的变量有块级作用域
    let a=50;
    {
        let a=10;
        let b=20;
        var c=100;
        console.log("块级里面a:=",a);
    }
    console.log("函数a:=",a);
    //console.log("函数b:=",b);//错误，不能访问
    console.log("函数c:=",c);

    //2:let放在循环变量防止变成全局变量
    for(let i=0;i<2;i++){}
    //console.log("for循环变量i:",i);//变量i为undefine
    for(var n=0;n<2;n++){}
    console.log("for循环变量n:",n);

    //3:let声明的变量没有类型提升，只能先定义后使用，不能先使用后定义
    //console.log(varA);//错误
    let varA=10;

    let arr=[];
    for(let index=0;index<2;index++){
        //是否有闭包，没有闭包，是查找块级作用域的变量i
        arr[index]=function(){
            console.log(index);
        }
    }
    arr[0]();
    arr[1]();
}

//2：const关键字，其和let功能一样，区别是const声明的变量不能重新赋值，但可以改变其对象值
function constTest(){
    //1:const和let一样有块级作用域
    //2:const声明的变量必须初始化
    //const k;//错误，没有初始化
    //3：const 声明的变量的地址不能改变，但地址内的值可以改变，对对象，对象值可以改变，对于数字类型，值不能改变。
    const i=3.14;
    //i=4;错误不能
    console.log(i);

    const obj={};
    obj.name="lin";
    console.log(obj);
    //obj={};//错误
    
}

//3:数组和对象解构赋值
function JieGouTest(){
    console.log("解构赋值测试***************")
    //1：数组解构赋值
    let arr=[1,2,3,4];
    let [a,b,c]=arr;
    console.log(arr,"a:",a,"b:",b,"c:",c)

    //2:对象解构
    let person={name:"zhang",age:20};
    //let {name,age}=person;
    //console.log(name,age);
    let {name:uname,age:nage}=person;
    console.log(uname,nage);
}

//4:箭头函数
//es6引入定义函数的(arg1,arg2...)=>{}
function jianTouHanshu()
{
    console.log("箭头函数的测试**********************");
    let fun=()=>{
        console.log("箭头函数:",this);
    }
    //4.1 如何函数体只有一行代码，且代码执行结果就是返回值，可以省略大括号
    let sum=(a,b)=>a+b;
    let prints=(a,b)=>console.log("a+b=",a+b);
    prints(2,4);
    //4.2 如果参数只有一个，()可以省略
    let print=a=>{console.log("print=",a);};
    print(10);
    //4.3 箭头函数，没有this，其this指向定义他的作用域的this
    console.log("函数：",this);
    fun();

    console.log("不定参数测试**************************")
    //4.4 不定参数
    function argsTest(...args){
        let arr=args;//是一个数组
        args.forEach(item=>console.log(item));
        let [a,...other] = args;
        //...是扩展运算符，把数组转换为以逗号分隔的参数序列
        console.log(...args);
        console.log("解构不定参数a=",a);
     }
    argsTest(2,"3",4,5);

    //4.5扩展操作符...  把数组转换为以逗号分隔的参数序列
    //用途：把只能使用不定参数的地方，使用数组
    let arr1=[1,2,3];
    let arr2=[5,6,7];
    let arr3=[...arr1,...arr2];//
    arr1.push(2,3);
    arr1.push(...arr2);
    arr1.push(arr2);
    console.log("arr1=",arr1);
    //let obj1={name:"ling",age:10};
    //console.log(...obj1);
}

function arrayTest(){
    //1：from函数，把伪数组转化数组，伪数组必须是有length，key为数字1-n
    let arrayLike={
        "0":"1",
        "1":"2",
        "length":2
    }
    console.log(Array.from(arrayLike,item=>item*2));

    //2:find 查找数据
    let arr=[{
        id:1,
        name:"张三"
    },{
        id:2,
        name:"李四"
    }];

    console.log("arr.find=",arr.find(item=>item.id===2));
    console.log("arr.some=",arr.some(item=>item.id===2));
    console.log("arr.findindex:查询满足条件的第一个元素的序号：",arr.findIndex(item=>item.id===2));
    console.log("arr.includes查找数组里面是否指定元素",arr.includes(2));
    
    //1：字符串模板
    let name="linyimin";
    let strData=`hello my name is ${name}`;
    console.log(strData);

    //2：字符串模板换行
    let obj={name:"lin",age:20};
    let htmlTest=`<div>
                        <span>${obj.name}</span>
                        <span>${obj.age}</span>
                </div>`;
    console.log(htmlTest);
    //3：模板字符串调用函数
    let fn=()=>"i am is function";
    let strTemp =`${fn()} this is very great`;
    console.log(strTemp);
    console.log(strTemp.startsWith("i am"));
    console.log(strTemp.endsWith("great"));
    console.log(strTemp.repeat(2));
}

function setTest(){
    console.log("set test begin *********");
    let data = new Set(["aa","bb","aa"]);
    data.add(1).add(4).add(3);
    console.log("data.has(2):",data.has(2));
    //console.log("data.includes(2)",data.includes(2));//没有该函数
    console.log("data.delete(1)",data.delete(1));
    console.log(data);
    data.clear();
    data.add(10);
    data.forEach(item=>console.log("forEach:",item));
  
    
    
}

letTest();
constTest();
JieGouTest();
jianTouHanshu();
arrayTest();
setTest();