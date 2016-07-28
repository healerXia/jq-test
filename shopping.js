//导航效果
$(function(){
	//网页换肤
	ar $li =$("#skin li");
	$li.click(function(){
		switchSkin( this.id );
	});
	var cookie_skin = $.cookie("MyCssSkin");
	if (cookie_skin) {
		switchSkin( cookie_skin );
	}
	
	//导航效果
   $("#nav li").hover(function(){
		$(this).find(".jnNav").show();
	},function(){
		$(this).find(".jnNav").hide();
	});
})
function switchSkin(skinName){
		$("#"+skinName).addClass("selected")                //当前<li>元素选中
					   .siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
	    $("#cssfile").attr("href","styles/skin/"+ skinName +".css"); //设置不同皮肤
		$.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
	}