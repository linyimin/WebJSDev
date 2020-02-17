// 1：Promise 对象是一个构造函数，生成一个异步的promise对象

//1.1 promise对象的测试
function promise_test() {
    //1.1 promise对象生成时，函数立即执行
    const instance = new Promise((resolve, reject) => {

        //异步函数的函数体定义，下面的循环不上异步，也是同步执行的
        let sum = 0;
        for (let i = 1; i < 100000000; i++) {
            sum += i;
        }
        console.log("异步函数体定义 sum:", sum);
        let bRet = true;
        if (bRet) {
            resolve({
                data: [1, 2]
                , msg: "success"
            })
        }
        else {
            reject("promise_test函数调用失败")
        }

    })

    console.log("异步函数等待之前");

    //等待异步的回调函数定义，该部分不会
    instance.then(success => {
        console.log("success", success);

    }, failed => {
        console.log("failed", failed);
    })
}

promise_test();

//1.2 promise then的链式调用
function sayHi(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 2000)
    })
}

sayHi('张三')
    .then(name => {
        console.log(`你好， ${name}`);
        return sayHi('李四');    // 最终 resolved 函数中的参数将作为值传递给下一个then
    })
    // name 是上一个then传递出来的参数
    .then(name => {
        console.log(`你好， ${name}`);
        return sayHi('王二麻子');
    })
    .then(name => {
        console.log(`你好， ${name}`);
    });

//2：async 标志一个函数是一个异步函数，其也是返回一个Promise对象

//2.1: asyn标准异步函数，如果没有返回就相当于返回一个临时的Promise对象并立即调用resolve
async function funcA() {
    return 'hello!';
}

funcA().then(value => {
    console.log(value);
})
// hello!

//2.2：await是一个异步等待，等待一个Promise对象，
async function func() {
    console.log('async function is running!');
    const num1 = await 200;
    console.log(`num1 is ${num1}`);
    const num2 = await num1 + 100;
    console.log(`num2 is ${num2}`);
    const num3 = await num2 + 100;
    console.log(`num3 is ${num3}`);
}

func();
console.log('run me before await!');

//await 后面返回一个reject返回，则使用异常处理
async function func1() {
    try {
        const num1 = await 200;
        console.log(`num1 is ${num1}`);
        const num2 = await Promise.reject('num2 is wrong!');
        console.log(`num2 is ${num2}`);
        const num3 = await num2 + 100;
        console.log(`num3 is ${num3}`);
    } catch (error) {
        console.log(error);
    }
}
func1();


async function sayHi_async(name) {
    const sayHi_1 = await sayHi(name)
    console.log(`你好， ${sayHi_1}`)
    const sayHi_2 = await sayHi('李四')
    console.log(`你好， ${sayHi_2}`)
    const sayHi_3 = await sayHi('王二麻子')
    console.log(`你好， ${sayHi_3}`)
}

sayHi_async('张三')