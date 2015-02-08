---

# オブジェクトのプロパティ

オブジェクトにはプロパティ(オブジェクトに含まれるキーと値)があって、アクセスしたり操作したりできます。
そのためには、配列と非常に似た方法を使います。

次の例のようにブラケットを使うのです...

```js
var example = {
  pizza: 'yummy'
};

console.log(example['pizza']);
```

上記のコードは、 `'yummy'` とターミナルに出力します。

別のやりかたとして、ドット記法を使って同じ結果を得ることもできます...

```js
example.pizza;

example['pizza'];
```

この二つの行は、両方とも `yummy` という値を返します。

## やってみよう...

`object-properties.js` というファイルを作成してください。

そのファイルの中で、 `food` という変数をこのように定義してください...

```js
var food = {
  types: 'only pizza'
};
```

`console.log()` を使って、 `food` オブジェクトの `types` プロパティをターミナルに出力してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify object-properties.js`

---
