/**
 * mapやfilterを使った配列の処理
 */
// 配列の編集
// 従来の処理
const nameArr = ["田中", "山田", "佐藤"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

// mapを使った配列の処理
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
// for文を使わなくても新しい配列にデータを入れることができる
// mapの中で、アロー関数を使い、配列のデータを順番に出力する
// mapの使い方は、配列をループさせる時や新しい配列を作る時

// filter
// 条件に一致した時だけ出力する
const numArr = [1, 2, 3, 4, 5];
// 配列の中の奇数だけ出力
const newnumArr = numArr.filter((num) => {
  // 奇数だけを取り出すなら2で割った余りが1になればいい
  return num % 2 === 1;
});
console.log(newnumArr);
