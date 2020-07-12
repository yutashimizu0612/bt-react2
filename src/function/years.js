const start = 1926;
const ad = [...Array(90).keys()].map(i => start + ++i); // 西暦

// 下二桁の数値を取得する
function sliceLastTwo(num) {
  return parseInt(String(num).slice(-2));
}

// "1988年（昭和63）"のフォーマットの配列を返す
const years = ad.map(year => {
  let eraName = year > 1988 ? '平成' : '昭和';
  let lastTwoFigures = sliceLastTwo(year);
  let jYear = sliceLastTwo(lastTwoFigures + 75); // 西暦の下二桁に75を足して、昭和を算出
  if (eraName === '平成') {
    jYear -= 63;
  }
  return year + '年（' + eraName + jYear + '）';
});

export default years;
