var total_section = 0;
var current_idx = 0;
var screen_h = 0;
var page_h = 0;
var last_y = 0;
var onpage_on = true;
var isScroll = false;

$(document).ready(function(){

	init();

	$('body').on('scroll touchmove mousewheel', function(event) {

		if(last_y > $("html").scrollTop() && !onpage_on){

			console.log(":: 원페이지 시작 ::");
			onpage_on = true;
			isScroll = false;
		}

		if(!onpage_on) return;

		event.preventDefault();
		event.stopPropagation();
		if(isScroll) return;

		isScroll = true;
		var direction = event.originalEvent.wheelDelta;
		var y = 0;

		if(direction > 0){
			// up
			current_idx --;
			if(current_idx < 0){current_idx = -1;}
			y = current_idx * page_h;
		}
		else{
			// down
			current_idx ++;
			if(current_idx > total_section){
				current_idx = total_section;
				onpage_on = false;
				return;
			}
			y = current_idx * page_h;
		}

		$('body').animate({scrollTop: y}, 500, function(){isScroll=false;});
	});
});

$( window ).resize(function() {

	setHeight();
});

function init(){

	setHeight();

	total_section = $('#onepage > section').length;
	last_y = page_h * total_section;
}

function setHeight(){

	screen_h = document.body.clientHeight;
	page_h = screen_h;
	$("#onepage > section").height(page_h);
}
