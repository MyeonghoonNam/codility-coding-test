function solution(A) {
  A.sort((a, b) => a - b);

  const N = A.length;
  const number1 = A[N - 1] * A[N - 2] * A[N - 3];
  const number2 = A[0] * A[1] * A[N - 1];
  const result = Math.max(number1, number2);

  return result;
}
