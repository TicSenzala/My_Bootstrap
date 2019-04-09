	$(document).ready(function(){
		
// Tout ce qui concerner le popin

var modal = $("#myModal");
var btn = $(".myBtn");
var close = $(".close");
modal.hide();
$("#overback").hide();


btn.on("click", function(){
	$("#overback").show();
	modal.fadeIn();
	$("#overback").css({"background-color":"rgba(0,0,0, .8)", "z-index":"10000", "position":"fixed", "left":"0", "top":"0", "width":"100%", "height":"100%"});
});

close.on("click", function(){
	modal.fadeOut();
	$("#overback").hide();
});	

$(".popin-dismiss").on("click", function(){
	modal.fadeOut();
	$("#overback").hide();
});	

$("#overback").not(modal).on("click", function(){
	modal.fadeOut();
	$("#overback").hide();
});

$(window).keydown(function(e){
	if(e.which == 27)
	{
		modal.fadeOut();
		$("#overback").hide();		
	}
})

// data-target
btn.on("click", function(){
	var content = btn.data("target");
	$("#text-modal").html(content);
})

// data-placement
var textTitle = $(".tooltip").attr("title");
$(".tooltiptext").html(textTitle);
var direction = $(".tooltiptext").data("placement");
if(textTitle)
{
	if(direction == "left")
	{
		$(".tooltiptext").css({"position":"absolute", "right":"140px"});
	}
	if(direction == "right")
	{
		$(".tooltiptext").css({"position":"absolute", "left": "130px"});
	}
	if(direction == "bottom")
	{
		$(".tooltiptext").css({"position":"absolute", "top":"50px", "right":"2px"});
	}
	if(direction == "top")
	{
		$(".tooltiptext").css({"position":"absolute", "bottom":"50px", "right":"2px"});
	}
}
else
{
	$('.tooltiptext').hide();
}

// menu deroulant de la navBar
$('#myMenu').hide();
$('#icon-deroul').on("click", function(){
	$('#myMenu').fadeToggle("fast");
});

// tabs

$("li").on("click", function(e){
	var content = $(e.target).data("target");
	$(".tab-pane").html(content);
	$('li').removeClass("active");
	$(e.target).addClass("active");
});

$('li').on("mouseover",function(){
	$(this).css({"border":"1px solid white", "color":"black"});
})

$('li').on("mouseleave",function(){
	$(this).css({"border":"none", "color":"black"});
})

});
	
