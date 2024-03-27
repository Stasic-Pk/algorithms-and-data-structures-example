const array = [1,4,5,7,2,8,7,1,2,0,11]
let count = 0

function linearSearch(array, item) {
  for (i = 0; i < array.length; i++) {
    count++
    if (array[i] === item) {
      return i
    }
  }
  return null
}


console.log(linearSearch(array, 11))
console.log("count =", count)