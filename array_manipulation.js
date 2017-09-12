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


	// -- How to find the largest and smallest number in array --
	my_array = [3, 4, 10, 5, -4, 6, 2, 7, 111, 8, 3];
	$('.example_array:eq(1)').append(JSON.stringify(my_array, null, ' '));
	var smallest = my_array[0];
	var largest  = my_array[0];

	for (var i = 0; i < my_array.length; i++) {
		if ( my_array[i] < smallest ) {
			smallest = my_array[i];
		}
		if ( my_array[i] > largest ) {
			largest = my_array[i];
		}
	}

	$('.solution_output:eq(1)').append(
		'ANSWER: The smallest number is ' + smallest + ' and the largest is ' + largest
	);



});
