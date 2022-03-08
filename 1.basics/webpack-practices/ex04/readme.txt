CSS/SASS/SCSS 모듈 번들링하기

1. 설치 패키지
npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader

2. css loader 설정
    module:{
        rules:[{
            test: /\.css$/i,
            use:['style-loader','css-loader']
        }]
    },


3. 개발 서버 실행
npm start
