function solution(A) {
  const N = A.length;

  A.sort((a, b) => a - b);

  for (let i = 0; i < N - 2; i++) {
    if (A[i] < 0) {
      continue;
    }

    for (let j = i + 1; j < N - 1; j++) {
      if (A[i] + A[j] > A[j + 1]) {
        return 1;
      }
    }
  }

  return 0;
}
