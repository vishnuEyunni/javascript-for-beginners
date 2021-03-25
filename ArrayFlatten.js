// given an array like arr = [1,2,[3,4,[5,6,[7,8]]]]
// merge the arr by returning the output as [1,2,3,4,5,6,7,8]

function flattenArr(arr) {
  return arr.reduce((acc,curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArr(curr) : curr);
  },[]);
}

// The array reduce is called to traverse through each item, and check if it is an array, then call FlattenArr
// if not, return the curr value to get appended to the accumulator.
