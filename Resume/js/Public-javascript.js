window.onload=function Ball(){
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
               }

        }
    };







