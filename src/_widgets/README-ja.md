# Widgets

エンティティや機能のような下位レベルのユニットの組み合わせから生まれた自己完結型のUIブロック。
このレイヤーは、エンティティのUIに残されたスロットを、他のエンティティや機能からのインタラクティブ要素で埋める方法を提供します。そのため、このレイヤーにはビジネスロジックを含まず、機能に保持することが一般的です。このレイヤーの各スライスには、すぐに使えるUIコンポーネントや、ジェスチャー、キーボード操作などの非ビジネスロジックが含まれることがあります。
しかし、場合によってはこのレイヤーにビジネスロジックを含める方が便利なこともあります。通常、それはウィジェットがかなりインタラクティブであり、その中のビジネスロジックが他の場所で使用されない場合に起こります（例：インタラクティブなデータテーブル）。
ソーシャルネットワークの場合

- ポストカード
- ユーザープロフィールヘッダー（アクション付き）

## Example

| `ui` | `model` | `lib` | `api` |
| --- | --- | --- | --- |
| エンティティと機能を組み合わせた自己完結型のUIブロック。エラーハンドリングやローディング状態も含むことができます。 | 必要に応じたインフラデータのストレージ | 非ビジネスのインタラクション（例：ジェスチャー）やブロックがページ上で機能するために必要なその他のコード | 通常は使用しないが、ネストされたルーティングコンテキスト（例：[Remix](https://remix.run/)）でデータローダーを含むことがあります。 |

## Source

[Feature-Sliced Design Documentation](https://feature-sliced.design/), Accessed on 19th May 2024
