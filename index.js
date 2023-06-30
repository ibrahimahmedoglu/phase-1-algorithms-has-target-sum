function hasTargetSum(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    const num1 = array[i];
    
    // Iterate through the remaining elements in the array
    for (let j = i + 1; j < array.length; j++) {
      const num2 = array[j];

      // Check if the sum of num1 and num2 equals the target
      if (num1 + num2 === target) {
        return true;
      }
    }
  }

  // No pair of numbers adds up to the target
  return false;
}

/* 
  Time Complexity: O(n^2)
  The function uses two nested loops to iterate through the elements of the array.
  In the worst case, where there are no pairs that add up to the target, both loops will iterate through all n elements of the array.
  Hence, the time complexity is quadratic, O(n^2).
*/

/* 
  Pseudocode:
  - Iterate through each element in the array using a loop (index i).
  - Assign the current element to a variable num1.
  - Iterate through the remaining elements in the array using another loop (index j).
  - Assign the current element to a variable num2.
  - Check if the sum of num1 and num2 equals the target.
  - If it does, return true.
  - If no pair of numbers adds up to the target, return false.

  Additional Test Cases:
  // Edge case: Empty array
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  // Edge case: Single element array
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 10));

  // Edge case: Target is zero
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-5, 5], 0));

  // Edge case: Array with duplicate elements
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 3, 4, 4, 6], 8));
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Additional test cases
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-5, 5], 0));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 3, 4, 4, 6], 8));
}

module.exports = has
