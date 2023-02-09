/**
 * スプレッド構文
 */
// ドット{...}を使う

// 配列の展開
const array1 = [1, 2];
// console.log(array1);

// console.log(...array1);
// スプレッド構文を使うことで、値だけを出力できた

const sumFunc = (num1, num2) => console.log(num1 + num2);
// 従来の処理
// sumFunc(array1[0], array1[1]);

// スプレッド構文を使った処理
// sumFunc(...array1);
// 引数の中に、配列の要素が順番に入るようになる

const array2 = [1, 2, 3, 4, 5];
const [num1, num2, ...array3] = array2;
// console.log(num1);
// console.log(num2);
// スプレッド構文を使って残りの値をまとめる
// console.log(array3);
// 配列を展開する時や配列をまとめる時に使われる
// まとめる際は配列の分割代入とセットで使われることが多い

// 配列のコピー、配列の結合
const array4 = [10, 20];
const array5 = [30, 40];

// 配列のコピー
const array6 = [...array4];
// console.log(array6);

// 配列の結合
const array7 = [...array4, ...array5];
// console.log(array7);

const array8 = array4;
// console.log(array8);
array4[0] = 100;
console.log(array8);
// イコールで配列を繋げた場合は参照先が同じになってしまう
// 不具合の原因になってしまう
// 参照私になる

const array9 = [...array4];
array9[0] = 100;
console.log(array4);
