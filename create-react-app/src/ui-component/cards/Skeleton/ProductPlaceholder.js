// 功能和作用：
// 该代码定义了一个Skeleton组件，用于显示一个虚拟的产品卡片，用作加载时的占位符。
// 注意事项：
// 该代码定义了一个React组件ProductPlaceholder，用于显示一个加载时的产品卡片占位符。
// 代码中使用了Material-UI的相关组件和Skeleton组件，需要确保已经安装并正确导入相关依赖。
// ProductPlaceholder组件使用了自定义的MainCard组件，将content属性设置为false，并启用阴影（boxShadow）。
// 使用多层嵌套的Grid组件和Stack组件来创建复杂的网格布局和堆叠布局，方便控制占位符的排列方式。
// 使用Skeleton组件来创建矩形的骨架占位符，根据不同的需求，设置不同的variant、width和height等属性。
// ProductPlaceholder组件可以在数据加载完成之前，作为一个占位符，展示虚拟的产品卡片样式，增加用户体验。
// 导入Material-UI的相关组件和Skeleton组件
import { CardContent, Grid, Skeleton, Stack } from '@mui/material';

// 导入项目的自定义组件MainCard
import MainCard from '../MainCard';

// ===========================|| SKELETON TOTAL GROWTH BAR CHART ||=========================== //

// ProductPlaceholder组件定义，用于显示一个加载时的产品卡片占位符
const ProductPlaceholder = () => (
  // 使用自定义的MainCard组件，将content属性设置为false并启用阴影（boxShadow）
  <MainCard content={false} boxShadow>
    {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定高度 */}
    <Skeleton variant="rectangular" height={220} />
    <CardContent sx={{ p: 2 }}>
      {/* 使用Grid组件创建一个垂直方向的网格布局 */}
      <Grid container spacing={2}>
        {/* 第一个Grid item */}
        <Grid item xs={12}>
          {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定高度 */}
          <Skeleton variant="rectangular" height={20} />
        </Grid>
        {/* 第二个Grid item */}
        <Grid item xs={12}>
          {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定高度 */}
          <Skeleton variant="rectangular" height={45} />
        </Grid>
        {/* 第三个Grid item */}
        <Grid item xs={12} sx={{ pt: '8px !important' }}>
          {/* 使用Stack组件创建一个水平方向的堆叠布局，设置两个子元素的对齐方式为'align-items: center'和'justify-content: space-between' */}
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* 第一个子元素 */}
            <Skeleton variant="rectangular" height={20} width={90} />
            {/* 第二个子元素 */}
            <Skeleton variant="rectangular" height={20} width={38} />
          </Stack>
        </Grid>
        {/* 第四个Grid item */}
        <Grid item xs={12}>
          {/* 使用Stack组件创建一个水平方向的堆叠布局，设置两个子元素的对齐方式为'justify-content: space-between'和'align-items: center' */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {/* 子元素中的Grid容器 */}
            <Grid container spacing={1}>
              <Grid item>
                {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定宽度和高度 */}
                <Skeleton variant="rectangular" height={20} width={40} />
              </Grid>
              <Grid item>
                {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定宽度和高度 */}
                <Skeleton variant="rectangular" height={17} width={20} />
              </Grid>
            </Grid>
            {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定宽度和高度 */}
            <Skeleton variant="rectangular" height={32} width={47} />
          </Stack>
        </Grid>
      </Grid>
    </CardContent>
  </MainCard>
);

// 导出ProductPlaceholder组件
export default ProductPlaceholder;
