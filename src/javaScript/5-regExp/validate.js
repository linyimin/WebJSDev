//表单验证
console.log("validate.js文件开始执行********************************")
function initData()
{
    let regValidate = /^[0-9a-zA-Z_-]{6,16}$/;
    let uname = document.querySelector('.name');
    let varSpan = document.querySelector("span");
    uname.onblur=function(){
        console.log(this.value);
        if(regValidate.test(this.value)){
            console.log('正确的');
            varSpan.className='right';
            varSpan.innerText="用户名输入正确";
        }
        else{
            console.log("错误的");
            varSpan.className='wrong';
            varSpan.innerText="用户名输入错误";
        }
    }
}

function kuohaoTest(){
    //方括号 字符集合.匹配方括号中任意字符
    let reg = /^[abc]$/;//a,b,c a||b||c 任一个字符
    //{} 大括号是量词符，里面表示重复的次数
    let reg1=/^abc{3}$/;//匹配:abccc，其他都不匹配
    //（）小括号 表示优先级
    let reg2=/^(abc){3}$/;//匹配 abc三次
    console.log(reg2.test('abcabcabc'));//true
    console.log(reg2.test('abcabc'));//false

    //座机号码验证 或者符号
    let reg3=/^\d{3}-\d{8}|\d{4}-\d{7}$/
    
}

initData();
kuohaoTest();

function regForm(reg,strId){
    let elemet =document.querySelector(strId);
    elemet.onblur=function(){
        if(reg.test(elemet.value)){
            // alert("success!");
            elemet.nextElementSibling.className="success";
            elemet.nextElementSibling.innerHTML='<i class="success_icon"></i>恭喜你输入正确';
         }
         else{
             //alert("error!")
             elemet.nextElementSibling.className="error";
             elemet.nextElementSibling.innerHTML='<i class="error_icon"></i>格式错误,请重新输入';
         }
    }

    elemet.onkeyup=function(e){
        if(e.keyCode===13){
            this.blur();
        }
    }

    
}

window.onload=function(){
    let regTel=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    regForm(regTel,"#tel");
    //QQ验证
    let regQQ = /^[1-9]\d{4,}$/;
    regForm(regQQ,"#qq");
    let regNC =/^[\u4e00-\u9fa5]{2,6}$/;
    regForm(regNC,"#nc");
}