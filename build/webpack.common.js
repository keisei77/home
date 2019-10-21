'use strice'

const path = require('path')
const fs = require('fs')
const merge = require("webpack-merge")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const productionConfig = require("./webpack.prod")
const developmentConfig = require("./webpack.dev")
const pkg = require('../package.json')

const ROOT_PATH = path.resolve(__dirname, '..')
const ENTRY_PATH = path.resolve(__dirname, '../src/js/')
const PAGES_PATH = path.resolve(__dirname, '../views/')

const entriesJs = [
  'aboutme.js',
  'bioddetails.js',
  'bioddetailslist.js',
  'biodiversity.js',
  'films.js',
  'gaoligong.js',
  'gaoligongprotect.js',
  'index.js',
  'startspecies.js',
]

const entries = (entriesArray) => {
  let jsPaths = {}
  let files = entriesArray ? entriesArray : fs.readdirSync(ENTRY_PATH)
  for (let file of files){
    if(fs.statSync(path.join(ENTRY_PATH, file)).isFile()){
      let name = path.parse(file).name
      jsPaths[name] = path.join(ENTRY_PATH, name)
    }
  }
  jsPaths.vue = 'vue'
  return jsPaths
}

const views = () => {
  let pages = []
  let files = fs.readdirSync(PAGES_PATH)
  for ( file of files ) {
    if (fs.statSync(path.join(PAGES_PATH, file)).isFile()) {
      let name = path.parse(file).name
      let ext = path.parse(file).ext
      pages.push(new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.join(PAGES_PATH, `${name}${ext}`),
        chunks: ['vue','axios','common',`${name}`],
        chunksSortMode: 'manual',
        minify: {
          collapseWhitespace: true
        }
      }))
    }
  }
  return pages
}

const generateConfig = (isProd, isCompress) => {
  let spritesConfig = {
    spritePath: "images",
    filterBy: function (image) {
      if (image.url.indexOf('/images/sprites/') === -1) {
          return Promise.reject()
      }
      return Promise.resolve()
    },
  }

  let scriptLoader = [
    {
      loader: "babel-loader",
      options: {
        plugins: isProd ? ['lodash'] : []
      },
    }
  ]

  let vueLoader = [
    {
      loader: "vue-loader",
      options: {
        loaders: {
          scss: [
            MiniCssExtractPlugin.loader,
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      }
    }
  ]

  let pugLoader = [
    {
      loader: 'pug-loader',
      exclude: /\.vue.pug$/,
      options: {
        pretty: !isProd,
      },
    },
    {
      loader: "pug-plain-loader",
    }
  ]

  let styleLoader = [
    isProd ? { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../'} }:'vue-style-loader',
    {
      loader: "css-loader",
      options: {
        minimize: true,
        sourceMap: isProd ? false : true
      }
    },
    {
      loader: "postcss-loader",
      options: {
        ident: 'postcss',
        plugins: [
          require('autoprefixer'),
          require('postcss-sprites')(spritesConfig)
        ]
      }
    },
    {
      loader: "sass-loader"
    }
  ]
  
  let imageLoader = [
    {
      loader: "url-loader",
      options: {
        name: isProd ? "[name]-[hash:5].min.[ext]" : "[name].[ext]",
        limit: 1024*10,
        outputPath: "images",
      } 
    },
    {
      loader: "img-loader"
    }
  ]

  let fontLoader = [
    {
      loader: 'url-loader',
      options: {
        name: isProd ? "[name]-[hash:5].min.[ext]" : "[name].[ext]",
        limit: 1024*5,
        outputPath: "font",
      }
    }
  ]

  return {
    mode: isProd ? 'production' : 'development',
    entry: entries(entriesJs),
    output: {
      path: path.resolve(ROOT_PATH, 'dist'),
      publicPath: './',
      filename: isProd ? "scripts/[name]-[hash:5]-boundle.js" : "scripts/[name].js",
      chunkFilename: isProd ? "scripts/[name]-[hash:5].chunk.js" : "scripts/[name].js"
    },
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, '../src'),
        'vue$': 'vue/dist/vue.esm.js',
        'vuex$': 'vuex/dist/vuex.min.js',
        'axios$': 'axios/dist/axios.min.js'
      }
    },
    module: {
      rules: [
        { test: /\.vue$/, use: vueLoader },
        { test: /\.pug$/, oneOf: pugLoader },
        { test: /\.js$/, use: scriptLoader, exclude: /(node_modules)/},
        { test: /\.(scss|css)$/, use: styleLoader },
        { test: /\.(png|jpg|jpeg|gif)$/, use: imageLoader },
        { test: /\.(eot|woff2?|ttf|svg)$/, use: fontLoader },
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: isProd ? 'styles/[name]-[hash:5].css' : "styles/[name].css",
      }),
      isCompress ? new CompressionPlugin({
        test: new RegExp(/\.(js|css)$/),
        threshold: 10240,
      }) : (() => {})
    ].concat(views())
  }
}

module.exports = env => {

  let isProd = !!env.production
  let isCompress = !!env.compress
  let config = isProd ? productionConfig : developmentConfig

  return merge(generateConfig(isProd, isCompress), config)
}
