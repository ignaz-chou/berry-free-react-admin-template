// 功能和作用：
// 该代码定义了一个Skeleton组件，用于显示一个虚拟的总收入卡片，用作加载时的占位符。
// 注意事项：
// 该代码定义了一个React组件TotalIncomeCard，用于显示一个加载时的总收入卡片占位符。
// 代码中使用了Material-UI的相关组件和Skeleton组件，需要确保已经安装并正确导入相关依赖。
// 使用Card组件创建一个带有内边距（p: 2）的卡片容器。
// 使用List组件来创建一个垂直方向的列表。
// 使用ListItem组件来创建一个列表项，设置alignItems为'center'和disableGutters为true，并指定py属性为0，即去除列表项的默认内边距。
// 使用ListItemAvatar组件创建列表项中的头像，并使用Skeleton组件来显示一个矩形的骨架占位符，指定宽度和高度。
// 使用ListItemText组件来显示列表项的文本内容，设置py属性为0，即去除文本的默认内边距，同时使用Skeleton组件来显示矩形的骨架占位符，指定高度。
// 导入Material-UI的相关组件和Skeleton组件
import { Card, List, ListItem, ListItemAvatar, ListItemText, Skeleton } from '@mui/material';

// ==============================|| SKELETON - TOTAL INCOME DARK/LIGHT CARD ||============================== //

// TotalIncomeCard组件定义，用于显示一个加载时的总收入卡片占位符
const TotalIncomeCard = () => (
  <Card sx={{ p: 2 }}>
    {/* 使用List组件来创建一个垂直方向的列表 */}
    <List sx={{ py: 0 }}>
      {/* 使用ListItem组件来创建一个列表项，设置alignItems为'center'和disableGutters为true，并指定py属性为0 */}
      <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
        {/* 使用ListItemAvatar组件创建列表项中的头像 */}
        <ListItemAvatar>
          {/* 使用Skeleton组件来显示一个矩形的骨架占位符，指定宽度和高度 */}
          <Skeleton variant="rectangular" width={44} height={44} />
        </ListItemAvatar>
        {/* 使用ListItemText组件来显示列表项的文本内容，指定py属性为0 */}
        <ListItemText sx={{ py: 0 }} primary={<Skeleton variant="rectangular" height={20} />} secondary={<Skeleton variant="text" />} />
      </ListItem>
    </List>
  </Card>
);

// 导出TotalIncomeCard组件
export default TotalIncomeCard;
