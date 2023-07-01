const 할인된_가격 = (기기이름, 가격) => {
  if (기기이름 === "맥북") {
    return 가격 * 0.8; //맥북 20%할인
  } else if (기기이름 == "아이폰") {
    return 가격 * 0.5;
  } else {
    return 가격 * 0.9; //그 외 20%할인
  }
};

console.log(할인된_가격("맥북", 1000));

for (let i = 0; i < 10; i++) {
  console.log("i가 지금", i, "입니다");
}
