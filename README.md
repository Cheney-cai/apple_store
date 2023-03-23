安装依赖： npm install 
项目启动：npm start（切换到master分支）


技术框架：
1.采用的是React函数式组件+hooks
2.配置了基础的路由，首页由路由访问
3.状态管理工具采用的是@reduxjs/toolkit
4.所有组件均采用统一出口导出
5.滚动插件采用的是better-scroll插件，但时间原因下拉加载更多数据功能还没实现
6.二次封装了网络请求（axios）request类,通过new的方式请求网络数据
7.使用 craco 插件类配置weabpack 别名等
