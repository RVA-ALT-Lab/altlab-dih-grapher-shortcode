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


// array1.forEach(function(element) {
//   console.log(element);
// });

function sliderAmount(slider){
	 sliderValue = slider.value;
	return sliderValue;
}

document.onload = function (){
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