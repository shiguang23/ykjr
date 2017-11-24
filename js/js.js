$(function(){
	//tab
	$("#tab div").click(function() {
		$(this).find("p").addClass("on").parent().siblings().find("p").removeClass("on");
		var index = $(this).index();
		$("#tabLei>div").eq(index).show().siblings().hide();

	})
	$("#tab .need").click(function() {
		$(this).find("p").addClass("on").parent().siblings().find("p").removeClass("on");
		var index = $(this).index();
		$("#tabLei>div").eq(index).show().siblings().hide();

	})
	$(".aa").hover(function(){
		$(this).find(".zen-Cen").show();
	},function(){
		$(".zen-Cen").hide();
	});
})
