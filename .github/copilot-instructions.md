# Copilot Instructions

## プロジェクト概要

ToDo アプリ（Web アプリケーション）。

- バックエンド: FastAPI（Python）
- フロントエンド: Tailwind CSS ＋ Alpine.js（CDN 読み込み）
- データ保存: SQLite（Python 標準の sqlite3）

詳細は `docs/企画書.md` を参照すること。

## ディレクトリ構成

```
.
├── app/          # FastAPI ソースコード
├── docs/
│   ├── 企画書.md
│   ├── 要件定義/  # 要件定義ドキュメント（複数ファイル）
│   └── 設計/     # 設計ドキュメント（複数ファイル）
└── .github/
    └── copilot-instructions.md
```

- Python（FastAPI）のソースコードは `app/` に置く
- ドキュメントはすべて `docs/` に置き、マークダウン（.md）形式で作成する
