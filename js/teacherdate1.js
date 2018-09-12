let lis=document.querySelectorAll("nav ul li");
let two=document.querySelectorAll(".asidenav .two");
let three=document.querySelectorAll(".asidenav .three");
console.log(two,three);
let time=0;
lis.forEach(function (v,i) {
    v.onclick=function () {
        lis.forEach(function (ele) {
            ele.className="";
        });
        lis[i].className="click";
        time++;
        if (time%2!=0) {
            two[i].style.display="block";
        }else if (time%2==0) {
            two[i].style.background="#fff"
            two[i].style.display="none";
            three[i].style.display="none";
            two[i].style.color="#333";
        }
    }
});
let num=0;
for (let i=0;i<two.length;i++) {
    two[i].onclick=function () {
        num++;
        two[i].style.background="#ECF2FC";
        two[i].style.color="#4381E6";
        if (num%2!=0) {
            three[i].style.display="block";
        }else if (num%2==0) {
            three[i].style.display="none";
        }
    }
}
$(".asidenav a").click(function () {
    let index=$(this).index();
    console.log(index);
    $(".asidenav a main").eq(index).css("display","block").finish().animate({
        width:`300px`,
        height:`300px`
    },200,function () {
        $(".asidenav a main").eq(index).css({display:"none",width: `0`,height: `0`
        })
    })

});
let lies=document.querySelectorAll(".experiment_left_nav_box li");
let hide=document.querySelectorAll(".experiment_left_nav_hide");
let icon=document.querySelectorAll(".icon-sanjiaokuai");
let hide_in=document.querySelectorAll(".experiment_left_nav_hide_in");

lies.forEach(function (element,index) {
    lies[index].onmouseenter=function () {
        console.log("1");
        lies[index].style.color="#4381e6";
        hide[index].style.display="block";
        icon[index].style.display="block";
        // hide.forEach(function (v,i) {
        //     hide[i].style.display="block";
        // })

    }
    lies[index].onmouseleave=function () {

        hide[index].style.display="none";
        lies[index].style.color="#a3a3a3";
        icon[index].style.display="none";
    }
})
hide_in.forEach(function (v,i) {
    hide_in[i].onmouseenter=function () {
        hide_in[i].style.color="#4381e6";
    }
    hide_in[i].onmouseleave=function () {
        hide_in[i].style.color="#a3a3a3";
    }


})