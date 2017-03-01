#Small Business Back Office  
_[Switch English version](./README.md)_  
>* 构建工具为webpack, 允许库为ReactJs Redux  
>* 代码风格为ES6, 打包时候经Babel转换  
>* 用ESLint作为代码风格检查, 目前使用eslint-config-airbnb规则, 并去掉少许  
>* 使用express作为模拟API, 这样开发前端时可以不必有服务端依赖

## 如何构建项目
### 开发环境准备
node version >=4.3.0 <5.0.0 || >=5.10  
平时习惯使用的JavascriptIDE

###构建命令
1. `npm install`  
2. `npm run build` or `npm start`  


##Babel
###配置文件
传送门: [.babelrc](./.babelrc)  
插件 https://github.com/gaearon/react-transform-hmr  


##Mock-api


##ESLint
>ESLint是目标是提供一个插件化的javascript代码检测工具
项目将其作为静态代码对于编码风格的检测工具
###配置文件
延伸信息 [ESLint rules](http://eslint.cn/docs/rules/)  
传送门: [.eslintrc](./.eslintrc)  
config code: 0 = 关闭, 1 = 警告, 2 = 报错

###IntelliJ/Webstorm 配置 Javascript styles
>Settings 路径: `Editor->Code Style-> JavaScript`  
`Tab and Indents` 设置成 4  
`Spaces`  enable ES6 `import/export braces`  
如果你是使用IntelliJ/Webstorm, 只要在IDE中使用EditorConfig插件即可 

