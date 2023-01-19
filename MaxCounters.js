function solution(N, A) {
  const count = Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  for (let i = 0; i < A.length; i++) {
    const value = A[i];

    if (value === N + 1) {
      max = lastMax;
    } else {
      if (count[value - 1] < max) {
        count[value - 1] = max;
      }

      count[value - 1] += 1;

      if (lastMax < count[value - 1]) {
        lastMax = count[value - 1];
      }
    }
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] < max) {
      count[i] = max;
    }
  }

  return count;
}

const N = 5;
const A = [3, 4, 4, 6, 1, 4, 4];
console.log(solution(N, A));
