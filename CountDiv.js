function solution(A, B, K) {
  const resultA = Math.floor((A - 1) / K);
  const resultB = Math.floor(B / K);

  return resultB - resultA;
}
