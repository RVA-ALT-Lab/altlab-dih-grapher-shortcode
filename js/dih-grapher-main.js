if (document.getElementById('gform_wrapper_6'))//change for prod
{
	let values = [50,50,50,50,50];
	let sliders = Array.from(document.getElementsByClassName('slider'));
	let field = document.getElementById('input_6_4');
	let title = document.getElementById('input_6_1');	
	sliders.forEach(function(slider, index) {
		slider.oninput = function (){				
				console.log(index)
				values[index] = sliderAmount(slider);
				field.value = '[dih-graph scores="'+values.join(',')+'"]';
				title.value = values.join('/');
		}

	})
}


function sliderAmount(slider){
	 sliderValue = slider.value;
	return sliderValue;
}

//SCROLL TO form confirmation gform submission


function scrollToThanks(){
	console.log('scroll ran')
	if(document.getElementById("thanks")){
		console.log('scroll found thanks')
	  let thanks = document.getElementById("thanks");
	  let topThanks = thanks.offsetTop;
	  window.scrollTo({
		  top: topThanks,
		  left: 0,
		  behavior: 'smooth'
		});
	}
}

var callback = function(){
  // Handler when the DOM is fully loaded
  scrollToThanks();
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}