ex05 : Component - Lifecycle

01. Class Component Lifecycle
  1) Lifecycle I : mount
    constructor
    getDerivedStateFromProps : props로 받아온 값을 state에 동기화한다.[react v16.3]
    render
    * componentDidMount : 컴포넌트 생성을 마치고 랜더링 작업이 끝난 후
  2) Lifecycle II : update
    getDerivedStateFromProps : props로 받아온 값을 state에 동기화한다.[react v16.3]
    shoudComponentUpdate : props나 state을 변경했을 때, 리렌더링 여부를 결정한다.
    render
    * componentDidUpdate : DOM 업데이트가 끝난 직후 호출된다. DOM 작업이 가능하다.
  3) Lifecycle III : Unmount
    componentWillUnmount : 컴포넌트를 DOM에서 제거하기 전
    02. Alternative(내용) : Function Component Lifecycle : useEffect hook

1. 설치하기
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types
2. 설정
config/webpack.config.js
config/babel.config.json

3. 스크립팅
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },

4. 실행
$ npm run debug src=(01|02|03|04...) 