# YUMEMI フロントエンドコーディング試験

## 使用技術

- `Next.js`

  中間APIとしてNext API Routesを使用したかったため。

- `react`
- `recharts`
- `TypeScript`
- `vanilla extract`

> あくまでcssの記述力を測る趣旨に留まる

ということだったので
できるだけ生cssに近く型厳格な`vanilla extract`を使用

- `jest`

  テストに使用

- `storybook`

  コンポーネントの確認に使用

- `eslint`
- `prettier`
- `lint-staged`
- `cspell`
- `markuplint`

  コードの整形に使用

- `commit lint`

  コミットメッセージの統一目的

- `husky`

  コードチェックを開発時に実行

- `hygen`

  コンポーネントの自動生成

## script

`dev` 開発環境の起動

`build` ビルド

`start` ビルドしたものを起動

`test` テスト監視

`new:ui` `ui`コンポーネントの自動生成

`new:model` `model`コンポーネントの自動生成

`new:page` `page`コンポーネントの自動生成

`storybook` storybookの起動
