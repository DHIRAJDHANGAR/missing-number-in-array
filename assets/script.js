/**Missing number in array
 * Input:
 * N = 5
 * A[] = {1,2,3,5}
 * Output: 4
 */
const N = 5;
const A = [1, 2, 3, 5];

function MissingNumber(array, n) {
  const sumNumber = (n * (n + 1)) / 2;
  let sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  const MissingNum = sumNumber - sumArray;
  return MissingNum;
}

MissingNumber(A, N);
console.log("MissingNumber:", MissingNumber(A, N));
