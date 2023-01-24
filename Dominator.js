function solution(A) {
  if (A.length === 0) return -1;

  const count = new Map();

  for (let i = 0; i < A.length; i++) {
    const value = A[i];

    count.has(value)
      ? count.set(value, count.get(value) + 1)
      : count.set(value, 1);

    if (count.get(value) >= parseInt(A.length / 2) + 1) {
      return i;
    }
  }

  return -1;
}

const A = [3, 4, 3, 2, -1];
console.log(solution(A));
