function countDanishLetters(danishLetters) {
  let result = {};
  let total = 0;
  for (let str of danishLetters) {
    if (!str.match(/[a-z]/i) && str !== " ") {
      result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
      total += 1;
    }
  }
  console.log(total);
  console.log("{Total:", total, result, "}");
}
const danishString = "Jeg har en blå bil";
countDanishLetters(danishString);
const danishString2 = "Blå grød med røde bær";
countDanishLetters(danishString2);
