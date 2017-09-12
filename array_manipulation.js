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


	// -- There is an array with every element duplicated except one. Find that element --
	my_array = [4, 5, 2, 1, 1, 2, 3, 4, 5];
	$('.example_array:eq(2)').append(JSON.stringify(my_array, null, ' '));
	var elements_in_array = {};
	var single_element;

	for (var i = 0; i < my_array.length; i++) {
		var element =  my_array[i].toString();
		if ( ! elements_in_array[element] ) {
			single_element = element;
		}
		elements_in_array[element] = true;
	}

	$('.solution_output:eq(2)').append(
		'ANSWER: The element that is not repeated is the number ' + single_element
	);


	// -- Find all common elements in three sorted arrays --
	var array_1 = [4, 5, 72, 1, 22, 33];
	var array_2 = [0, 15, 22, 10];
	var array_3 = [10, 5, 13, 40, 65];
	$('.example_array:eq(3)').append(
		  JSON.stringify(array_1, null, ' ') + '<br>'
		+ JSON.stringify(array_2, null, ' ') + '<br>'
		+ JSON.stringify(array_3, null, ' ')
	);
	var combined_array    = array_1.concat(array_2, array_3);
	var elements_in_array = {};
	var common_elements   = {};

	for (var i = 0; i < combined_array.length; i++) {
		var element =  combined_array[i].toString();
		if ( elements_in_array[element] ) {
			common_elements[element] = true;
		}
		elements_in_array[element] = true;
	}

	$('.solution_output:eq(3)').append(
		  'ANSWER: The numbers that appear more than once in the three arrays are: '
		+ Object.keys(common_elements)
	);



});
