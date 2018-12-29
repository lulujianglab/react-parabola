**Create a collection of animation effects component**

## Install

```sh
npm i react-parabola-animation
```

## Usage

```js
import Active from 'react-parabola-animation'

render() {
  // ......
  return (
    <div className="App">
      // ......
      <Active element={e} fadeOut={this.handleFadeOut} {...ballInfo} />
    </div>
  )
}
```

1. element - 获取点击收藏的事件对象
2. fadeOut - 挂载或卸载 `react-parabola-animation` 组件的函数
3. ballInfo : { `ballsTarget`: { `sx` - X轴 , `sy` - Y轴 } - 目标位置坐标, `curvature` - 运动抛物线曲率 }


