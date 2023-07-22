
// 代码主要作用是定义和创建一个 Material-UI 的主题（theme）对象，该主题将用于定制 WebApp 的外观和样式
import { createTheme } from '@mui/material/styles';

// 导入样式变量
import colors from 'assets/scss/_themes-vars.module.scss';

// 导入项目内其他文件的样式和样式覆盖
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * 表示 Material-UI 主题样式和结构的函数
 * @param {JsonObject} customization 自定义参数对象
 */
export const theme = (customization) => {
  // 使用导入的样式变量
  const color = colors;

  // 定义主题选项对象
  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization
  };

  // 定义主题选项的详细配置
  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption), // 使用 themePalette 函数设置主题调色板
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption) // 使用 themeTypography 函数设置主题文本样式
  };

  // 创建主题对象
  const themes = createTheme(themeOptions);

  // 添加组件样式覆盖
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
