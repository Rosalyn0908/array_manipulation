$(function() {
	var my_array;
	
	// -- How to find duplicate number in array --
	my_array         = [0, 1, 2, 3, 4, 5, 6, 7, 8, 3];
	var expected_sum = 36
	var actual_sum   = 0;
	$('.example_array:eq(0)').append(JSON.stringify(my_array, null, ' '));

	for (var i = 0; i < my_array.length; i++) {
		actual_sum = actual_sum + my_array[i];
	}

	var duplicate_n = actual_sum - expected_sum;
	$('.solution_output:eq(0)').append(
		'ANSWER: The duplicate number is ' + duplicate_n
	);



});
