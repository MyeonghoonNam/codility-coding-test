function solution(A) {
  let result = 0;
  let oneCount = A.filter((v) => v === 1).length;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      result += oneCount;
    } else {
      oneCount -= 1;
    }

    if (result > 1000000000) {
      return -1;
    }
  }

  return result;
}
