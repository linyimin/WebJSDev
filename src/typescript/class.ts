class CUserTestDemo {
    constructor(
        public name = "lin",
        public agee = 10
    ) { }

    public sayHello() {
        console.log(this.name);

    }
}
// This is a generic method to create an object
function createObjectDemo<T>(name: string, creator: { new(name: string): T }): T {
    return new creator(name);
}

// now we have a class Person, we want to create it via function createObject
class PersonDemoTest {
    public constructor(name: string) {
        this.name = name;
    }

    name: string;
}

// at end, we can create a person
var person = createObjectDemo<PersonDemoTest>("Kate", PersonDemoTest);

console.log(person);



//export const singleInstance = <T>(Constructor: new (...args: any[]) => T): T => globalServiceScope.resolve(Constructor);
//<T>(Constructor: new (...args: any[]) => T): T 参数的声明，首先是一个范型函数，声明一个可以传递任意参数的的对象构造函数
//=> globalServiceScope.resolve(Constructor); 函数的定义

//serviceMapArg: [any, { singleInstance: boolean; provider: (c: LifetimeScope) => any }][]