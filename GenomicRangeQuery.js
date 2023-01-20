function solution(S, P, Q) {
  const M = P.length;
  const result = [];

  for (let i = 0; i < M; i++) {
    const start = P[i];
    const end = Q[i];
    const query = S.slice(start, end + 1);

    if (query.indexOf("A") !== -1) {
      result.push(1);
    } else if (query.indexOf("C") !== -1) {
      result.push(2);
    } else if (query.indexOf("G") !== -1) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;
}
