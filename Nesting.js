function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (char === "(") {
      stack.push(char);
      continue;
    }

    if (char === ")") {
      if (stack.length === 0) {
        return 0;
      }

      stack.pop();
    }
  }

  const result = stack.length === 0 ? 1 : 0;

  return result;
}
