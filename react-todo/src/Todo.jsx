import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
    const [incompleteTodos, setIncompleteTodos] = useState(["TODOです1", "TODOです2"]);
    const [completeTodos, setCompleteTodos] = useState(["TODOでした1", "TODOでした2"]);
    const [todoText, setTodoText] = useState("");
    const onChangeTodoText = (event) => setTodoText(event.target.value);
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }
    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }
    const onclickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }

    const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={isMaxLimitIncompleteTodos} />
            {isMaxLimitIncompleteTodos && (
                <p style={{ color: "red" }}>登録できるTODOは5個まで</p>
            )}
            <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            <CompleteTodos todos={completeTodos} onClickBack={onclickBack} />
        </>
    )
}

// DOMについて
// DOMとはHTMLを木構造で表現したものでもあり、その構造にアクセスし操作するためのAPIでもある
// 静的なHTMLであってもブラウザでDOM(木構造)が生成され、そのDOMを元に画面が描画される
// 動的なサイトでは生成されたDOM(木構造)に対してjsで書かれたDOM(API)を使ってDOM(木構造)を更新する
// 更新されたDOMを元に画面が再描画される

// 仮想DOMについて
// 仮想DOMとは仮想的に表現されたDOMのことである
// Reactでは変更前の仮想DOMと変更後の仮想DOMを比較し、差分を検知して実際のDOMに反映する
// DOM全体を更新してレンダリングを行うとなると処理が重くなるため差分だけをレンダリングする
// レンダリングとはDOMから画面を描画することであり、このレンダリングの処理が重い
// 仮想DOMの生成や差分計算は軽い処理であるため、差分だけをレンダリングすることで高速に画面を描画できる

// keyについて
// <li key={todo}> としているのはレンダリングのパフォーマンスを向上させるため
// listの要素が1,3,4となっているときに2を追加して1,2,3,4としたい場合について考える
// つまり内部では1,3,4となっている仮想DOMと1,2,3,4となっている仮想DOMを比較して差分を求めている
// この場合、1と3の間に2を追加するのが効率的だが、そのような処理は行われない
// Reactは上から差分を比較して適宜変更を行うため、1は1のまま、3は2に変更、4は3に変更、最後に新たに4が追加となる
// このような処理を避けるためにkeyを設定する
// keyを設定すると、keyが同じ値の要素に対して比較を行う
//    a. key="1"の要素：変更なし
//    b. key="2"の新しい要素を作成し、DOM上でkey="1"とkey="3"の要素の間に挿入
//    c. key="3"の要素：DOM上での位置を更新（右に1つ移動）
//    d. key="4"の要素：DOM上での位置を更新（右に1つ移動）
// 上記のように効率的に差分を求める
// keyを使用した場合のアルゴリズムは決して単純なものではなくreactを書いた人が
// 複雑なアルゴリズムを内部で実装して、処理が軽くなるように最適化されている

// VanillaJSにおけるinput要素の取得方法
// inputタグは入力された値を内部に保持することはできる
// しかしinputタグ自体には値を他の場所に送信するような機能はない
// そのためbuttonタグを併用してボタンが押されたときにinputタグに入力された値を取得し、他の場所に送信する
// inputタグは入力された値を保持しているただの器のようなものである

// inputの実装
// 1. ユーザーが入力を行う
// 2. onChange イベントが発火する
// 3. onChangeTodoText 関数が呼び出され、新しい値で state を更新する
// 4. React が再レンダリングを行い、更新された state の値が value プロパティに反映される
// const onChangeTodoText = (event) => setTodoText(event.target.value);
// 引数で受け取るeventの中に入力された値が格納されている

// onClickAdd関数について
// この関数は追加ボタンが押された時点で呼び出され、incompleteTodosにtodoTextを追加する関数である
// todoTextは追加ボタンが押された時点でのinputタグに入力された値である
// todoTextステートはonChangeによりリアルタイムで入力された内容が常に更新されている

// const newTodos = [...incompleteTodos, todoText];について
// スプレッド構文を使用してincompleteTodosの中身を展開し、todoTextを追加し新しい配列を作成している
// この処理のあとsetIncompleteTodos(newTodos);を実行することでincompleteTodosのステートが更新される

// 関数の参照と呼び出しについて
// <button onClick={onClickAdd}>追加</button> 
// <button onClick={onclickDelete(index)}>削除</button>
// 上の行は関数そのものを参照しており、即座に実行されない
// クリックイベントが発生したときに参照した関数が実行される
// 下の行は()があるので関数を実行しており、即座に実行される

// newTodos.splice(index, 1);について
// indexで指定した配列の要素を第二引数で指定した個数だけ削除する