function solution(A) {
  let leftSum = A[0];
  let rightSum = A.reduce((acc, cur) => acc + cur, 0) - leftSum;

  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < A.length; i++) {
    const diff = Math.abs(leftSum - rightSum);

    if (diff < result) {
      result = diff;
    }

    leftSum += A[i];
    rightSum -= A[i];
  }

  return result;
}
