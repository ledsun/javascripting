---

# 配列のフィルター

配列の操作方法にはさまざまなものがあります。

よくやる処理として、配列にフィルターをかけて、ある値だけ取り出すというのがあります。

フィルターをかけるためには、 `.filter()` メソッドを使います。

例を挙げましょう...

```js
var pets = ['cat', 'dog', 'elephant'];

var filtered = pets.filter(function (pet) {
  return (pet !== 'elephant');
});
```

`フィルターされた` その中には `cat` と `dog` だけが残ります。

## やってみよう...

`array-filtering.js` というファイルを作成してください。

ファイルの中で、 次の配列を表す、変数 `example` を定義しましょう。

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

同様に、 `numbers.filter()` の実行結果を表す、変数 `filtered` を定義しましょう。

`.filter()` メソッドに渡す関数は、このような感じになるでしょう...

```js
function evenNumbers (number) {
  return number % 2 === 0;
}
```

`console.log()` を使って、 `フィルターされた` 配列をターミナルに出力してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting-jp verify array-filtering.js`

---
