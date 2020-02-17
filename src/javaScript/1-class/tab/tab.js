"use strict"

class Tab{
    constructor(id){
        this.main=document.querySelector(id);
        this.updateNode();
        this.addBtn = this.main.querySelector(".tabadd");
        this.ul=this.main.querySelector('.firstnav ul:first-child');//ul:first-child
        this.parSection = this.main.querySelector(".tabscon");
        this.init();
    }

    updateNode()
    {
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.deletes=this.main.querySelectorAll(".icon-guanbi");
        this.spans=this.main.querySelectorAll(".firstnav li span:first-child");
    }
    init(){
        // 初始化相关元素的绑定事件
        for(var i=0; i<this.lis.length;i++)
        {
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab.bind(this.lis[i],this);
            this.deletes[i].onclick=this.deleteTab.bind(this.deletes[i],this);
            this.spans[i].ondblclick=this.editTab;
            this.sections[i].ondblclick=this.editTab;
        }

        this.addBtn.onclick=this.addTab.bind(this.addBtn,this);
    }

    //切换功能
    toggleTab(varTab){
        varTab.clearClass();
        console.log(this.index);
        this.className="liactive";
        varTab.sections[this.index].className="conactive";
    }

    clearClass(){
        for(let index=0;index<this.lis.length;index++)
        {
            this.lis[index].className="";
            this.sections[index].className="";
        }
    }

    // 2. 添加功能
    addTab(varTab){
        varTab.clearClass();
        let ui='<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        varTab.ul.insertAdjacentHTML('beforeEnd',ui);

        let rand = Math.random();
        let tempSection =' <section class="conactive"> test:'+rand+'</section>';
        varTab.parSection.insertAdjacentHTML('beforeEnd',tempSection);
        varTab.updateNode();
        varTab.init();

    }
    // 3. 删除功能
    deleteTab(varTab,e){
        console.log(varTab,e,this);
        e.stopPropagation();
        let index = this.parentNode.index;
        console.log("delete:",index);

        varTab.lis[index].remove();
        varTab.sections[index].remove();
        varTab.updateNode();
        varTab.init();
        //有选中类的就返回，就返回不切合选中状态
        if(document.querySelector('.liactive')) return;
       
        //删除后，前一个作为选中状态
        index--;
        console.log("选中下一个",index);
        //前面为真，执行后面操作
        varTab.lis[index] && varTab.lis[index].click();
    }

    editTab(){
        let strText = this.innerHTML;
        //双击禁止选中文字
        window.getSelection?window.getSelection().removeAllRanges():document.sections.empty();
       // alert(11);
       this.innerHTML='<input type="text" />'
       let input = this.children[0];
       input.value=strText;
       input.select();
       //当失去焦点时离开文本框
       input.onblur=function(){
           this.parentNode.innerHTML= this.value;
       }
       input.onkeyup=function(e){
            if(e.keyCode===13){
                this.blur();
            }
       }
    }
}

new Tab("#tab");