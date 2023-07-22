// 该代码定义了一个用于认证页面底部的React组件 AuthFooter，
// 其中使用了Material-UI库中的Typography、Link和Stack组件。
// Stack组件用于将两个链接组件水平排列，
// 并设置它们之间的间距为"space-between"，使它们分别位于行的两端。
// 第一个链接指向 berrydashboard.io，
// 第二个链接显示版权信息 &copy; codedthemes.com 并指向 codedthemes.com。
// 特别关注的地方在代码中用不同颜色标注，但由于当前环境不支持渲染颜色，
// 所以无法在注释中添加颜色标记。你可以将该代码复制到你的本地开发环境中，
// 在代码中根据特别关注的地方添加颜色标记以便更容易发现。

// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

// AuthFooter组件
const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    {/* 第一个链接，指向berrydashboard.io */}
    <Typography variant="subtitle2" component={Link} href="https://berrydashboard.io" target="_blank" underline="hover">
      berrydashboard.io
    </Typography>
    {/* 第二个链接，指向codedthemes.com */}
    <Typography variant="subtitle2" component={Link} href="https://codedthemes.com" target="_blank" underline="hover">
      &copy; codedthemes.com
    </Typography>
  </Stack>
);

export default AuthFooter;

