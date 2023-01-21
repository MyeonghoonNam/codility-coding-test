function solution(A) {
  const N = A.length;
  const circle = [];
  let result = 0;

  for (let i = 0; i < N; i++) {
    circle.push({
      left: i - A[i],
      right: i + A[i],
    });
  }

  circle.sort((a, b) => a.left - b.left);

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (result > 10000000) {
        return -1;
      }

      if (circle[j].left > circle[i].right) {
        break;
      }

      if (
        circle[j].left >= circle[i].left &&
        circle[j].left <= circle[i].right
      ) {
        result += 1;
      }
    }
  }

  return result;
}

const A = [1, 5, 2, 1, 4, 0];
console.log(solution(A));
