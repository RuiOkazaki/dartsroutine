# Shared

プロジェクトやビジネスの具体的な内容から切り離された独立したモジュール、コンポーネント、抽象化。注意: ユーティリティの捨て場として扱わないでください！
このレイヤーは、他のレイヤーとは異なりスライスで構成されず、直接セグメントで構成されます。

- UIキット
- APIクライアント
- ブラウザAPIを操作するコード

## Example

| `ui` | `model` | `lib` | `api` |
| --- | --- | --- | --- |
| UIキット | 通常は使用しない | 複数の関連ファイルからなるユーティリティモジュール。個別のヘルパーを使用する場合は、[`lodash-es`](https://www.npmjs.com/package/lodash-es)のようなユーティリティライブラリを検討してください。 | 認証やキャッシングなどの追加機能を備えた基本的なAPIクライアント。 |

## Source

[Feature-Sliced Design Documentation](https://feature-sliced.design/), Accessed on 19th May 2024
