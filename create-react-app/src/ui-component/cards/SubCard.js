// 功能和作用：
// 该组件是一个自定义的子卡片组件，支持自定义标题、内容和样式。
// 注意事项：
// 该代码是一个React组件，用于自定义的子卡片。
// 代码中使用了Material-UI的相关组件，需要确保已经安装并正确导入相关依赖。
// forwardRef函数用于支持将ref转发到内部的Card组件，以便在外部可以直接使用ref引用该组件。
// 注意使用了sx属性来设置自定义样式，支持在外部传入样式对象。
// 特别关注<Card>组件的使用，它作为容器包含了子卡片的所有内容，并根据传入的props设置边框、阴影等样式。
// 特别关注<CardHeader>和<CardContent>组件的使用，用于显示子卡片的标题和内容。
// 特别关注在标题和内容之间的<Divider>组件，用于创建标题和内容之间的分割线。
// 特别关注':hover'伪类的使用，设置了子卡片悬浮时的阴影样式。
// 代码中的...others用于将传入的未指定的props应用到<Card>组件，实现更灵活的使用方式。
// darkTitle属性用于判断是否使用不同大小的标题字体，如果设置为true，则使用<Typography variant="h4">，否则使用<Typography variant="h5">。
// 导入所需的依赖模块
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// 导入Material-UI的相关组件
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

// SubCard组件定义，使用了forwardRef函数来支持转发ref
const SubCard = forwardRef(
  ({ children, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }, ref) => {
    const theme = useTheme();

    // 返回组件的JSX结构
    return (
      // 使用Card组件作为容器，并根据传入的props设置相关样式
      <Card
        ref={ref}
        sx={{
          border: '1px solid', // 固定设置边框为1px宽度的实线
          borderColor: theme.palette.primary.light, // 使用主题颜色设置边框颜色
          ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)' // 固定设置悬浮时的阴影样式
          },
          ...sx // 使用传入的sx属性来设置自定义样式
        }}
        {...others}
      >
        {/* 显示卡片标题和右侧操作 */}
        {/* 根据darkTitle属性来判断是否使用不同大小的标题字体 */}
        {!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />}
        {darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

        {/* 标题和内容之间的分割线 */}
        {title && (
          <Divider
            sx={{
              opacity: 1, // 固定设置分割线的不透明度为1
              borderColor: theme.palette.primary.light // 使用主题颜色设置分割线的边框颜色
            }}
          />
        )}

        {/* 卡片内容 */}
        {content && (
          <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
            {children}
          </CardContent>
        )}
        {/* 如果content为false，则直接渲染子元素，不使用CardContent包裹 */}
        {!content && children}
      </Card>
    );
  }
);

// 定义SubCard组件的prop类型约束
SubCard.propTypes = {
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  sx: PropTypes.object,
  contentSX: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

// 默认设置content属性为true，以便在没有传入content属性时，默认渲染CardContent。
SubCard.defaultProps = {
  content: true
};

// 导出SubCard组件
export default SubCard;
