function solution(A) {
  const n = A.length;

  const left = {};
  const right = {};

  for (let i = 0; i < n; i++) {
    const now = A[i];
    right[now] = right[now] === undefined ? 1 : right[now] + 1;
  }

  let leftLength = 0;
  let leftLeader = 0;
  let leftLeaderCount = 0;
  let rightLength = A.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const now = A[i];
    right[now] -= 1;
    rightLength -= 1;

    left[now] = left[now] === undefined ? 1 : left[now] + 1;
    leftLength += 1;

    if (left[now] > leftLeaderCount) {
      leftLeader = now;
      leftLeaderCount = left[now];
    }

    if (
      right[leftLeader] > parseInt(rightLength / 2) &&
      leftLeaderCount > parseInt(leftLength / 2)
    ) {
      answer += 1;
    }
  }

  return answer;
}
