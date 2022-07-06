//countZeroes([1,1,1,1,0,0]) // 2
//countZeroes([1,0,0,0,0]) // 4
//countZeroes([0,0,0]) // 3
//countZeroes([1,1,1,1]) // 0

function countZeroes(arr) {
  //declaring variables
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right - left) / 2);
  let midVal = arr[mid];

  function midZero() {
    while (mid > 1) {
      mid = mid - 1;
      midVal = arr[mid];
      if (midVal === 1) {
        return `answer: ${right - mid} Zeroes`;
        // break;
      }
    }
  }

  function midOne() {
    while (midVal === 1) {
      mid = mid + 1;
      midVal = arr[mid];
      if (midVal === 0) {
        break;
      }
    }
  }

  // Handles if: the first middle value is the number ZERO
  if (midVal === 0) {
    let leftVal = arr[mid - 1];

    //Solve for: first left value is the number one
    if (leftVal === 1) {
      return `answer: ${right - mid + 1} Zeroes`;
    }
    //Solve for: first left value is the number zero
    if (leftVal === 0) {
      midZero();
    }
  }
  // Handles if: the first middle value is the number ONE
  else if (midVal === 1) {
    let rightVal = arr[mid + 1];

    //Solve for: first right value is the number zero
    if (rightVal === 0) {
      return `answer: ${right - mid} Zeros`;
    }
    //Solve for: first right value is the number one
    if (rightVal === 1) {
      midOne();
    }
  }
  //Handle if other
  return `answer: ${arr.length - (left + mid)} Zeroes`;
}
