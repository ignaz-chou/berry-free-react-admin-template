// 导入项目中的配置信息
import config from 'config';

// 导入状态管理的 action 类型
import * as actionTypes from './actions';

// 定义初始状态
export const initialState = {
  isOpen: [],                 // 存储当前打开的菜单项的 id，用于控制菜单的展开状态
  defaultId: 'default',      // 默认菜单项的 id，用于指定默认展开的菜单项
  fontFamily: config.fontFamily,    // 字体样式，默认使用项目配置中的字体样式
  borderRadius: config.borderRadius,  // 边框样式，默认使用项目配置中的边框样式
  opened: true               // 控制菜单的打开状态，默认为 true 表示菜单是打开的
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

// 自定义的 Reducer 函数，根据不同的 action 类型对应用的状态进行修改
const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      // 当接收到 `MENU_OPEN` 类型的 action 时，修改状态中的 `isOpen` 属性，将当前打开的菜单项 id 存入数组中
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      // 当接收到 `SET_MENU` 类型的 action 时，修改状态中的 `opened` 属性，表示菜单的打开状态
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      // 当接收到 `SET_FONT_FAMILY` 类型的 action 时，修改状态中的 `fontFamily` 属性，表示字体样式
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      // 当接收到 `SET_BORDER_RADIUS` 类型的 action 时，修改状态中的 `borderRadius` 属性，表示边框样式
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      // 默认情况下，不做任何修改，返回当前状态
      return state;
  }
};

// 导出自定义的 Reducer 函数
export default customizationReducer;
