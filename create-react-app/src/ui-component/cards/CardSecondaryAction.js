// 功能和作用：
// 该组件是用于卡片的次要操作部分，支持显示一个提示工具栏，其中包含一个可点击的按钮或图标。
// 注意事项:
// 该代码是一个React组件，用于卡片的次要操作部分。
// 代码中使用了Material-UI的相关组件，需要确保已经安装并正确导入相关依赖。
// 注意在返回的JSX结构中使用了JSX语法糖（Fragment），用于将多个子元素组合在一个组件中。
// 特别关注<Tooltip>组件的使用，它为组件提供了一个提示工具栏，用于显示传入的title属性，如果未设置则默认显示'Reference'。
// 特别关注<ButtonBase>组件的使用，它用于创建一个可点击的按钮。
// 注意<Avatar>组件的使用，它自定义了一个带有SVG图标的按钮，可根据传入的icon参数渲染不同的图标。
// 代码中的SVG图标使用了Material-UI的theme.palette.primary颜色，确保主题中定义了相关的颜色属性。
// 导入所需的依赖模块
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { ButtonBase, Link, Tooltip } from '@mui/material';

// 导入项目中自定义的组件
import Avatar from '../extended/Avatar';

// ==============================|| CARD SECONDARY ACTION ||============================== //

// CardSecondaryAction组件定义
const CardSecondaryAction = ({ title, link, icon }) => {
  const theme = useTheme();

  // 返回组件的JSX结构
  return (
    // 使用Tooltip组件来提供提示工具栏，如果没有设置title属性，则默认显示'Reference'。
    <Tooltip title={title || 'Reference'} placement="left">
      {/* 使用ButtonBase组件来创建可点击的按钮 */}
      <ButtonBase disableRipple>
        {/* 如果没有传入icon参数，则渲染自定义的SVG图标 */}
        {!icon && (
          <Avatar component={Link} href={link} target="_blank" alt="MUI Logo" size="badge" color="primary" outline>
            {/* 下面是自定义的SVG图标内容 */}
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path d="M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z" fill={theme.palette.primary[800]} />
                <path
                  d="M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z"
                  fill={theme.palette.primary.main}
                />
                <path d="M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z" fill={theme.palette.primary[800]} />
                <path
                  d="M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z"
                  fill={theme.palette.primary.main}
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="300" height="238.3" fill="white" transform="translate(100 131)" />
                </clipPath>
              </defs>
            </svg>
          </Avatar>
        )}
        {/* 如果传入了icon参数，则直接渲染该参数作为Avatar组件的内容 */}
        {icon && (
          <Avatar component={Link} href={link} target="_blank" size="badge" color="primary" outline>
            {icon}
          </Avatar>
        )}
      </ButtonBase>
    </Tooltip>
  );
};

// 定义CardSecondaryAction组件的prop类型约束
CardSecondaryAction.propTypes = {
  icon: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string
};

// 导出CardSecondaryAction组件
export default CardSecondaryAction;
