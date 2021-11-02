var sliderImages = document.querySelectorAll(".hidden1 img");
var displayedImage = document.getElementById("shownImage");

function nextImage(){
	var pos;
	for(var i = 0; i < sliderImages.length; i++){
		if(sliderImages[i].id == "current"){
			displayedImage.src = sliderImages[i].src;
			pos = i;
		}
	}
	sliderImages[pos].removeAttribute("id");
	if(pos == sliderImages.length - 1){
		sliderImages[0].id = "current";
	} else {
		sliderImages[pos+1].id = "current";
	}
}

function previousImage(){
	var pos;
	for(var i = 0; i < sliderImages.length; i++){
		if(sliderImages[i].id == "current"){
			displayedImage.src = sliderImages[i].src;
			pos = i;
		}
	}
	sliderImages[pos].removeAttribute("id");
	if(pos == 0){
		sliderImages[sliderImages.length-1].id = "current";
	} else {
		sliderImages[pos-1].id = "current";
	}
}

function sliderListLoop(repeat) { 
	setTimeout(function() {   
  	var pos;
  	if(ms != 0){
		for(var i = 0; i < sliderImages.length; i++){
			if(sliderImages[i].id == "current"){
				displayedImage.src = sliderImages[i].src;
				pos = i;
			}
		}
		if(repeat){
			sliderImages[pos].removeAttribute("id");
			if(pos == sliderImages.length - 1){
				sliderImages[0].id = "current";
			} else {
				sliderImages[pos+1].id = "current";
			}
	    	sliderListLoop(true); 
		} else {
			if(pos < sliderImages.length - 1){
				sliderImages[pos].removeAttribute("id");
				sliderImages[pos+1].id = "current";
				sliderListLoop(true);
			}
		}
	}                       
  }, ms)	
}

var ms;
document.getElementById("play");
var imgSliderLoop = document.getElementById("repeat");
var imgSliderTimer = document.getElementById("nrOfSeconds");

function playImageSlider(){
	if(play.firstChild.nodeValue == "Play"){
		play.firstChild.nodeValue = "Pause";
		ms = imgSliderTimer.value * 1000;
		sliderListLoop(imgSliderLoop.checked)
	} else {
		play.firstChild.nodeValue = "Play";
		ms = 0;
	}
}