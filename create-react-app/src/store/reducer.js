// 导入 Redux 库中的 `combineReducers` 函数
import { combineReducers } from 'redux';

// 导入自定义的 Reducer 函数
import customizationReducer from './customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

// 使用 `combineReducers` 函数将多个 Reducer 合并成一个根 Reducer
const reducer = combineReducers({
  // 在这里定义了一个名为 `customization` 的属性，并将 `customizationReducer` 作为对应的 Reducer
  customization: customizationReducer
});

// 导出根 Reducer
export default reducer;
