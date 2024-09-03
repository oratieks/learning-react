import  { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App"; // Appコンポーネントをインポート(.jsは省略可能)
// index.html の "root" という ID を持つ要素を取得し、その要素に React のルートを作成
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// レンダリング
// StrictModeはより厳密なルールでReactを書くことを強制する
// 間違った書き方をしていると警告が表示される
root.render(
    <App />
  );