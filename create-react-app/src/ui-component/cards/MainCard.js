// 功能和作用：
// 该组件是一个自定义的主要卡片组件，支持自定义标题、内容、阴影和边框等样式。
// 注意事项：
// 该代码是一个React组件，用于自定义的主要卡片。
// 代码中使用了Material-UI的相关组件，需要确保已经安装并正确导入相关依赖。
// forwardRef函数用于支持将ref转发到内部的Card组件，以便在外部可以直接使用ref引用该组件。
// 注意使用了sx属性来设置自定义样式，支持在外部传入样式对象。
// 注意在返回的JSX结构中使用了JSX语法糖（Fragment），用于将多个子元素组合在一个组件中。
// 特别关注<Card>组件的使用，它作为容器包含了卡片的所有内容，并根据传入的props设置边框、阴影等样式。
// 特别关注<CardHeader>和<CardContent>组件的使用，用于显示卡片的标题和内容。
// headerSX常量用于自定义<CardHeader>组件的样式，将右侧操作的margin-right设置为0。
// 特别关注':hover'伪类的使用，根据boxShadow属性来设置卡片的悬浮阴影样式。
// 代码中的...others用于将传入的未指定的props应用到<Card>组件，实现更灵活的使用方式。
// 导入所需的依赖模块
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// 导入Material-UI的相关组件
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// constant
// 定义了一个名为headerSX的常量，用于自定义CardHeader组件的样式
const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 }
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

// MainCard组件定义，使用了forwardRef函数来支持转发ref
const MainCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();

    // 返回组件的JSX结构
    return (
      // 使用Card组件作为容器，并根据传入的props设置相关样式
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none', // 根据border属性来设置边框样式
          borderColor: theme.palette.primary[200] + 25, // 根据主题颜色设置边框颜色
          ':hover': {
            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit' // 根据boxShadow属性来设置阴影样式
          },
          ...sx // 使用传入的sx属性来设置自定义样式
        }}
      >
        {/* 显示卡片标题和右侧操作 */}
        {title && (
          <CardHeader sx={headerSX} title={darkTitle ? <Typography variant="h3">{title}</Typography> : title} action={secondary} />
        )}

        {/* 标题和内容之间的分割线 */}
        {title && <Divider />}

        {/* 卡片内容 */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {/* 如果content为false，则直接渲染子元素，不使用CardContent包裹 */}
        {!content && children}
      </Card>
    );
  }
);

// 定义MainCard组件的prop类型约束
MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

// 导出MainCard组件
export default MainCard;
