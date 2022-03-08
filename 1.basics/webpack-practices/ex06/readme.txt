CSS/SASS/SCSS 모듈 번들링하기

1. 설치 패키지
npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. image loader 설정
    output: {
        ......
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module:{
        rules:[{
            test:/\.(png|gif|jpe?g|svg|icon|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    }

3. 개발 서버 실행
npm start
