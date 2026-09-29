# Portfolio — Mizuho Matsuda

松田瑞穂のデザインポートフォリオサイトです。ビルド不要のシンプルなHTML/CSS/JSで構成しています。

🔗 公開URL: https://mizuho-works.github.io/portfolio/

## 構成

```
index.html      トップページ(Hero / Works / About / Contact を1ページに集約)
css/style.css   スタイル
js/script.js    モバイルメニュー・スクロールリビール・トップへ戻るボタンの制御
images/         画像を置く場合はここに配置
```

## 画像について

現在 `index.html` 内の作品・プロフィール画像は [placehold.jp](https://placehold.jp) のダミー画像です。実際の画像に差し替える場合は、`images/` フォルダに画像を置き、`index.html` 内の該当する `<img src="...">` をそのパスに書き換えてください。

## ローカルでの確認方法

ビルド不要なので `index.html` を直接ブラウザで開いても確認できますが、相対パスや将来的な機能追加を考えると簡易サーバー経由での確認を推奨します。

```bash
python -m http.server 5173
```

上記実行後、`http://localhost:5173/` を開いてください。

## 公開(GitHub Pages)

このリポジトリの Settings → Pages で、Source を `main` ブランチ / `/ (root)` に設定すると `index.html` がそのまま公開されます。
