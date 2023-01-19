function solution(A) {
  A = [...new Set(A)];

  let arr = A.filter((v) => v > 0);

  if (arr.length === 0) {
    return 1;
  }

  arr = arr.sort((a, b) => a - b);

  let target = 1;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value > target) {
      return target;
    }

    target += 1;
  }

  return target;
}

/**
 * TestCase
 * [1, 2, 3]
 * [-1, -3]
 * [0, 0, 0, 0]
 * [-5, 100000]
 */
