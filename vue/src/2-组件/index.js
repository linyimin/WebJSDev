let vm = new Vue({
    el: "#app",
    data: {
        message: "view message",
        rawHtml: "<span style='color:red'>this is a span</span>",
        isButtonDisabled: false,
        ok: true,
        url: "http://www.baidu.com",
        href: "href",
        firstName: "lin",
        lastName: "yimin",
    },
    methods: {
        doSomething: function (e) {
            console.log("doSomething", e);
            alert("dosomething");
        },
        onClick: function (e) {
            console.log(e);
        }
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        },
        fullName: {
            get: function () {
                return this.firstName + this.lastName;
            },
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }

    },
    created: function () {
        console.log("created");
    }
});

vm.fullName = "zhang yi";


// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    props: ['title'],
    data: function () {
        return {
            count: 0
        }
    },
    created: function () {
        console.log("button-counter created");
    },
    template: '<button v-on:click="count++">You clicked me {{title}} {{ count }} times.</button>'
})