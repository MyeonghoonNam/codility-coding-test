function solution(A, B) {
  if (!B.includes(0) || !B.includes(1)) {
    return B.length;
  }

  let result = 0;
  let alive = [];

  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      alive.push(i);
      continue;
    }

    while (alive.length) {
      const index = alive.pop();

      if (A[i] < A[index]) {
        alive.push(index);
        break;
      }
    }

    if (!alive.length) {
      result += 1;
    }
  }

  result += alive.length;

  return result;
}
