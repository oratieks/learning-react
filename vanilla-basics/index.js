/**
 * const, let等の変数宣言
 */

// // var
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);


// // let
// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き"
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";


// // const
// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数を上書き";
// console.log(val3);

// // const変数は再宣言不可能
// const val3 = "const変数を再宣言";


// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "じゃけぇ",
//     age: 28,
// };
// console.log(val4);

// // プロパティは変更可能、新しいプロパティの追加も可能
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);


// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey"); // 配列に要素を追加
// console.log(val5);

// 動的に値が変わるものはステートを使う




/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 31;

// // 「私の名前はじゃけぇです。年齢は31歳です。」

// // 従来の方法（ + での結合）
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// // バッククォートを使い、${}で変数を囲む
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);




/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//     return str;
// } 

// 無名関数を変数に代入
// const func1 = function(str) {
//     return str;
// };
// console.log(func1("func1です"));

// アロー関数
// 引数が1つの場合、()は省略可能
// const func2 = (str) => {
//     return str;
// };
// console.log(func2("func2です"));

// 波カッコ省略可能（返り値はstr）
// const func2 = str => str;

// 引数が2つ以上の場合
// const func3 =(num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// 単一のオブジェクトをアロー関数で返す場合は改行してもOK
// const func3 = (num1, num2) => ({
//     hoge: num1,
//     fuga: num2,
// });
// console.log(func3(10, 20));




/**
 * 分割代入
 */
// const myProfile = {
//     name: "じゃけぇ",
//     age: 31,
// };
// // 分割代入を使わない場合
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // 分割代入を使う場合
// // myProfileのnameプロパティをn、ageプロパティをaに代入
// const { n, a } = myProfile;
// const message2 = `名前は${n}です。年齢は${a}歳です。`;
// console.log(message2);

// // 配列の場合
// const myProfile = ["じゃけぇ", 31];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [n, a] = myProfile;
// const message4 = `名前は${n}です。年齢は${a}歳です。`;
// console.log(message4);




/**
 * デフォルト値(引数、分割代入)
 */
// // アロー関数の引数のデフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`)
// sayHello();
// // 引数がない場合は「こんにちは！undefinedさん！」と表示される
// // name = "ゲスト"とすることでデフォルト値が表示される

// // 分割代入のデフォルト値
// const myProfile = {
//     age: 31
// };
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);




/**
 * オブジェクトの省略記法
 */
// const name = "じゃけぇ";
// const age = 31;
// // 省略しない場合
// myProfile = {
//     name: name,
//     age: age,
// };
// console.log(myProfile);

// 省略する場合(変数名とフィールド名が同じ場合フィールド名を省略できる)
// myProfile = {
//     name,
//     age,
// };
// console.log(myProfile);




/**
 * スプレッド構文 ...
 */

// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);      // [1, 2]
// console.log(...arr1);   // 1 2

// // スプレッド構文を使うと配列の中身を展開して表示できる
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);   // 3
// sumFunc(...arr1);            // 3

// // スプレッド構文でまとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);   // 1
// console.log(num2);   // 2
// console.log(arr3);   // [3, 4, 5]

// // 配列のコピー、結合（一番よく使う）
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4]; // arr4の中身をコピー
// console.log(arr6);      // [10, 20]

// const arr7 = [...arr4, ...arr5]; // arr4とarr5を結合
// console.log(arr7);      // [10, 20, 30, 40]

// const arr8 = arr4; // 参照渡し（arr8はarr4のアドレスを参照しているだけ）
// arr8[0] = 100;
// console.log(arr4);   // [100, 20]




/**
 * mapやfilterを使った配列の処理
 */
// map
// const nameArr = ["田中", "山田", "じゃけぇ"];
// // 従来のfor文を使った処理
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }

// mapを使った処理(配列に対して使えるメソッド)
// mapの引数にアロー関数を渡すことで、mapがアロー関数に配列の要素を渡してくれる
// nameArr.map((name) => console.log(name));

// // 右辺は要素を1つづつ取り出しており、それをnameArr2に代入している
// // そのためnameArr2はnameArrと同じ値を持つ
// const nameArr2 = nameArr.map((name) => {
//     return name;
// });
// console.log(nameArr);
// console.log(nameArr2);


// // filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);  // [1, 3, 5]

// const nameArr = ["田中", "山田", "じゃけぇ"];
// 従来のfor文でindexを扱う
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// mapでindexを扱う
// 第二引数を使うことでindexを取得できる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// mapでindexを使って新しい配列を作成
// 田中と山田にさんをつける
// const newNameArr = nameArr.map((name) =>{
//     if (name === "じゃけえ"){
//         return name;
//     } else {
//         return `${name}さん`;
//     }
// })




/**
 * 三項演算子
 */
// 条件 ? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// // 三ケタ区切りの整数で表示
// const num = "1300";
// console.log(num.toLocaleString()); // 1,300

// // numが数値の場合は3桁区切りで表示、そうでない場合は「数値を入力してください」と表示
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(50, 60));   // 100を超えています




/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// // truthy,falsyについて
// // "ABC" 0 10 undefined null false NaN "" [] {}
// // それぞれの型と値に対してtruthyかfalsyかが決まっている
// // 以下のように"ABC"だとif文の条件がTrueになるのでtruthyと表示される
// const val = "ABC";
// if (val) {
//     console.log("truthyです");
// } else {
//     console.log("falsyです");
// }

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
    console.log("1か2はtrueです");
} 
if (flag1 && flag2) {
    console.log("1も2もtrueです");
}

// || は左からtrueを探し見つかればその値を返す
// 見つからなかった場合は最後の値を返す
// OR演算子 -> TRUEを探す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// && は左からfalseを探し見つかればその値を返す
// 見つからなかった場合は最後の値を返す
// AND演算子 -> FALSEを探す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);