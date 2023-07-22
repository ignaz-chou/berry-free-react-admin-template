// 导入所需的模块
import { useSelector } from 'react-redux';

// 导入 Material-UI 组件
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// 导入路由模块
import Routes from 'routes';

// 导入默认主题
import themes from 'themes';

// 导入项目内部模块
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //

const App = () => {
  // 使用 useSelector 钩子来获取 Redux 中 customization 的状态
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      {/* 使用 ThemeProvider 来设置 Material-UI 主题 */}
      <ThemeProvider theme={themes(customization)}>
        {/* 使用 CssBaseline 来重置全局样式 */}
        <CssBaseline />
        {/* 使用 NavigationScroll 组件包裹 Routes 组件，用于处理导航滚动效果 */}
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
