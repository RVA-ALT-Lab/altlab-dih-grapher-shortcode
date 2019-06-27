if (document.getElementById('gform_wrapper_2'))//change for prod
{
	let values = [0,0,0,0,0];
	let sliders = Array.from(document.getElementsByClassName('slider'));
	let field = document.getElementById('input_2_2');
	sliders.forEach(function(slider, index) {
		slider.oninput = function (){				
				console.log(index)
				values[index] = sliderAmount(slider);
				field.value = values.join(',');
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