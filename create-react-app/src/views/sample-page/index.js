// 功能和作用：
// 该代码定义了一个示例页面组件(SamplePage)，用于展示一个标题为"示例卡片"的主卡片(MainCard)和一段Lorem ipsum文本。

// 导入Material-UI的Typography组件
import { Typography } from '@mui/material';

// 导入项目中的ui-component/cards/MainCard组件
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| 示例页面 ||============================== //

// 示例页面组件定义，用于展示一个示例页面，其中包含一个标题为"示例卡片"的主卡片(MainCard)和一段Lorem ipsum文本
const SamplePage = () => (
  <MainCard title="示例卡片">
    {/* 使用Typography组件来显示Lorem ipsum文本，设置variant为"body2"，即正文样式 */}
    <Typography variant="body2">
    这段文本是一个常用于印刷、排版和设计领域的假文本，
    用于演示和展示排版样式和布局，而不是实际意义上的句子。
    因为它没有实际意义，所以通常被称为&quot;乱数文本&quot;或&quot;占位文本&quot;，
    用于填充空白内容 用于填充空白内容 用于填充空白内容 用于填充空白内容 用于填充空白内容 用于填充空白内容
    </Typography>
  </MainCard>
);

// 导出示例页面组件
export default SamplePage;
