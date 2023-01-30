# Denki_Club_Journal
# 概要
学園祭で公開した、部誌です。コロナ禍ということもあり、手渡しではなく電子データで公開する運びとなりました。

# 使用言語
- html/css
- JavaScript(JQuery)

# 工夫した点など
部誌ということで、本の様なレイアウトを意識しました。ページをめくる動作は<a href="https://tympanus.net/Tutorials/FullscreenBookBlock/" target="_blank">FullscreenBookBlock</a>というJQueryプラグインをベースとして、ページスキップ機能、表紙裏表紙を実装しました。
また、各ページのコンテンツを個別にhtmlファイルで定義し、加えてload.lib.jsにタイトルと著者、load.jsでそれらをページのインデックスごとに読み込むことで、汎用性を持たせました。
