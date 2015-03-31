---

# 配列の値にアクセスする

配列の要素は添え字を使ってアクセスできます。

添え字は0から配列の長さ - 1 までの数です。

以下に例を示します...

```js
	var pets = ['cat', 'dog', 'rat'];

	console.log(pets[0]);
```

上記のコードは配列 `pets` の最初の要素 ー 文字列 `cat` を表示します。

配列の要素は角括弧表記を使うことでしかアクセスできません。

ドット表記は使用できません。

有効な表記

```js
	console.log(pets[0]);
```

無効な表記

```
	console.log(pets.1);
```

## やってみよう:

`accessing-array-values.js` ファイルを作りましょう。

ファイルの中で、次の配列 `food` を定義します。
```js 
var food = ['apple', 'pizza', 'pear'];
```


`console.log()` を使って、配列の `2` 番目の値をターミナルに出力してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting-jp verify accessing-array-values.js`

---
