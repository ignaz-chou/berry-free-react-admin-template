// 导入 `react` 库中的 `lazy` 函数，用于懒加载组件
import { lazy } from 'react';

// 导入项目中的一些自定义组件和布局
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// 使用 `Loadable` 函数对懒加载组件进行包装
// `Loadable` 函数用于处理组件的异步加载，确保在需要的时候才会加载组件，以优化应用的性能。

// dashboard 页面的路由配置
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities 页面的路由配置
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample-page 页面的路由配置
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

// 定义 `MainRoutes` 路由配置对象
const MainRoutes = {
  // 定义路径为根路径 '/'
  path: '/',
  // 设置该路径对应的布局组件为 `MainLayout`
  element: <MainLayout />,
  children: [
    // 子路由配置项
    {
      // 定义子路由路径为根路径 '/'
      path: '/',
      // 设置该路径对应的组件为 `DashboardDefault`
      element: <DashboardDefault />
    },
    {
      // 定义子路由路径为 '/dashboard'
      path: 'dashboard',
      // 子路由可以嵌套，这里配置了一个子路由
      children: [
        {
          // 定义子路由路径为 '/dashboard/default'
          path: 'default',
          // 设置该路径对应的组件为 `DashboardDefault`
          element: <DashboardDefault />
        }
      ]
    },
    {
      // 定义子路由路径为 '/utils'
      path: 'utils',
      children: [
        {
          // 定义子路由路径为 '/utils/util-typography'
          path: 'util-typography',
          // 设置该路径对应的组件为 `UtilsTypography`
          element: <UtilsTypography />
        }
      ]
    },
    {
      // 定义子路由路径为 '/utils'
      path: 'utils',
      children: [
        {
          // 定义子路由路径为 '/utils/util-color'
          path: 'util-color',
          // 设置该路径对应的组件为 `UtilsColor`
          element: <UtilsColor />
        }
      ]
    },
    {
      // 定义子路由路径为 '/utils'
      path: 'utils',
      children: [
        {
          // 定义子路由路径为 '/utils/util-shadow'
          path: 'util-shadow',
          // 设置该路径对应的组件为 `UtilsShadow`
          element: <UtilsShadow />
        }
      ]
    },
    {
      // 定义子路由路径为 '/icons'
      path: 'icons',
      children: [
        {
          // 定义子路由路径为 '/icons/tabler-icons'
          path: 'tabler-icons',
          // 设置该路径对应的组件为 `UtilsTablerIcons`
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      // 定义子路由路径为 '/icons'
      path: 'icons',
      children: [
        {
          // 定义子路由路径为 '/icons/material-icons'
          path: 'material-icons',
          // 设置该路径对应的组件为 `UtilsMaterialIcons`
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      // 定义子路由路径为 '/sample-page'
      path: 'sample-page',
      // 设置该路径对应的组件为 `SamplePage`
      element: <SamplePage />
    }
  ]
};

// 导出 `MainRoutes` 路由配置对象
export default MainRoutes;
