const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = "";

    // 未完了リストに追加
    createIncompleteList(inputText);
}

// 渡された引数を基に未完了のTODOを作成する関数
const createIncompleteList = (todo) => {
    // li生成
    const li = document.createElement('li');

    // div生成
    const div = document.createElement('div');
    div.className = 'list-row';

    // p生成
    const p = document.createElement('p');
    p.className = 'todo-item';
    p.innerText = todo;

    // button（完了）生成
    const completeButton = document.createElement('button');
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
        const moveTarget = completeButton.closest('li');
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        // 戻すボタンを生成してdivタグの子要素に追加
        const backButton = document.createElement('button');
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            // todo内容を取得し、未完了リストに追加
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteList(todoText);
            // 押された戻すボタンの親タグ(li)を完了リストから削除
            const deleteTarget = backButton.closest('li');
            document.getElementById("complete-list").removeChild(deleteTarget);
        });
        moveTarget.firstChild.appendChild(backButton);
        // 完了リストに追加
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    // button（削除）生成
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(li)を未完了リストから削除
        const deleteTarget = deleteButton.closest('li');
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    // liの子要素に各要素を追加
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById('add-button').addEventListener('click', onClickAdd);



