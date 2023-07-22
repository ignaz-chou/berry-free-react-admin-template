/**
 * 密码验证器，用于登录页面
 */
import value from 'assets/scss/_themes-vars.module.scss';

// 判断密码是否包含数字
const hasNumber = (password) => new RegExp(/[0-9]/).test(password);

// 判断密码是否包含大小写字母的混合
const hasMixed = (password) => new RegExp(/[a-z]/).test(password) && new RegExp(/[A-Z]/).test(password);

// 判断密码是否包含特殊字符
const hasSpecial = (password) => new RegExp(/[!#@$%^&*)(+=._-]/).test(password);

// 根据密码强度设置颜色
export const strengthColor = (strengthCount) => {
  if (strengthCount < 2) return { label: '弱', color: value.errorMain };
  if (strengthCount < 3) return { label: '较弱', color: value.warningDark };
  if (strengthCount < 4) return { label: '一般', color: value.orangeMain };
  if (strengthCount < 5) return { label: '较好', color: value.successMain };
  if (strengthCount < 6) return { label: '强', color: value.successDark };
  return { label: '弱', color: value.errorMain };
};

// 密码强度指示器
export const strengthIndicator = (password) => {
  let strengthCount = 0;
  if (password.length > 5) strengthCount += 1; // 密码长度超过5位，增加强度计数
  if (password.length > 7) strengthCount += 1; // 密码长度超过7位，再次增加强度计数
  if (hasNumber(password)) strengthCount += 1; // 包含数字，增加强度计数
  if (hasSpecial(password)) strengthCount += 1; // 包含特殊字符，增加强度计数
  if (hasMixed(password)) strengthCount += 1; // 包含大小写字母混合，增加强度计数
  return strengthCount;
};
