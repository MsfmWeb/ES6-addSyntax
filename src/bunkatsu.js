/**
 * 分割代入
 */

// コードを簡潔に、見やすくする
// オブジェクトの定義
// const myprofile = {
//   name: "佐藤",
//   age: 28
// };
// console.log(myprofile);

// テンプレート文字列で表示
// プログラムが冗長になる
// const message = `私は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
// console.log(message);

// const { name, age } = myprofile;
// const message2 = `私は${name}です。年齢は${age}歳です。`;
// console.log(message2);
// // 分割代入は処理の最初でオブジェクト（配列）から指定のキーを
// 抜き出して自由に利用できるようにするもの

// 配列でも似たような処理が可能
// 従来の処理
const myprofile = ["佐藤", 28];
// const message3 = `私は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(message3);

// 配列で分割代入を使う場合
const [name, age] = myprofile;
const message4 = `私は${name}です。年齢は${age}歳です。`;
console.log(message4);
