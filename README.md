# React-TypeScript-Demo

[小邵教你玩转 Typescript-ts 版 React 全家桶脚手架](https://react.ctolib.com/iamswr-ts_react_demo_20181207.html)

# 1.安装 TypeScript

npm i typescript -g
tsc hello.ts 执行编译
tsc --init 初始化 ts 配置文件 生成了一个 tsconfig.json

# 使用@type 进行类型定义

npm install @types/react --save

# React 相关

- react // react 的核心文件
- @types/react // 声明文件
- react-dom // react dom 的操作包
- @types/react-dom
- react-router-dom // react 路由包
- @types/react-router-dom
- react-redux
- @types/react-redux
- redux-thunk // 中间件
- @types/redux-logger
- redux-logger // 中间件
- connected-react-router

# webpack 相关

- webpack // webpack 的核心包
- webpack-cli // webapck 的工具包
- webpack-dev-server // webpack 的开发服务
- html-webpack-plugin // webpack 的插件，可以生成 index.html 文件

# typescript 相关

- typescript // ts 的核心包
- ts-loader // 把 ts 编译成指定语法比如 es5 es6 等的工具，有了它，基本不需要 babel 了，因为它会把我们的代码编译成 es5
- source-map-loader // 用于开发环境中调试 ts 代码

# React 计数器

[官方文档](https://redux.js.org/)
