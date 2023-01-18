function solution(X, Y, D) {
  let result = parseInt((Y - X) / D);

  if ((Y - X) % D !== 0) {
    result += 1;
  }

  return result;
}
