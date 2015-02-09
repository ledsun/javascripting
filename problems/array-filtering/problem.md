---

# 配列のフィルター

配列の操作方法にはさまざまなものがあります。

よくやる処理として、配列をフィルターして、ある値だけ取り出すというのがあります。

フィルターをするためには、 `.filter()` メソッドを使います。

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

そのファイルの中で、 `numbers` という名前の変数を定義して、この配列を参照させます...

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

同様に、 `filtered` という名前の変数を定義して、 `numbers.filter()` の実行結果を参照させます。

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
