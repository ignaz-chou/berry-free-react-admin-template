// 代码功能和作用：Avatar组件用于显示用户头像，可以根据传入的属性进行定制化。

// 引入React组件
import PropTypes from 'prop-types';

// 引入material-ui样式和组件
import { useTheme } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';

// ==============================|| AVATAR ||============================== //

// 定义Avatar组件，接收一些属性参数
const Avatar = ({ color, outline, size, sx, ...others }) => {
  // 使用material-ui提供的useTheme()钩子，获取主题对象
  const theme = useTheme();

  // 定义变量colorSX，根据color和outline属性，设置头像颜色和背景颜色
  const colorSX = color && !outline && { color: theme.palette.background.paper, bgcolor: `${color}.main` };

  // 定义变量outlineSX，根据outline属性，设置头像边框颜色和背景颜色
  const outlineSX = outline && {
    color: color ? `${color}.main` : `primary.main`,
    bgcolor: theme.palette.background.paper,
    border: '2px solid',
    borderColor: color ? `${color}.main` : `primary.main`
  };

  // 定义变量sizeSX，根据size属性，设置头像的尺寸大小
  let sizeSX = {};
  switch (size) {
    case 'badge':
      sizeSX = {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5)
      };
      break;
    case 'xs':
      sizeSX = {
        width: theme.spacing(4.25),
        height: theme.spacing(4.25)
      };
      break;
    case 'sm':
      sizeSX = {
        width: theme.spacing(5),
        height: theme.spacing(5)
      };
      break;
    case 'lg':
      sizeSX = {
        width: theme.spacing(9),
        height: theme.spacing(9)
      };
      break;
    case 'xl':
      sizeSX = {
        width: theme.spacing(10.25),
        height: theme.spacing(10.25)
      };
      break;
    case 'md':
      sizeSX = {
        width: theme.spacing(7.5),
        height: theme.spacing(7.5)
      };
      break;
    default:
      sizeSX = {};
  }

  // 使用material-ui的MuiAvatar组件，传入定制化的样式属性sx和其他属性others
  return <MuiAvatar sx={{ ...colorSX, ...outlineSX, ...sizeSX, ...sx }} {...others} />;
};

// 定义Avatar组件接收的属性类型，方便进行类型检查
Avatar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.string,
  sx: PropTypes.object
};

// 导出Avatar组件
export default Avatar;
