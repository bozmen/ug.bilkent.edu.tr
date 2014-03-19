$(document).ready(function(){
	$(".btn").clicktoggle(function() {
  		$(this).next().slideDown();
  		verticallyAlign();
	}, function() {
		verticallyAlign();
  		$(this).next().slideUp();
	});

	alignQuote();

	$("#right-personal td").mouseenter(function(){
		$(this).find("span").stop(1,0).animate({"right": "0px"}, 350)
	}).mouseleave(function(){
		$(this).find("span").stop(1,0).animate({"right": "200px"}, 350)
	});
});

// toggle function
$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};

var extractIntFromPx = function(string){
	var k = string.indexOf('px');
	string = parseInt(string.substring(0,k));
	return string;
};
	

// alligning skills
var verticallyAlign = function(){
	// Vertically aligning skills
	var a = $(".list");
	for(i = 0; i < a.length; i++){
		var height = $(a[i]).css('height');
		height = extractIntFromPx(height);
		$(a[i]).css('margin-top', -height/2);
	};

	// Vertically aligning "can"s
	var b = $(".can");
	for(j = 0; j < b.length; j++){
		var height = $(b[j]).css('height');
		height = extractIntFromPx(height);
		var fontSize = $(b[j]).css('font-size');
		fontSize = extractIntFromPx(fontSize);
		$(b[j]).css('line-height', height/fontSize);
	}
};

//alligning quote
var alignQuote = function(){
	var height = $('#aligner').css('height');
	height = parseInt(height);
	$('#aligner').css('margin-top', -(height/2));
};

//Changing quote
var changeQuote = function(){
};

setInterval(changeQuote, 5000);

