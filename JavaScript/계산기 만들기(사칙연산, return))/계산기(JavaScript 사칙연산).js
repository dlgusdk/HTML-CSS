const 계산기 = {
  더하기: function (a, b) {
    return a + b;
  },
  빼기: function (a, b) {
    return a - b;
  },
  곱하기: function (a, b) {
    return a * b;
  },
  나누기: function (a, b) {
    return a / b;
  },
};

console.log(계산기.더하기(1, 1));

const 나누기_된_값 = 계산기.나누기(20, 2);
console.log(나누기_된_값);
