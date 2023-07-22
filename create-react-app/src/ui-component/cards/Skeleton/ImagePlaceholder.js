// 功能和作用：
// 该代码定义了一个Skeleton组件，用于显示一个矩形的骨架占位符，用作图片加载时的占位符。
// 注意事项：
// 该代码定义了一个React组件ImagePlaceholder，用于显示一个矩形的骨架占位符，用作图片加载时的占位符。
// 代码中使用了Material-UI的Skeleton组件，需要确保已经安装并正确导入相关依赖。
// ImagePlaceholder组件接受所有传入的props，并将其传递给<Skeleton>组件，因此可以使用ImagePlaceholder组件的方式来定制占位符的样式和动画效果。
// 通过设置
// 导入Skeleton组件
import Skeleton from '@mui/material/Skeleton';

// ==============================|| SKELETON IMAGE CARD ||============================== //

// ImagePlaceholder组件定义，用于显示一个图片加载时的骨架占位符
const ImagePlaceholder = ({ ...others }) => <Skeleton variant="rectangular" {...others} animation="wave" />;

// 导出ImagePlaceholder组件
export default ImagePlaceholder;
