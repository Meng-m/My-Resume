window.onload=function () {
    Ball();
    Excise();
}
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
function Excise(){
    function $(id){return (document.getElementById(id))}

    var timer = null;
    var i = index = 0;
    var Elist = document.getElementById('list').getElementsByTagName('li');
    var Ecount = document.getElementById('count').getElementsByTagName('li');

    /*自动切换部分*/
    //添加定时器

    /*手动切换部分*/
//遍历每一个标签栏并给她们绑定事件


//鼠标点击索引切换
    for (var i = 0; i < Ecount.length; i++) {
        Ecount[i].id=i;
        Ecount[i].onclick=function () {
            console.log('i='+i);
            console.log('id='+this.id);
            clearInterval(timer);
            changeOption(this.id);
            index=this.id;
            console.log('index='+index);
        }
    }

//鼠标滑过，轮播停止
    $('E-content').onmouseover = function () {
        clearInterval(timer);
        console.log('num='+index)
    }
//鼠标离开后，继续执行自动切换部分
    $('E-content').onmouseout = function () {
        console.log('index'+index);
        timer = setInterval(autoplay, 2000);
    }



    if (timer) {//timer为真
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(autoplay, 2000);

//内容切换函数
    function changeOption(curIndex) {
        var  alpha
        for (var j = 0; j < Ecount.length; j++) {
            Ecount[j].className = '';
            Elist[j].style.display='none';

        }
        //只高亮显示当前li标签
        Ecount[curIndex].className = 'selected';
        Elist[curIndex].style.display = 'block';
    }

//自动播放函数
    function autoplay() {
        index++;
        if (index >= Ecount.length) {
            index = 0;
        }
        console.log(index);
        changeOption(index);

    }
};