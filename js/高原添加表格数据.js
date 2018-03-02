$(function(){
    //需求1：点击添加数据，显示遮蔽罩和对话框
    //需求2：点击关闭按钮，隐藏遮蔽罩耦合对话框
    //需求3：点击get按钮，相应行删除
    //需求4：点击对话框中的添加按钮，相应值被添加入tbody中


    //需求1：点击添加数据.btnAdd，显示遮蔽罩.mask和对话框.form-add
    $(".btnAdd").click(function(){
        $("#j_mask").show();
        $("#j_formAdd").show();
    });
    //需求2：点击关闭按钮#j_hideFormAdd，隐藏遮蔽罩.mask耦合对话框.form-add
    $("#j_hideFormAdd").click(function(){
        $("#j_mask").hide();
        $("#j_formAdd").hide();
    });
    //需求3：点击get按钮.get，相应行删除$(this).parent("tr").remove()
//            $("tr>td>a").click(function(){
//                $(this).parent("td").parent("tr").remove();
//            });
    $("td>.get").click(function () {
        //删除的是所在的tr。
        $(this).parent("td").parent("tr").remove();
    });
    //需求4：点击对话框中的添加按钮#j_btnAdd，相应值被添加入tbody中
    //<tr><td>#j_txtLesson.value</td><td>#j_txtBelSch.value</td><td><a href="javascript:;" class="get">GET</a></td></tr>

    $("#j_btnAdd").click(function(){
        //判断内容是否为空
        if($("#j_txtLesson").val()===""){
            alert("内容不能为空！");
            return;
        }
        var str = "";//要写在里边，是局部变量，要不然str会被多次赋值，最后只能删除新添加的最后一个。
        str = $("<tr></tr>");
        str.html('<td>'+$("#j_txtLesson").val()+'</td><td>'+$("#j_txtBelSch").val()+'</td><td><a href="javascript:;" class="get">GET</a></td>');
        $("#j_tb").append(str);
        $("#j_mask").hide();
        $("#j_formAdd").hide();
        //清空输入框，方便下一次输入
        $("#j_txtLesson").val("");
        //新加入的按钮没有绑定事件
        str.find("a").click(function(){
            str.remove();
        })

    })
})