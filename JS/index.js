$(document).ready(function() {

	$("#asia_world_map").mouseenter(function() {
		$("#asiatext_world_map").show()
	});

	$("#asia_world_map").mouseleave(function() {
		$("#asiatext_world_map").hide()
	});

	$("#europe_world_map").mouseenter(function() {
		$("#europetext_world_map").show()
	});

	$("#europe_world_map").mouseleave(function() {
		$("#europetext_world_map").hide()
	});

	$("#namerica_world_map").mouseenter(function() {
		$("#namericatext_world_map").show()
	});

	$("#namerica_world_map").mouseleave(function() {
		$("#namericatext_world_map").hide()
	});

	$("#samerica_world_map").mouseenter(function() {
		$("#samericatext_world_map").show()
	});

	$("#samerica_world_map").mouseleave(function() {
		$("#samericatext_world_map").hide()
	});

	$("#africa_world_map").mouseenter(function() {
		$("#africatext_world_map").show()
	});

	$("#africa_world_map").mouseleave(function() {
		$("#africatext_world_map").hide()
	});

////////////////////////////////////
///////////Click Function////////////////
////////////////////////////////////



	$("#asia_world_map").click(function(){
		$("#world_map").css("background-image","url(images/asia_map.gif")
		$("#mainmap").hide()
		$("#Asia_map div").show()
		$("#Asia_map p").show()
		$('#Asia_map').show()


		blink('#Asia_map div');
	});

	$("#namerica_world_map").click(function(){
		$("#world_map").css("background-image","url(images/namerica.gif")
		$("#mainmap").hide()
		$("#Namerica_map div").show()
		$("#Namerica_map p").show()
		$('#Namerica_map').show()


		blink('#Namerica_map div');
	});


	$("#samerica_world_map").click(function(){
		$("#world_map").css("background-image","url(images/samerica.gif")
		$("#mainmap").hide()
		$("#Samerica_map div").show()
		$("#Samerica_map p").show()
		$('#Samerica_map').show()


		blink('#Samerica_map div');
	});


	$(".back").click(function(){
		hideAll();
		$("#mainmap").show()
		$("#world_map").css("background-image","url(styles/world_map.gif")
			})



////////////////////////////////////
///////////Asia Imgs////////////////
////////////////////////////////////


	$("#greatwall_china").mouseenter(function(){
		$("#greatwall_img").show()	
	});

	$("#greatwall_china").mouseleave(function(){
		$("#greatwall_img").hide()	
	});

	$("#fuji_japan").mouseenter(function(){
		$("#fuji_img").show()	
	});

	$("#fuji_japan").mouseleave(function(){
		$("#fuji_img").hide()	
	});

	$("#taj_india").mouseenter(function(){
		$("#taj_img").show()	
	});

	$("#taj_india").mouseleave(function(){
		$("#taj_img").hide()	
	});

	$("#ankor_cambodia").mouseenter(function(){
		$("#ankor_img").show()	
	});

	$("#ankor_cambodia").mouseleave(function(){
		$("#ankor_img").hide()	
	});

	

////////////////////////////////////
///////////North America////////////////
////////////////////////////////////


	$("#pyramid_mexico").mouseenter(function(){
		$("#pyramid_img").show()	
	});

	$("#pyramid_mexico").mouseleave(function(){
		$("#pyramid_img").hide()	
	});

	$("#statue_usa").mouseenter(function(){
		$("#statue_img").show()	
	});

	$("#statue_usa").mouseleave(function(){
		$("#statue_img").hide()	
	});

	$("#cn_canada").mouseenter(function(){
		$("#cn_img").show()	
	});

	$("#cn_canada").mouseleave(function(){
		$("#cn_img").hide()	
	});


////////////////////////////////////
///////////South America////////////////
////////////////////////////////////


	$("#christo_brazil").mouseenter(function(){
		showImage("#christo_img")
		$("#christo_img").show()	
	});

	$("#christo_brazil").mouseleave(function(){
		$("#christo_img").hide()	
		hideImage("#christo_img");	
	});

	$("#machu_peru").mouseenter(function(){
		showImage("#machu_img");
		$("#machu_img").show()	
	});

	$("#machu_peru").mouseleave(function(){
		$("#machu_img").hide()	
		hideImage("#machu_img");
	});

	$("#eisland_polynesia").mouseenter(function(){
		showImage("#eisland_img")
		$("#eisland_img").show()	
	});

	$("#eisland_polynesia").mouseleave(function(){
		$("#eisland_img").hide()
		hideImage("#eisland_img");	
	});


});




////////////////////////////////////
///////////Functions////////////////
////////////////////////////////////


function blink(element) {
    $(element).fadeOut(500);
    $(element).fadeIn(500);
    setTimeout(function(){
    	blink(element)
    }, 1000);
}

function hideAll(){

	// $("#Asia_map div").hide();
	$('#Asia_map').hide();
	$("#Namerica_map").hide();
	$("#Samerica_map").hide();
}

function showImage(element){
	$(element).css({
		"right" : "-=250",
		"top" : "-=100"
	});
}

function hideImage(element){
	$(element).css({
		"right" : "+=250",
		"top" : "+=100"
	});	
}


