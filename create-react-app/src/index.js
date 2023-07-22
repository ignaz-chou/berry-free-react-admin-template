// 导入所需的模块
import { createRoot } from 'react-dom/client';

// 导入第三方库
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// 导入项目内部模块
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';

// 导入样式和资源
import 'assets/scss/style.scss';
import config from './config';

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// 使用React的根渲染函数createRoot来将组件渲染到页面上
root.render(
  <Provider store={store}>
    {/* 使用BrowserRouter组件来启用基于浏览器的路由 */}
    <BrowserRouter basename={config.basename}>
      <App />
    </BrowserRouter>
  </Provider>
);

// 如果你希望你的应用程序能够离线运行并更快地加载，你可以将unregister()改为register()
// 了解有关service workers的更多信息：https://bit.ly/CRA-PWA
serviceWorker.unregister();
