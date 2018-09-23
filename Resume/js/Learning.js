window.onload=function () {
    Ball();
    Learning();
}
function Learning(){
    var lBall=document.getElementById('Le-left');
    var lImg =document.getElementById('Le-left').getElementsByTagName('img');
    var lWidth = [];
    var i = 0;
    //保存原宽度, 并设置当前宽度
    for (i = 0; i < lImg.length; i++)
    {
        lWidth.push(lImg[i].offsetWidth);
        lImg[i].style.width = parseInt(lImg[i].offsetWidth/2)+'px';
    }
    //鼠标移动事件
    document.onmousemove = function (event)
    {
        var event = event || window.event;
        for (i = 0; i < lImg.length; i++)
        {

            var a = event.clientX - lImg[i].offsetLeft - lImg[i].offsetWidth / 2;
            var b = event.clientY - lImg[i].offsetTop - lBall.offsetTop - lImg[i].offsetHeight / 2;
            var iScale = 1- Math.sqrt(a * a + b * b) / 300;
            if (iScale < 0.5) iScale = 0.5;
            lImg[i].style.width = lWidth[i] * iScale+'px';
        }
    }
};
function Ball(){
    function $(id){return (document.getElementById(id))}

    var lis = $('menu').getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        var temple;
        var index=0;
        lis[i].index=i;
        lis[i].onmouseover= function () {
//this表示当前i,lis[i].className出现错误，因为lis[i]不指向当前某个确定对象
            temple=this.className;

            this.className='';
        }
//函数内部变量不可以在函数外部使用
        lis[i].onmouseout=function () {
            console.log(temple);
            this.className=temple;
        }

        lis[i].onclick=function () {
            this.className="hit";
            window.location.href[this.index]=true;
        }

    }
};