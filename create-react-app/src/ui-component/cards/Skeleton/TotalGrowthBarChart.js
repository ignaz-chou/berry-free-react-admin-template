// 功能和作用：
// 该代码定义了一个Skeleton组件，用于显示一个虚拟的总增长柱状图卡片，用作加载时的占位符。
// 注意事项：
// 该代码定义了一个React组件TotalGrowthBarChart，用于显示一个加载时的总增长柱状图卡片占位符。
// 代码中使用了Material-UI的相关组件和Skeleton组件，需要确保已经安装并正确导入相关依赖。
// TotalGrowthBarChart组件使用了常量gridSpacing，需要确保在项目中已经定义并导入。
// 使用多层嵌套的Grid组件来创建复杂的网格布局，方便控制占位符的排列方式。
// 使用Skeleton组件来创建文本和矩形的骨架占位符，根据不同的需求，设置不同的variant、width和height等属性。
// TotalGrowthBarChart组件可以在数据加载完成之前，作为一个占位符，展示虚拟的总增长柱状图样式，增加用户体验。
// 导入Material-UI的相关组件和Skeleton组件
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// 导入项目的常量（gridSpacing）
import { gridSpacing } from 'store/constant';

// ==============================|| SKELETON TOTAL GROWTH BAR CHART ||============================== //

// TotalGrowthBarChart组件定义，用于显示一个加载时的总增长柱状图卡片占位符
const TotalGrowthBarChart = () => (
  <Card>
    <CardContent>
      {/* 使用Grid组件创建一个垂直方向的网格布局 */}
      <Grid container spacing={gridSpacing}>
        {/* 第一个Grid item */}
        <Grid item xs={12}>
          {/* 使用Grid组件创建一个水平方向的网格布局，设置两个子元素的对齐方式为'align-items: center'和'justify-content: space-between' */}
          <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
            {/* 第一个子元素 */}
            <Grid item xs zeroMinWidth>
              {/* 使用Grid组件创建一个垂直方向的网格布局 */}
              <Grid container spacing={1}>
                {/* 子Grid item */}
                <Grid item xs={12}>
                  {/* 使用Skeleton组件来显示一个文本的骨架占位符 */}
                  <Skeleton variant="text" />
                </Grid>
                {/* 子Grid item */}
                <Grid item xs={12}>
                  {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定高度 */}
                  <Skeleton variant="rectangular" height={20} />
                </Grid>
              </Grid>
            </Grid>
            {/* 第二个子元素 */}
            <Grid item>
              {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定宽度和高度 */}
              <Skeleton variant="rectangular" height={50} width={80} />
            </Grid>
          </Grid>
        </Grid>
        {/* 第二个Grid item */}
        <Grid item xs={12}>
          {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定高度 */}
          <Skeleton variant="rectangular" height={530} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

// 导出TotalGrowthBarChart组件
export default TotalGrowthBarChart;
