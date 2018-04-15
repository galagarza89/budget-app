

let calcPercent = (num, percent) => {
	let total = (num * percent);
	return total;
}

let formatCurrency = (num) =>{
	var number = '$' + num.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	return number;
}

let compound = ( input, interest, length,) => {
	var compoundTotal = input
	for ( i=0; i < length; i++ ) {
		compoundTotal *= interest
		compoundTotal += input
	}
	return compoundTotal;
}

$('#calculateInput').click(function(){
	var input = $('#incomeInput').val();

	if ($.isNumeric(input)) {

		//Budget Calculator Functions
		$('.fivePercent').html(formatCurrency(calcPercent(input, 0.05)));
		$('.tenPercent').html(formatCurrency(calcPercent(input, 0.10)));			
		$('.fifteenPercent').html(formatCurrency(calcPercent(input, 0.15)));		
		$('.twentyPercent').html(formatCurrency(calcPercent(input, 0.20)));		
		$('.twentyFivePercent').html(formatCurrency(calcPercent(input, 0.25)));		
		$('.thirtyFivePercent').html(formatCurrency(calcPercent(input, 0.35)));		

		//Savings Investment Fucntions
		let avgSavings = (calcPercent(input, 0.15));
		$('#savingsSpan').html(formatCurrency(avgSavings));

		//Savings
		$('.savingsAcc5').html(formatCurrency(compound(avgSavings, 1.005, 5)));	
		$('.savingsAcc10').html(formatCurrency(compound(avgSavings, 1.005, 10)));	
		$('.savingsAcc20').html(formatCurrency(compound(avgSavings, 1.005, 20)));	

		//Money Market
		$('.mmAcc5').html(formatCurrency(compound(avgSavings, 1.02, 5)));	
		$('.mmAcc10').html(formatCurrency(compound(avgSavings, 1.02, 10)));	
		$('.mmAcc20').html(formatCurrency(compound(avgSavings, 1.02, 20)));		

		//Money Market
		$('.annuityAcc5').html(formatCurrency(compound(avgSavings, 1.04, 5)));	
		$('.annuityAcc10').html(formatCurrency(compound(avgSavings, 1.04, 10)));	
		$('.annuityAcc20').html(formatCurrency(compound(avgSavings, 1.04, 20)));

		//Mutual Funds
		$('.mfAcc5').html(formatCurrency(compound(avgSavings, 1.12, 5)));	
		$('.mfAcc10').html(formatCurrency(compound(avgSavings, 1.12, 10)));	
		$('.mfAcc20').html(formatCurrency(compound(avgSavings, 1.12, 20)));

		//DiverisifiedStock/ETF
		$('.stockETFAcc5').html(formatCurrency(compound(avgSavings, 1.10, 5)));	
		$('.stockETFAcc10').html(formatCurrency(compound(avgSavings, 1.10, 10)));	
		$('.stockETFAcc20').html(formatCurrency(compound(avgSavings, 1.10, 20)));


		//Reset Input Field
		$('#incomeInput').val('');
	} else {
		alert('Please enter a valid number');
		$('#incomeInput').val('');
	}
});

$('#resetAll').click(function(){
	$('.reset').html('$0');
});











