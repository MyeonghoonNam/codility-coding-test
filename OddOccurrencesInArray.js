function solution(A) {
  let result = 0;

  for (var i = 0; i < A.length; i++) {
    result ^= A[i];
    console.log(result);
  }

  return result;
}
