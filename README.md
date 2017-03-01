#Small Business Back Office
_[切换中文版本](./README_CN.md)_  
> * Build by webpack, with the lib of ReactJs Redux  
* The codes are in format of ES6(Babel will do the translation during the build)  
* The code Style is checked by the ESLint  
* And we build express supported mock API, so that there is no dependence for back end 


## How to Build project
### Environment Preparation
node version >=4.3.0 <5.0.0 || >=5.10  
IDE for Javascript

###Command to build
1. `npm install`  
2. `npm run build` or `npm start`  


##Babel
###Config file
location: [.babelrc](./.babelrc)  
Plugins https://github.com/gaearon/react-transform-hmr  


##Mock-api


##Add ESLint

###config file
For more rules information [ESLint rules](http://eslint.cn/docs/rules/)  
location: [.eslintrc](./.eslintrc)  
config code: 0 = off, 1 = warn, 2 = error

###IntelliJ/Webstorm config for Javascript styles
>Settings path: `Editor->Code Style-> JavaScript`  
`Tab and Indents` set to 4  
`Spaces`  enable ES6 `import/export braces`  
Or  
Simply use EditorConfig plugin for your IntelliJ/Webstorm

