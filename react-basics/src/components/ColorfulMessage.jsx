// props引数でオブジェクトとして受けとる
// propsの中身を分割代入で取り出すこともできる

// このようなexport方法をネームドエクスポートという
export const ColorfulMessage = ({ color, children }) => {
  // 分割代入でpropsの中身を取り出し、変数名を短縮できる
  // const { color, children } = props;
  console.log("--ColorfulMessage--");
  const contentStyleA = {
    color, // フィールド名と変数名が同じ場合は省略できる
    fontSize: "18px"
  };

  return (
    // props.childrenでコンポーネントのタグで囲まれた部分を取得できる
    <p style={contentStyleA}>{children}</p>
  )
}

// 以下のようなexport方法をデフォルトエクスポートという
// このようにexportすることで、他ファイルでimportする際に名前を変更してimportすることができる
// 具体的にはコンポーネントに対して任意の名前を付けて、任意の名前でコンポーネントを呼び出すことができる
// 基本的にはネームドエクスポートを使用することが多い
export default ColorfulMessage;