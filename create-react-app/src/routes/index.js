// 导入了 `react-router-dom` 库中的 `useRoutes` 函数
import { useRoutes } from 'react-router-dom';

// 导入了两个路由配置文件
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// 定义了一个名为 `ThemeRoutes` 的函数组件
export default function ThemeRoutes() {
  // 使用 `useRoutes` 函数并传入两个路由配置，返回一个路由组件。
  // `useRoutes` 函数的作用是根据传入的路由配置，匹配当前 URL 并渲染对应的组件。
  // 在这里，`MainRoutes` 和 `AuthenticationRoutes` 是两个路由配置对象，它们分别定义了不同的路由规则和对应的组件。
  // 最终，`ThemeRoutes` 组件会根据当前 URL 匹配到的路由，渲染对应的组件。
  return useRoutes([MainRoutes, AuthenticationRoutes]);
}
