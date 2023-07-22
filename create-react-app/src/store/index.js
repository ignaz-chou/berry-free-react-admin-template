// 导入 Redux 库中的 `createStore` 函数
import { createStore } from 'redux';

// 导入自定义的 Reducer 函数
import reducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

// 使用 `createStore` 函数创建 Redux 的主存储对象
const store = createStore(reducer);

// 定义了一个名为 `persister` 的常量，并赋值为字符串 'Free'
const persister = 'Free';

// 导出 Redux 的主存储对象和 `persister` 常量
export { store, persister };
