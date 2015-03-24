$(document).ready(function() {
	$('#submit-button').click(function() {
		if('#myNumber') {
			var maxNum = parseInt($('#myNumber').val());
			var output;
			for(var i = 1; i <= maxNum; i++) {
				if(i%3==0) {
					if(i%5==0) {
						output = $('#count span').html() + "<br>fizzbuzz"
						$('#count span').html(output);
					}
					else {
						output = $('#count span').html() + "<br>fizz"
						$('#count span').html(output);	
					}
				}
				else {
					if(i%5==0) {
						output = $('#count span').html() + "<br>buzz"
						$('#count span').html(output);	
					}
					else{
						output = $('#count span').html() + "<br>" + i;
						$('#count span').html(output);
					}
				}
			}
			return false;
		}
		return false;
	});
});