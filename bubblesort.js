function bubbleSort(arr) {
  const result = swap(arr)
  return result
}

function swap(arr) {
  // console.log(this.arr)
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 1; j < arr.length; j++) {
          const current = arr[j]
          const prev = arr[j - 1]
          if (prev > current) {
              const temp = arr[j - 1]
              arr[j - 1] = arr[j]
              arr[j] = temp
          }
      }
  }
  // console.log(arr)
  return arr
}
