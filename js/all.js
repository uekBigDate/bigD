window.onload=function () {
    let navlis = document.querySelectorAll(".asidenav li");
    let two=document.querySelectorAll(".asidenav .two");
    let three=document.querySelectorAll(".asidenav .three");
    let time=0;
    for (let i = 0; i < navlis.length; i++) {
        navlis[i].onclick = function () {
            for (let j = 0; j < navlis.length; j++) {
                // navlis[j] .classList.remove("selected");
                navlis[j].style.background="#fff";
                navlis[j].style.borderRight="none"
                navlis[j].style.color="#333";
            }
            // navlis[i].classList.add("selected");
            navlis[i].style.color="#4381E6";
            navlis[i].style.background="#ECF2FC";
            navlis[i].style.borderRight="2px solid #4381E6"
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

    }
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

    // //水波动效
    // $(".asidenav a li").click(function () {
    //     let index=$(".asidenav a li").index();
    //     $(".asidenav li div").eq(index).css("display","block").finish().animate({
    //         width:`300px`,
    //         height:`300px`
    //     },20,function () {
    //         $(".asidenav li div").eq(index).css({display:"none",width: `20px`,height: `20px`
    //         })
    //     })
    //
    // });

};
