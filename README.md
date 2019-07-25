# dva-cli

由于原本的dva-cli有各种各样的问题，现在基于create-react-app整理一套使用于dva的react脚手架，方便开发


# 别名
定义了 @ 作为src根目录的别名
```js
    import something from '@/container'
    import something from '@/utils'
```

# 目录
- containers - 组件
- components - 路由页面
- common - 静态资源
    - css
    - images
    - fonts
- config - 公共配置
- utils - 公共部件
- store - 状态管理
index.js 入口文件