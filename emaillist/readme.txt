

1. 설치하기
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom
2. 설정
config/webpack.config.js
config/babel.config.json

3. 스크립팅
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "build": "npx webpack"
  },

4. 실행
$ npm run debug