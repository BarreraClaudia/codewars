// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce((sum, currentValue) => (sum + currentValue), 0)
    let sum2 = arr2.reduce((sum, currentValue) => (sum + currentValue), 0)
    return sum1 + sum2
  }