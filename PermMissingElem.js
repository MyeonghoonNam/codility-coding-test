function solution(A) {
  if (A.length === 0) {
    return 1;
  }

  const totalSum = ((A.length + 1) * (A.length + 2)) / 2;
  const currentSum = A.reduce((acc, cur) => acc + cur, 0);

  const result = totalSum - currentSum;

  return result;
}

const A = [2, 3, 1, 5];
console.log(solution(A));
