// ЗАДАЧА №1
function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
	  sum += arr[i];
	}
	if (arr.length <= 0) {
  
	  return 0;
	} else {
	  let avg = sum / arr.length;
	  avg = Number(avg.toFixed(2));
	  min = Math.min(...arr);
	  max = Math.max(...arr);
  
	  return {
		min: min,
		max: max,
		avg: avg
	  }
	}
  };
  console.log(getArrayParams(1, 2, 3, -100, 10));
  
  // ЗАДАЧА №2
  function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
	  sum += arr[i];
	}
	if (arr.length <= 0) {
  
	  return 0;
	} else {
  
	  return sum;
	}
  }
  console.log(summElementsWorker(10, 10, 11, 20, 10));
  
  function differenceMaxMinWorker(...arr) {
	min = Math.min(...arr);
	max = Math.max(...arr);
	if (arr.length <= 0) {
  
	  return 0;
	} else {
  
	  return max - min;
	}
  };
  console.log(differenceMaxMinWorker(10, 10, -11, 20, 10));
  
  function differenceEvenOddWorker(...arr) {
	let sumEven = 0;
	let sumOdd = 0;
	for (let i = 0; i < arr.length; i++) {
	  if (arr.length <= 0) {
  
		return 0;
	  } else if (arr[i] % 2 === 0) {
		sumEven += arr[i];
	  } else if (arr[i] % 2 !== 0) {
		sumOdd += arr[i];
	  }
	}
	return sumEven - sumOdd;
  }
  console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
  
  
  function averageEvenElementsWorker(...arr) {
	let sumEventElement = 0;
	let countEvenElement = 0;
	for (i = 0; i < arr.length; i++) {
	  if (arr.length <= 0) {
  
		return 0;
	  } else if (arr[i] % 2 === 0) {
		sumEventElement += arr[i];
		countEvenElement++;
	  }
	}
	return Number((sumEventElement / countEvenElement).toFixed(3));
  };
  console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
  
// ЗАДАЧА №3
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

function makeWork(func, ...arrOfArr) {
	let maxWorkerResult = -Infinity;
	for (i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (arrOfArr.length <= 0) {

			return 0;
		} else if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return Math.max(maxWorkerResult);
};
console.log(makeWork(summElementsWorker, ...arr));
console.log(makeWork(differenceMaxMinWorker, ...arr));
console.log(makeWork(differenceEvenOddWorker, ...arr));
console.log(makeWork(averageEvenElementsWorker, ...arr));
