const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development', //development、production、noneの3種類。  実行モードにより、コードの圧縮具合が異なります。developmentの時、改行空白、コメントはそのまま。productionの時は改行空白コメントは削除されます
  entry: './src/js/app.js',//エントリーポイントの設定。各モジュールを読み込む設定を書く場所。 （エントリーポイント：モジュール間の依存関係の解析を始める地点のこと。ここに各モジュールのインポート宣言を記述していく。）webpackはエントリーポイントを起点として、import命令を辿って依存するファイルを取得してバンドルします。今回は'./src/js/app.js'がエントリーポイント。'./src/js/app.js'にメインの処理を記述していきます
  output: {//バンドル結果の出力設定。
    path: `${__dirname}/dist`,//出力先のディクレクトリを指定
    filename: 'bundle.js',//出力時のファイル名
    publicPath: '/dist'//webpackのプラグインが利用する。本番のビルド時にコンパイルしたファイル内のURLを変更する
  },
  devServer:{
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `${__dirname}/dist`
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundled_style.css"
    })
  ],  
};