import React, { Component } from 'react'
import './index.css'
import Active from 'react-parabola'

require('./font.js')

class App extends Component {
  state = {
    valueArr:  [], //点中
    e: null, // 获取点击收藏的事件对象
    pageY: null, // 目的地y坐标
    showBall: false // Active组件初始化不显示
  }

  onclickIcon = (e) => {
    e.persist()
    const { valueArr } = this.state 
    const item = parseInt(e.currentTarget.getAttribute('index'), 10)
    const items = valueArr.slice()
    const index = items.indexOf(item)
    if(index === -1) {
      // Active组件已卸载 status为false
      this.setState(() => ({
        e,
        pageY: e.pageY,
        showBall: true // 重新挂载组件
      }))
      items.push(item)
    } else {
      items.splice(index,1)
    }
    this.setState({
      valueArr: items
    })
  }

  handleFadeOut = (status) => {
    // status为true 确认组件已经挂载好了再执行setState
    if(status) {
      setTimeout(() => {
        this.setState({
          showBall: false // 卸载组件
        })
      }, 300)
    }
  }

  render() {
    const { e, pageY, showBall, valueArr } = this.state
    const arr = [1, 2, 3, 4, 5]

    const ballInfo = {
      ballsTarget: { sx: 100, sy: pageY+290},
      curvature: 0.0004
    }

    return (
      <div className="App">
        <ul className="list">
          {
            arr.map((item, index) => {
              return (
                <li key={item} className="item">
                  <svg className="icon" aria-hidden="true" index={index} onClick={this.onclickIcon}>
                    <use xlinkHref={valueArr.indexOf(index) === -1? "#icon-wujiaoxing" : "#icon-wujiaoxing1"} />
                  </svg>
                </li>
              )
            })
          }
        </ul>
        <div className="box" />
        {showBall?
          <Active element={e} fadeOut={this.handleFadeOut} {...ballInfo} />
          :
          ''
        }
      </div>
    )
  }
}

export default App
