import { Suspense } from 'react';

// 项目导入
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

// 定义一个高阶函数 Loadable
const Loadable = (Component) => (props) => (
  // 使用 React 的 Suspense 组件，fallback 属性指定加载组件时的临时展示内容，这里使用了自定义的 Loader 组件
  <Suspense fallback={<Loader />}>
    {/* 将 props 传递给要加载的组件 Component */}
    <Component {...props} />
  </Suspense>
);

// 导出 Loadable 函数
export default Loadable;
