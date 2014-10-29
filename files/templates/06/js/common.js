$(function()
{
	//无限级菜单
	$("#submenu a").click(function()
	{
		if($(this).next().is("ul"))
		{
			$(this).next().toggle();
			$(this).toggleClass("close");
			return false;
		}
		else
		{
			$("#submenu a").removeClass("hover");
			$(this).toggleClass("hover");
		}
	})


	$("#submenu a").each(function()
	{
		if(!$(this).next().is("ul"))
		{
			$(this).toggleClass("file");
		}
	})
	

	//一级菜单的hover效果
	$("#menu a").each(function()
	{
		if($(this).attr("name")==$("#menu").attr("name"))
		{
			$(this).attr("class", "hover");
		}
	})

	//二级菜单的hover效果
	$("#submenu a").each(function()
	{
		if($(this).attr("name")==$("#submenu").attr("name"))
		{
			$(this).attr("class", "hover");
			$(this).parent().parent().show();
			$(this).parent().parent().parent().parent().show();
			$(this).parent().parent().parent().parent().parent().parent().show();

			$(this).parent().parent().prev().attr("class","close");
			$(this).parent().parent().parent().parent().prev().attr("class","close");
			$(this).parent().parent().parent().parent().parent().parent().prev().attr("class","close");
		}
	})
	
	//iframe高度自适应
	$("#iframe").load(function()
	{
		$(this).height($(this).contents().find("body").height() + 80);
	})
	
	//登陆判断
	$("#buttonlogin").click(function()
	{
		if($("#TB_Name").val() == 0 )
		{
			alert("请输入您的用户名！");
			$("#TB_Name")[0].focus();
			return false;
		}
		if($("#TB_Password").val() == 0 )
		{
			alert("请输入您的密码！");
			$("#TB_Password")[0].focus();
			return false;
		}
	})

})

