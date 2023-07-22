//这个组件可以通过不同的 type 属性值（'slide', 'scale', 'rotate'）实现滑动、缩放和旋转的动画效果，
//也可以通过 direction 属性来指定滑动方向。它使用 motion 组件来支持动画，
//并使用 useCycle 钩子来实现循环动画。你可以通过传递不同的参数来定制你的按钮动画。

// 导入 PropTypes，用于进行属性类型检查
import PropTypes from 'prop-types';

// 导入 forwardRef 和 motion，用于支持 ref 和动画效果
import { forwardRef } from 'react';
import { motion, useCycle } from 'framer-motion';

// ==============================|| ANIMATION BUTTON ||============================== //

// 定义 AnimationButton 组件
const AnimationButton = forwardRef(({ children, type, direction, offset, scale }, ref) => {
  let offset1;
  let offset2;
  switch (direction) {
    case 'up':
    case 'left':
      offset1 = offset;
      offset2 = 0;
      break;
    case 'right':
    case 'down':
    default:
      offset1 = 0;
      offset2 = offset;
      break;
  }

  // 使用 useCycle 钩子来创建循环动画效果
  const [x, cycleX] = useCycle(offset1, offset2);
  const [y, cycleY] = useCycle(offset1, offset2);

  switch (type) {
    case 'rotate':
      // 旋转动画效果
      return (
        <motion.div
          ref={ref}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
            repeatDelay: 0
          }}
        >
          {children}
        </motion.div>
      );
    case 'slide':
      // 滑动动画效果
      if (direction === 'up' || direction === 'down') {
        return (
          <motion.div ref={ref} animate={{ y: y !== undefined ? y : '' }} onHoverEnd={() => cycleY()} onHoverStart={() => cycleY()}>
            {children}
          </motion.div>
        );
      }
      return (
        <motion.div ref={ref} animate={{ x: x !== undefined ? x : '' }} onHoverEnd={() => cycleX()} onHoverStart={() => cycleX()}>
          {children}
        </motion.div>
      );

    case 'scale':
    default:
      // 缩放动画效果（默认）
      if (typeof scale === 'number') {
        scale = {
          hover: scale,
          tap: scale
        };
      }
      return (
        <motion.div ref={ref} whileHover={{ scale: scale?.hover }} whileTap={{ scale: scale?.tap }}>
          {children}
        </motion.div>
      );
  }
});

// 属性类型检查
AnimationButton.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.number,
  type: PropTypes.oneOf(['slide', 'scale', 'rotate']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  scale: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

// 默认属性值
AnimationButton.defaultProps = {
  type: 'scale',
  offset: 10,
  direction: 'right',
  scale: {
    hover: 1,
    tap: 0.9
  }
};

export default AnimationButton;


