// 功能和作用：
// 该代码定义了一个BajajAreaChartCard组件，用于显示一个面积图卡片，展示Bajaj Finery的收入数据和利润数据。
// 注意事项：
// 该代码定义了一个React组件BajajAreaChartCard，用于显示一个面积图卡片，展示Bajaj Finery的收入数据和利润数据。
// 代码中使用了Material-UI的相关组件和样式钩子，以及第三方模块ApexCharts和react-apexcharts，需要确保已经安装并正确导入相关依赖。
// 使用Redux的useSelector钩子获取Redux store中的customization状态，其中navType表示导航栏的类型。
// 使用useTheme样式钩子获取当前主题，并从中提取橙色（orangeDark）。
// 使用useEffect钩子，在navType或orangeDark发生变化时更新支持图表的选项。
// 使用Card组件创建一个面积图卡片容器，并设置背景颜色为主题的次要色中的浅色（'secondary.light'）。
// 使用Grid组件创建一个垂直方向的网格布局，包含标题和收入数据的显示区域，设置内边距和颜色。
// 使用Typography组件来显示Bajaj Finery的标题、收入数据和利润数据，设置不同的variant和颜色。
// 最后，渲染面积图表，使用了react-apexcharts的Chart组件，并将chartData传递给它。
// 导入React和React-Redux的相关模块
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// 导入Material-UI的相关组件和样式钩子
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';

// 导入第三方模块
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// 导入项目的chart-data数据
import chartData from './chart-data/bajaj-area-chart';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

// BajajAreaChartCard组件定义，用于显示一个面积图卡片，展示Bajaj Finery的收入数据和利润数据
const BajajAreaChartCard = () => {
  // 使用useTheme样式钩子获取当前主题
  const theme = useTheme();

  // 使用useSelector钩子获取Redux store中的customization状态
  const customization = useSelector((state) => state.customization);
  const { navType } = customization;

  // 获取主题色中的橙色（orangeDark）
  const orangeDark = theme.palette.secondary[800];

  // 使用useEffect钩子，在navType或orangeDark发生变化时更新支持图表的选项
  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: {
        theme: 'light'
      }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, [navType, orangeDark]);

  // 渲染组件
  return (
    <Card sx={{ bgcolor: 'secondary.light' }}>
      {/* 使用Grid组件创建一个垂直方向的网格布局，设置内边距和颜色 */}
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        {/* 第一个Grid item */}
        <Grid item xs={12}>
          {/* 使用Grid组件创建一个水平方向的网格布局，设置两个子元素的对齐方式为'align-items: center'和'justify-content: space-between' */}
          <Grid container alignItems="center" justifyContent="space-between">
            {/* 第一个子元素 */}
            <Grid item>
              {/* 使用Typography组件显示Bajaj Finery的标题，设置颜色 */}
              <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
                Bajaj Finery
              </Typography>
            </Grid>
            {/* 第二个子元素 */}
            <Grid item>
              {/* 使用Typography组件显示收入数据，设置颜色 */}
              <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                $1839.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* 第二个Grid item */}
        <Grid item xs={12}>
          {/* 使用Typography组件显示利润数据，设置颜色 */}
          <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }}>
            10% Profit
          </Typography>
        </Grid>
      </Grid>
      {/* 渲染面积图表 */}
      <Chart {...chartData} />
    </Card>
  );
};

// 导出BajajAreaChartCard组件
export default BajajAreaChartCard;
