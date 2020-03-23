var CUserTestDemo = /** @class */ (function () {
    function CUserTestDemo(name, agee) {
        if (name === void 0) { name = "lin"; }
        if (agee === void 0) { agee = 10; }
        this.name = name;
        this.agee = agee;
    }
    CUserTestDemo.prototype.sayHello = function () {
        console.log(this.name);
    };
    return CUserTestDemo;
}());
// This is a generic method to create an object
function createObjectDemo(name, creator) {
    return new creator(name);
}
// now we have a class Person, we want to create it via function createObject
var PersonDemoTest = /** @class */ (function () {
    function PersonDemoTest(name) {
        this.name = name;
    }
    return PersonDemoTest;
}());
// at end, we can create a person
var person = createObjectDemo("Kate", PersonDemoTest);
console.log(person);
//export const singleInstance = <T>(Constructor: new (...args: any[]) => T): T => globalServiceScope.resolve(Constructor);
//<T>(Constructor: new (...args: any[]) => T): T 参数的声明，首先是一个范型函数，声明一个可以传递任意参数的的对象构造函数
//=> globalServiceScope.resolve(Constructor); 函数的定义
//serviceMapArg: [any, { singleInstance: boolean; provider: (c: LifetimeScope) => any }][]

