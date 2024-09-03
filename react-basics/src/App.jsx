// 関数を使ってroot.Renderの中に<App/>を入れて書く手法をJSX記法という
// 拡張子をjsxにすることでコンポーネントだということを明示的に示せる

import ColorfulMessage from "./components/ColorfulMessage";
import { useState, useEffect } from "react";


// Appコンポーネント,関数コンポーネント(一文字目は大文字)
// ファイル名は小文字から始まってもOK

// Returnの中には並列で二つ以上のタグを書くことができないので一つのタグで全体を囲む必要がある
// React.Fragmentを使うことでdivタグを使わずに複数のタグを並列で書くことができる
// React.Fragmentは省略して<></>と書くこともできる

// exportをつけることで他のファイルからAppコンポーネントを使うことができる

// buttonタグのonClickは通常onclickと書くが、Reactではキャメルケースで書く
// また{}の内部にはJSで書かれた関数や変数を記述する
// {}を使用することでただの文字列として認識されるのを防ぎJSのコードとして認識させる

// コンポーネント内のreturnの前に関数などを定義しておくことでコードが見やすくなる
// スタイルをあてる際にはJSのオブジェクトを使って記述する

// Propsとはコンポーネントに渡す引数のようなもののこと
// 例えば文字の色を引数に与えて、コンポーネントに複数の振る舞いをさせることができる

// ステートとは
export const App = () => {
  console.log("--App--");
  // 配列の分割代入,numというステートを定義,setNumという更新関数を定義（numというステートを更新するための関数）
  // useStateなどのフックは関数コンポーネントの一番上の階層でしか使えない
  const [num, setNum] = useState(0); // 0はnumの初期値
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    // 2個更新関数を行っても1しか更新されない
    // 1つ目のsetNumが実行された時点ではnumはすぐに更新されない
    // 更新されないのでnumは0のままで2つ目のsetNumが実行される
    // このように更新される理由としては、Reactは特定の関数の中の更新をバッチ処理で更新しているため
    // バッチ処理とは複数の操作や更新をまとめて一度に処理することである
    // そのため、更新関数が複数ある場合は最後の更新関数の値のみが反映される
    // このような仕様になっている理由としては、不要な再レンダリングを防ぐためである
    // setNum(num+1); // 引数に渡した値でnumを更新する
    // setNum(num+1);
    setNum((prev) => prev + 1); // 関数を使って更新することで複数のセット関数があっても正しく更新される
    // 関数ごとにバッチ処理を行い、関数単位で確実に更新を行っているため
  }
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  // useEffectは第一引数に関数、第二引数に配列を取る
  // 第二引数に配列を渡すことで、その配列の値が変更されたときだけ第一引数の関数が実行される
  // 空の配列を渡すことで初回のみ実行される
  // [num]を渡すことでnumの値が変更されたときだけ実行される
  // [num, isShowFace]を渡すことでnumかisShowFaceの値が変更されたときだけ実行される

  // useEffectを使う以前の実装の問題点としては、on/offボタンを押しても表示のon/offが切り替わらなかったことである
  // このような問題の原因としては、onClickToggleでオンオフを切り替えても、その後のif文により
  // onClickToggleで行った変更が強制的に書き換えられてしまうことが原因だった
  // そこでif文の実行を禁止するために、numが更新されたときだけif文を実行するようにuseEffectを使う
  // on/offボタンが押されたときにはnumの値は変更されないため、if文は実行されない
  useEffect(() => {
    console.log("--useEffect--");
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true); // 3の倍数のときTrueになってなかったらTrueにステートを変更
      } else {
        isShowFace && setIsShowFace(false); // 3の倍数でないときFalseになってなかったらFalseにステートを変更
      }
    }
  }, [num]);

  // setIsShowFaceでステートが更新されるとステートが宣言されているコンポーネントが再レンダリングされる
  // Appコンポーネントの再レンダリングの際、再度このif文が評価され、ステートが更新される
  // このようにステートが更新されると再度if文が評価されるため、無限ループが発生する
  // そこでisShowFace || setIsShowFace(true);のように記述することで
  // 一度setIsShowFace(true)を実行したらそれ以上実行されないようにした


  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>（＾ω＾）</p>}
    </>
  )
}
// {isShowFace && <p>（＾ω＾）</p>}
// && は左側がfalsyのときはその時点で判定を終了し、左側の値を返す
// Trueの場合は右側の値を返す

// ボタンをクリックした際に更新がされるが、その処理を再レンダリングという
// クリックされる度にAppコンポーネントが再度評価される

// Reactのコンポーネントが呼び出される際にはそのコンポーネントは二回評価される
// そのためconsole.logをコンポーネント内に記述されると一回の呼び出しで二回表示される
// このように二回表示される条件としては、開発中であることと、<StrictMode>を使用しているときのみである

// 再レンダリングされる条件
// 一つ目はコンポーネントのステートが更新されたとき
// 二つ目はコンポーネントに渡されるpropsの値が変更されたとき
// 三つ目は親のコンポーネントが再レンダリングされたときに子のコンポーネントも再レンダリングされる