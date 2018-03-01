function mergeSort(array) { //sorting function
  // indicate that you need sorting???

  // while(array[0].length !== 1 || array[1].length !== 1){
  //   let first = split(array[0]);
  //   let second = split(array[1]);
  //   mergeSort([first, second]);
  // }
}

function split(wholeArray) {
  if(Array.isArray(wholeArray[0])){
    split(merge(wholeArray[0], wholeArray[1]));
  }
  let dividingIndex = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, dividingIndex);
  let secondHalf = wholeArray.slice(dividingIndex);
  // console.log(firstHalf);
  // console.log(secondHalf);
  return [firstHalf, secondHalf]; // [ [ ... ], [ ... ] ]
}

function merge(arr1, arr2){ //call this function to put separate elements together
  console.log('time to merge:', arr1, ' + ', arr2);
  return arr1.concat(arr2);
}

let testArr = [5,8,2,1,9,10,3,6,4,7];
console.log(mergeSort())

let firstSplit = split(testArr);      //5 + 5
// let secondSplit = split(firstSplit);  //3 + 2 + 3 + 2
// let thirdSplit = split(secondSplit);  //2 +1 +1 +1 +2 +1 +1 +1

console.log(split(testArr));
// console.log(split(firstSplit));
// console.log(split(secondSplit));
// console.log(split(thirdSplit));


