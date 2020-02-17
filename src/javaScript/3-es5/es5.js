console.log("es5.js测试开始，本文件验证es5的新增功能")
//es5 新增方法

//一：数组方法：forEach()  map() filter() some() every()
function arrayTest() {
    //(1):遍历元素
    let arr = [4, 6, 8];
    arr.forEach(function (cur, index, array) {
        console.log("每一个数组元素:" + cur, "index:", index, "array:", array);
    })

    //(2):遍历元素，可以处理每一个元素并回值
    let newArr = arr.map(function (cur, index, array) {
        console.log("map函数,cur:", cur, " index:", index, " array:", array);
        return cur * 2 + "test";
    })
    console.log("map返回：", newArr);

    //(3):filter 过滤
    let filterArr = arr.filter(function (cur, index, array) {
        return (cur !== 6);
    })
    console.log("filter函数过滤数组,原始数组:", arr, "过滤后数组:", filterArr);

    //(4):reduce 求和 从左侧开始，第一个元素作为total值，遍历后面元素
    let arrTotal = arr.reduce(function (total, cur, index, array) {
        console.log("reduce函数,total:", total, "cur:", cur, " index:", index, " array:", array);
        return total + cur;
    })
    console.log("reduce求和：", arrTotal);

    //(5):求和 从左侧开始，末尾元素作为total值，逆序遍历后面元素
    let newArrTotal = arr.reduceRight(function (total, cur, index, array) {
        console.log("reduceRight函数,total:", total, "cur:", cur, " index:", index, " array:", array);
        return total + cur;
    })
    console.log("reduce求和：", arrTotal);
    //(6):every 判断是否所有元素满足条件,都满足条件返回true，否则返回false
    let bRet = arr.every(function (cur, index, arr) {
        return cur > 6;
    })
    console.log("every函数，数组：", arr, "所有元素是否都大于6", bRet)

    //(6):every 判断是否有元素满足条件，只要有一个满足就返回true,否则返回false
    //有一个满足条件就返回，终止循环
    bRet = arr.some(function (cur, index, arr) {
        return cur > 6;
    })
    console.log("some函数，数组：", arr, "是否有元素大于6", bRet)

    //(7):indexOf查找元素的索引
    console.log(arr.indexOf(8));
    console.log(arr.indexOf(7));

    //(8):
}

function strTest() {
    let str = "  d d  ";
    console.log(str, "lenght:", str.length);
    //去掉两边的空格
    let newStr = str.trim();
    console.log(newStr, "lenght:", newStr.length);
}

//Object.defineProperty()
function testDefineProperty() {
    //
    let obj = {
        name: "小米",
        id: "1"
    }
    //(1):es5之前给对象新增和修改对象方式
    obj.price = 100;
    obj.name = "华为";
    console.log(obj);
    //（2）es5可以使用defineProperty实现
    Object.defineProperty(obj, "name", {
        value: "apple"
    })
    Object.defineProperty(obj, "price", {
        value: 9.9
    })
    Object.defineProperty(obj, "id", {
        //false时不允许修改
        writable: false
    })
    Object.defineProperty(obj, "addr", {
        //false时不允许修改
        value: '杨浦区',
        writable: false, //false时限制该属性值不能被修改，默认false
        enumerable: false, //为false时，该字段不可以遍历,默认false
        configurable: false //为false时，不能删除该属性 和不允许修改第三个参数的值,默认false
    })
    delete obj.addr;
    console.log(obj);
    console.log(Object.keys(obj));

    //遍历对象的属性值
    for (var prop in obj) {
        console.log("obj." + prop + " = " + obj[prop]);
    }

}
arrayTest();
strTest();
testDefineProperty();