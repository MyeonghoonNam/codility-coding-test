function solution(A, K) {
  const set = new Set(A);

  if (set.size === 1) return A;

  for (let i = 0; i < K % A.length; i++) {
    A.unshift(A.pop());
  }

  return A;
}
