/**
 * アロー関数
 */

// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));

// 従来の関数２
const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

// アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

// アロー関数　省略あり
// 処理の中身が1行ならreturnと波かっこを省略できる
const func4 = (str) => str;
console.log(func4("func4です"));

// 文字列ではなく数値型でも見る
const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(10, 20));

// 省略は数値型も同様
const func6 = (num1, num2) => num1 + num2;
console.log(func6(20, 30));
