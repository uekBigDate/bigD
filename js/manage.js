window.onload=function () {
    let classe= document.querySelector(".class");
    let classOne=document.querySelectorAll(".class .class-one");
    let two=document.querySelectorAll(".class .two");
    let three=document.querySelectorAll(".class .three");
    console.log(classOne);
    let time=0;
    for (let i = 0; i < classOne.length; i++) {
        classOne[i].onclick = function () {
            for (let j = 0; j < classOne.length; j++) {
                classOne[j].style.background="#fff";
                classOne[j].style.borderRight="none";
                classOne[j].style.color="#333";
            }
            classOne[i].style.color="#4381E6";
            // classOne[i].style.background="#ECF2FC";
            // classOne[i].style.borderRight="2px solid #4381E6";
            time++;
            if (time%2!=0) {
                two[i].style.display="block";
            }else if (time%2==0) {
                two[i].style.background="#fff";
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

}