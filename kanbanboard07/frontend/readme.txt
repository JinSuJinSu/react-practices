ex01 : Property

01. props[property]
    1) 컴포넌트 데이터
    2) 부모에서 자식으로 전달된다
      - Component Communication(컴포넌트간의 통신), Data Flow
      - Top -> Down 
    3) 자식 컴포넌트에서 변경 불가
    4) 부모가 소유한다

02. FoodList src/01 : 클래스 컴포넌트
03. FoodList src/02 : Data Flow(Top->Down) : 클래스 컴포넌트
04. FoodList src/03 : Data Flow(Top->Down) : 함수 컴포넌트
05. FoodList src/04 : Validation

1. 설치하기
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types react-addons-update

2. 설정
webpack.config.js
babel.config.json

3. 스크립팅
  "scripts": {
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "npx webpack --config config/webpack.config.js --mode production",
    "build:backend": "cd ../backend && mvn clean package",
    "dev": "",
    "dev:frontend": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "dev:backend": "cd ../backend && mvn spring-boot:run"
  },

4. 실행
$ npm run debug src-01
npx webpack serve --progress --mode development --env src=02