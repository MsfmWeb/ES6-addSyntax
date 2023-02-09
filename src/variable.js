/**
 * const, letの変数宣言
 */

var val1 = "var変数";
//  console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";

// constを使った変数宣言
const val2 = "const変数";
console.log(val2);

// const変数が上書き不可
// val2 = "const変数を上書き";

// const変数は再宣言負荷
// const val2 = "const変数を再宣言";

// letを使った変数宣言
let val3 = "let変数";
console.log(val3);

// let変数が上書き可能
val3 = "let変数を上書き";
console.log(val3);

// let変数は再宣言不可
// let val3 = "let変数を再宣言";
// 赤波線はJavaScriptではエラーなので処理を実行しない
// let変数は誤った再宣言を未然に防いでくれる
// let変数はループの中で、回数ごとに数値が変わるときに用いる

const val4 = {
  name: "佐藤",
  age: 28
};
// 連想配列はキー{プロパティ}に対して値のみ入れる
// オブジェクトはキー{プロパティ}に対して関数も入れられる

// constで定義したオブジェクトは値の変更が可能
// オブジェクトや配列は書き換えが可能であるため注意が必要
val4.name = "田中";
// console.log(val4);
val4.addres = "広島";
console.log(val4);

const val5 = ["dog", "cat"];
// console.log(val5);

val5[0] = "bird";
// console.log(val5);

val5.push("monkey");
console.log(val5);

// 実際にReactの開発における変数宣言はconstがメインとなる
// ループ構文の中ではletを使用する
