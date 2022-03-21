ex02 : Component Styling(Working with UI)

01. Inline Styling
02. normal CSS(css-loader-option : {module:false})
    - $ npm run debug src=03 css-modules=false
03. normal CSS(css-loader-option : {module:true})
    - $ npm run debug src=03 css-modules=true
04. CSS Module((css-loader-option : {module:true}))
    - $ npm run debug src=03 css-modules=true
05. SACC $ SCSS
    ----------------------------------------------
    CSS in JS(Style Component), Less & Styleable
    ----------------------------------------------
06. Font Awesome: Working with UI I
07. React Modal: Working with UI II

1. 설치하기
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types

2. 설정
webpack.config.js
babel.config.json

3. 스크립팅
  "scripts": {
    "debug": "npx webpack serve --progress --mode development --env",
    "build": "npx webpack"
  },

4. 실행
$ npm run debug src=(01|02|03|04...) css-modules=((true|false))