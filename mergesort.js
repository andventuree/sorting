function mergeSort(array) { //brings entire operations together
  //base case
  if(array.length < 2) return array; //stop when array is just a single elem
  let splits = split(array),
      left = splits[0],
      right = splits[1];
  console.log(splits)
  return merge(mergeSort(left), mergeSort(right))//merge whatever is sorted
}

function split(wholeArray) {
  let dividingIndex =  wholeArray.length / 2; //dont need Math.floor b/c slice rounds up
  let left = wholeArray.slice(0, dividingIndex);
  let right = wholeArray.slice(dividingIndex);
  // console.log(left);
  // console.log(right);
  return [left, right]; // [ [ ... ], [ ... ] ]
}

function merge(left, right){ //call this function to put separate elements together
  let merged = [],
      leftIdx = 0,
      rightIdx = 0;
  let counter = 0;
  //using shift for this function makes it a lot slower! big O multiplied by n! because you need to move all the elements over by 1 to expand the array.
  //So make use of an left and right index instead
  while(leftIdx < left.length && rightIdx < right.length){
    if(left[leftIdx] < right[rightIdx]){
      merged.push(left[leftIdx])
      leftIdx++;
    } else {
      merged.push(right[rightIdx])
      rightIdx++;
    }
    // console.log()
    console.log(`${counter++} passes - left [${left}], right [${right}]`)

  }
  console.log(merged);
  for(; leftIdx < left.length; leftIdx++){ merged.push(left[leftIdx])};
  for(; rightIdx < right.length; rightIdx++){ merged.push(right[rightIdx])};
  return merged;
}

let testArr = [5,8,2,1,9,10,3,6,4,7]; //[ [5,8,2,1,9,], [10,3,6,4,7] ]

//Ex. [1, 5, 7, 9] [2, 6, 8]

