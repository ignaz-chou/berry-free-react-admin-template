// 导入 `react` 库中的 `lazy` 函数，用于懒加载组件
import { lazy } from 'react';

// 导入项目中的一些自定义组件和布局
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// 使用 `Loadable` 函数对懒加载组件进行包装
// `Loadable` 函数用于处理组件的异步加载，确保在需要的时候才会加载组件，以优化应用的性能。

// 登录选项3的页面路由配置
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

// 定义 `AuthenticationRoutes` 路由配置对象
const AuthenticationRoutes = {
  // 定义路径为根路径 '/'
  path: '/',
  // 设置该路径对应的布局组件为 `MinimalLayout`
  element: <MinimalLayout />,
  children: [
    // 子路由配置项
    {
      // 定义子路由路径为 '/pages/login/login3'
      path: '/pages/login/login3',
      // 设置该路径对应的组件为 `AuthLogin3`
      element: <AuthLogin3 />
    },
    {
      // 定义子路由路径为 '/pages/register/register3'
      path: '/pages/register/register3',
      // 设置该路径对应的组件为 `AuthRegister3`
      element: <AuthRegister3 />
    }
  ]
};

// 导出 `AuthenticationRoutes` 路由配置对象
export default AuthenticationRoutes;
