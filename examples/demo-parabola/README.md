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

## Compile

```
npm start
```

## Build

```
npm run build
```

## bug fix

`react-parabola-animation` 组件 unmounted 之后 进行 setState 会报错，主要原因是 react 组件已经从 DOM 中移除,但组件的 setState 还未执行完

具体 bug 解析可查阅我的另一篇文章 [react 组件在 unmounted 后进行 setState 操作的报错处理](https://github.com/lulujianglab/blog/issues/39)

## example

![image](https://user-images.githubusercontent.com/26807227/50537267-6f321b00-0b98-11e9-89f9-3f4c5b992402.png)

![image](https://user-images.githubusercontent.com/26807227/50537270-748f6580-0b98-11e9-8ca3-7b7608a7dd9e.png)

![image](https://user-images.githubusercontent.com/26807227/50537240-3b56f580-0b98-11e9-9eb7-cedd718bb3a4.png)

![image](https://user-images.githubusercontent.com/26807227/50537239-372ad800-0b98-11e9-8e9b-dee490f16705.png)
