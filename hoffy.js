// hof - function takes a function as an argument
// .... or a function that returns another function
// .... or a function that does both ^^^^
/*
check every element in an array
with a particular test
if any pass, then return true
if none pass, then return false
*/

function odd(n) {
  return n % 2 === 1;
}
function any(arr, test) {
  let result = false; 
  for(const ele of arr) {
    console.log(ele, test(ele));
    if(test(ele)) {
      result = true;
      break;
    } 
  }
  console.log(result);
  return result;
}


const nums1 = [1, 2, 3];
const nums2 = [2, 24, 6];

console.log('nums1 ---> ', any(nums1, odd)); // true
console.log('nums2 ---> ', any(nums2, odd)); // false

function composeLight(f, g) {
  function newFunc(val) {
    return(g(f(val)))
  }
  return newFunc;
}
const f = composeLight((x) => x - 1, (x) => x * 2);
console.log(f(5));















