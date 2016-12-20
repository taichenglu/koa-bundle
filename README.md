# koa2 后端项目打包成单个 js 文件

（express 的打包可以看[这里](https://github.com/taichenglu/docker-node-bundle)）

用 webpack 把 koa2 项目打包成单个文件。

## 第一坑：不支持 async

koa2 中间件支持三种写法，参考[官方文档](https://github.com/koajs/koa/blob/v2.x/Readme.md)。

* common function
* async function
* generatorFunction

可以用 common function 的写法，虽然用不了拉风的 async/await，但好处也有，省去了对 babel 的依赖。

## 第二坑：any-promise

这个库在打包的时候会报错，看了下它的 package.json，发现 devDependencies 依赖的库并没有 install。然后发现其实并不需要依赖 any-promise，直接用 node 6 及以上的版本就可以了。

编辑文件：

```sh
node_modules/koa-compose/index.js
```

注释掉开头的一行

```sh
const Promise = require('any-promise')
```

## 使用

1、安装
```sh
npm install
```

2、编辑以下文件，注释 const Promise = require('any-promise')
```sh
vim node_modules/koa-compose/index.js
```

3、打包
```sh
npm run build
```

4、运行
```sh
npm run deploy
```

5、访问
```sh
http://localhost:3000
```
