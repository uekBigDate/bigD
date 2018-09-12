
window.onload=function(){


    let btn4=document.querySelectorAll(".btn4");
    let table=document.querySelector("table");
    let btn2=document.querySelector(".btn2");
    let btn5=document.querySelectorAll(".btn5");
    let xiugai=document.querySelectorAll(".xiugai");
    // console.log(xiugai);
    // console.log(btn4);


    btn2.onclick=function () {
        let tr=document.createElement("tr");
        tr.innerHTML=" <td class='xiugai'>实验一  基本操作实验</td><td class='xiugai'>熟悉大数据实验一体机并了解如何搭建集群</td><td class='xiugai'>实验手册</td><td><button class=\"btn3\">下载</button></td><td><button class=\"btn4\">删除</button><button class=\"btn5\">修改</button></td>"
        table.childNodes[1].appendChild(tr);
    }
    table.ondblclick=function () {
        let asd=event.target
        // console.log(asd);
        if (asd.className=="btn4"){
            let delter=(asd.parentNode).parentNode;
            // console.log(delter);
            table.childNodes[1].removeChild(delter);
        }
        if (asd.className=="xiugai"){
            let input=document.createElement("input");
            input.value=asd.innerHTML;
            asd.innerHTML="";
            let ons=((asd.parentNode).lastElementChild).lastElementChild;
            ons.onclick=function () {
                console.log(asd);
                let value=input.value
                asd.innerHTML=value
            }
            asd.appendChild(input);
            input.focus();
        }
    }
}