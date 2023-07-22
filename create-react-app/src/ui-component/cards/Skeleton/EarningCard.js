// 功能和作用：
// 该代码定义了一个Skeleton组件，用于显示一个虚拟的卡片，用作加载时的占位符。
// 注意事项：
// 该代码定义了一个React组件EarningCard，用于显示一个加载时的占位符卡片。
// 代码中使用了Material-UI的相关组件，需要确保已经安装并正确导入相关依赖。
// 使用Skeleton组件来创建骨架占位符，可以根据需要设置不同的variant、width和height等属性来适应不同的占位需求。
// Grid组件用于创建网格布局，方便控制占位符的排列方式。
// sx属性用于设置my: 2样式，用于设置上下边距为2的单位，可以根据需要调整样式。
// EarningCard组件可以在数据加载完成之前，作为一个占位符，展示虚拟的卡片样式，增加用户体验。
// 导入Material-UI的相关组件和Skeleton组件
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// ==============================|| SKELETON - EARNING CARD ||============================== //

// EarningCard组件定义，用于显示一个加载时的占位符卡片
const EarningCard = () => (
  <Card>
    <CardContent>
      {/* 使用Grid组件创建一个垂直方向的网格布局 */}
      <Grid container direction="column">
        {/* 第一个Grid item */}
        <Grid item>
          {/* 使用Grid组件创建一个水平方向的网格布局，并设置两个子元素的对齐方式为'justify-content: space-between' */}
          <Grid container justifyContent="space-between">
            {/* 第一个子元素 */}
            <Grid item>
              {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定宽度和高度 */}
              <Skeleton variant="rectangular" width={44} height={44} />
            </Grid>
            {/* 第二个子元素 */}
            <Grid item>
              {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定宽度和高度 */}
              <Skeleton variant="rectangular" width={34} height={34} />
            </Grid>
          </Grid>
        </Grid>
        {/* 第二个Grid item */}
        <Grid item>
          {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定高度 */}
          <Skeleton variant="rectangular" sx={{ my: 2 }} height={40} />
        </Grid>
        {/* 第三个Grid item */}
        <Grid item>
          {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定高度 */}
          <Skeleton variant="rectangular" height={30} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

// 导出EarningCard组件
export default EarningCard;
