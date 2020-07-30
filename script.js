"use strict";

// Task: Create an array of objects representing student scores. Define a variety of functions for
// working with such an array. Also call each of the functions at least once to test it.

const submissions = [
	{
		name: "Jane",
		score: 95,
		date: "2020-01-24",
		passed: true,
	},
	{
		name: "Joe",
		score: 77,
		date: "2018-05-14",
		passed: true,
	},
	{
		name: "Jack",
		score: 59,
		date: "2019-07-05",
		passed: false,
	},
	{
		name: "Jill",
		score: 88,
		date: "2020-04-22",
		passed: true,
	},
];

// Q 2
// Declare a function named addSubmission
// ○ Parameter(s): array , newName , newScore , newDate
// ○ Functionality: construct an object and push it into the array . The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise

const addSubmission = (array, newName, newScore, newDate) => {
	let submission = {
		name: newName,
		score: newScore,
		date: newDate,
		passed: newScore >= 60,
	};

	array.push(submission);
};

addSubmission(submissions, "Test1", 30, "2020-04-16");
// console.log(submissions);

// Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array , index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method.

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);
// console.log("calling deleteSubmissionByIndex ");
//deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

// Q 4
// Declare a function named deleteSubmissionByName
// ○ Parameter(s): array , name
// ○ Functionality: remove the object from the array that has the provided name .
// Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
	let index = array.findIndex((item) => {
		return item.name === name;
	});
	array.splice(index, 1);
};

//deleteSubmissionByName(submissions, "Joe");
// console.log(submissions);

// 5 // Declare a function named editSubmission
// ○ Parameter(s): array , index , score
// ○ Functionality: update an object’s score in the array at the specified index . Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
	array[index].score = score;
	array[index].passed = score >= 60;
};

//editSubmission(submissions, 1, 100);
//console.log(submissions);
// 6. Declare a function named findSubmissionByName
// ○ Parameter(s): array , name
// ○ Functionality: return the object in the array that has the provided name . Use the
// find method.

const findSubmissionByName = (array, name) => {
	return array.find((student) => {
		return student.name === name;
	});
};

// console.log(findSubmissionByName(submissions, "Jane"));

// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.
const findLowestScore = (array) => {
	let newscore = 100;
	array.forEach((element) => {
		if (element.score < newscore) {
			newscore = element.score;
		}
		console.log(`newscore is ${newscore}`);
	});
	return newscore;
};
// console.log("List", submissions);
// console.log(findLowestScore(submissions));

// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

const findAverageScore = (array) => {
	let sum = 0;
	for (let element of array) {
		sum += element.score;
	}
	return sum / array.length;
};

//console.log(findAverageScore(submissions));

// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores.

const filterPassing = (array) => {
	return array.filter((element) => {
		return element.score > 60;
	});
};

//console.log(filterPassing(submissions));

// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.
const filter90AndAbove = (array) => {
	return array.filter((element) => {
		return element.score >= 90;
	});
};

// console.log(filter90AndAbove(submissions));

//************************************************************* */
//Extended Challenges:
//************************************************************* */
// 1. Create a function named createRange
// ○ Parameter(s): start , end
// ○ Functionality: construct and return an array of integers starting with the start
// parameter and ending at the end parameter. e.g createRange(2, 5) returns
// [2, 3, 4, 5] .

const createRange = (start, end) => {
	let range = [];
	let looplength = end - start + 1;
	for (let i = 0; i < looplength; i++) {
		// console.log("start", start);
		range.push(start);
		start++;
	}

	return range;
};

console.log(createRange(2, 5));

//  2. Create a function named countElements
// ○ Parameter(s): array (an array of strings)
// ○ Functionality: construct and return an object with the array values as keys and
// the number of times that key appears in the array as values. e.g.
// countElements(['a', 'b', 'a', 'c', 'a', 'b']) returns { a: 3, b: 2,
// c: 1 } .

const getIndex = (array, element) => {
	return array.findIndex((item) => {
		return item === element;
	});
};
const countElements = (array) => {
	let obj = {};
	let freqArray = [];
	let i = 0;
	while (i < array.length) {
		let letter = array[i];

		console.log("letter ", letter);
		//console.log("array.includes(letter) = > ", array.includes(letter));
		let letterCnt = 0;
		while (array.includes(letter)) {
			letterCnt++;
			let fromIndex = getIndex(array, letter);
			//console.log(" fromIndex : ", fromIndex);
			array.splice(fromIndex, 1);
			//console.log(array.length);
		}

		console.log("letterCnt ", letterCnt);
		obj[letter] = letterCnt;
	}

	return obj;
};

//const strArray = ["a", "b", "a", "c", "a", "b"];
const strArray = ["a", "b", "a", "c", "a", "b", "a", "b", "a", "c", "a", "b"];
console.log(countElements(strArray));
