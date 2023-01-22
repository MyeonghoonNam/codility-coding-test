function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    switch (char) {
      case "(":
      case "{":
      case "[": {
        stack.push(char);
        break;
      }

      case ")": {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
          break;
        }

        return 0;
      }
      case "}": {
        if (stack[stack.length - 1] === "{") {
          stack.pop();
          break;
        }

        return 0;
      }
      case "]": {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
          break;
        }

        return 0;
      }
    }
  }

  const result = stack.length > 0 ? 0 : 1;

  return result;
}

const S = "([)()]";
console.log(solution(S));
