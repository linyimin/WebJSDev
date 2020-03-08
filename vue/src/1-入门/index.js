// demo1 组件挂接到dom节点上
let data = {
    message: "hello workd",
    title: "v-title",
    seen: true,
    todos: [
        { text: '学习 JavaScript', url: "www.baidu.com", content="content1" },
        { text: '学习 Vue', url: "www.baidu.com", content="content2" },
        { text: '整个牛项目', url: "www.baidu.com", content="content3" }
    ],
    groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
    ]
}

let vm = new Vue({
    el: "#app",
    data: data,
    methods: {
        onClick: function (e) {
            this.message = this.message.split('').reverse().join('');
        }
    },
    beforeCreate: function () {
        // `this` 指向 vm 实例
        console.log('beforCreate a is: ' + this.message)
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('created a is: ' + this.message)
    }

})

vm.$watch('message', function (newVal, oldVal) {
    console.log(newVal, oldVal);
})

data.message = "modify the message";
vm.$data.message = "app.$data.message";
vm.message = "app.message"

// 组件设计
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})