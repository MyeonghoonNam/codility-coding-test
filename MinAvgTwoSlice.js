function solution(A) {
  const N = A.length;
  let minAvg = (A[0] + A[1]) / 2;
  let minIndex = 0;
  let avg = 0;

  for (let i = 2; i < N; i++) {
    avg = (A[i - 2] + A[i - 1] + A[i]) / 3;
    if (avg < minAvg) {
      minAvg = avg;
      minIndex = i - 2;
    }

    avg = (A[i - 1] + A[i]) / 2;
    if (avg < minAvg) {
      minAvg = avg;
      minIndex = i - 1;
    }
  }

  return minIndex;
}
