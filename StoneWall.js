function solution(H) {
  const N = H.length;
  const stack = [];
  let result = 0;

  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && H[i] < stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length <= 0 || H[i] > stack[stack.length - 1]) {
      stack.push(H[i]);
      result += 1;
    }
  }

  return result;
}
