// 导入 Material-UI 的 LinearProgress 组件和 styled 函数
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

// 定义样式
const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%'
});

// ==============================|| LOADER ||============================== //
// 定义 Loader 组件
const Loader = () => (
  // 使用 styled 包装的 div 来设置 Loader 的样式
  <LoaderWrapper>
    {/* 使用 Material-UI 的 LinearProgress 组件来实现进度条 */}
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

// 导出 Loader 组件
export default Loader;
