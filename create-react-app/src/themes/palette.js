/**
 * 定义主题颜色的函数
 * @param {JsonObject} theme 主题定制对象
 */
export default function themePalette(theme) {
  return {
    // 主题模式
    mode: theme?.customization?.navType,
    common: {
      // 通用的黑色
      black: theme.colors?.darkPaper
    },
    primary: {
      // 主要色调浅色
      light: theme.colors?.primaryLight,
      // 主要色调主色
      main: theme.colors?.primaryMain,
      // 主要色调深色
      dark: theme.colors?.primaryDark,
      // 主要色调200
      200: theme.colors?.primary200,
      // 主要色调800
      800: theme.colors?.primary800
    },
    secondary: {
      // 次要色调浅色
      light: theme.colors?.secondaryLight,
      // 次要色调主色
      main: theme.colors?.secondaryMain,
      // 次要色调深色
      dark: theme.colors?.secondaryDark,
      // 次要色调200
      200: theme.colors?.secondary200,
      // 次要色调800
      800: theme.colors?.secondary800
    },
    error: {
      // 错误色调浅色
      light: theme.colors?.errorLight,
      // 错误色调主色
      main: theme.colors?.errorMain,
      // 错误色调深色
      dark: theme.colors?.errorDark
    },
    orange: {
      // 橙色调浅色
      light: theme.colors?.orangeLight,
      // 橙色调主色
      main: theme.colors?.orangeMain,
      // 橙色调深色
      dark: theme.colors?.orangeDark
    },
    warning: {
      // 警告色调浅色
      light: theme.colors?.warningLight,
      // 警告色调主色
      main: theme.colors?.warningMain,
      // 警告色调深色
      dark: theme.colors?.warningDark
    },
    success: {
      // 成功色调浅色
      light: theme.colors?.successLight,
      // 成功色调200
      200: theme.colors?.success200,
      // 成功色调主色
      main: theme.colors?.successMain,
      // 成功色调深色
      dark: theme.colors?.successDark
    },
    grey: {
      // 灰色调50
      50: theme.colors?.grey50,
      // 灰色调100
      100: theme.colors?.grey100,
      // 灰色调500 - 次要黑色文本
      500: theme.darkTextSecondary,
      // 灰色调600 - 标题文本
      600: theme.heading,
      // 灰色调700 - 主要黑色文本
      700: theme.darkTextPrimary,
      // 灰色调900 - 深色文本
      900: theme.textDark
    },
    dark: {
      // 深色调浅色 - 主要黑色文本
      light: theme.colors?.darkTextPrimary,
      // 深色调主色
      main: theme.colors?.darkLevel1,
      // 深色调深色
      dark: theme.colors?.darkLevel2,
      // 深色调800 - 深色背景
      800: theme.colors?.darkBackground,
      // 深色调900 - 深色纸张
      900: theme.colors?.darkPaper
    },
    text: {
      // 主要文本颜色
      primary: theme.darkTextPrimary,
      // 次要文本颜色
      secondary: theme.darkTextSecondary,
      // 深色文本颜色
      dark: theme.textDark,
      // 提示文本颜色
      hint: theme.colors?.grey100
    },
    background: {
      // 纸张背景颜色
      paper: theme.paper,
      // 默认背景颜色
      default: theme.backgroundDefault
    }
  };
}
