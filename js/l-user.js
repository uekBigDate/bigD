$(function () {
    $(".new-btn").click(function () {
        $(".new").css("display","block")
    });

    $(".new .colse").click(function () {
        $(".new").css("display","none")
    });

    $(".abort-btn").click(function () {
        $(".new").css("display","none")
    });

    $(".import-btn").click(function () {
        $(".import").css("display","block")
    });
    $(".import .colse").click(function () {
        $(".import").css("display","none")
    });

    let peoplenum=3;
    $(".search-btn").click(function () {
        if (peoplenum>0){
            for (let i=0;i<peoplenum;i++){
                createTab();
            }
            $(".nothing").css("display","none")
        }
    });
    function createTab() {
        $("tr").last().after($(`<tr class="students">
                        <td><input type="checkbox"></td>
                        <td>小明</td>
                        <td>小明</td>
                        <td>12345678</td>
                        <td>男</td>
                        <td>前端</td>
                        <td>北京大学</td>
                        <td>1807</td>
                        <td><button>删除</button></td>
                    </tr>`))
    }

    let clickNum=0;
    $("td input").first().click(function () {
        clickNum++;
        if (clickNum%2==1){
            $("td input").attr("checked","true")
        } else if (clickNum%2==0) {
            $("td input").removeAttr("checked","flase")
        }
    });




});