import React from 'react'
import FlyBall from './FlyBall'
import styles from './index.less'

class Active extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // ballsTarget: { sx: 120, sy: 460 },
      // 抛物小球,包含小球起始点坐标以及独一无二的小球id（时间戳） 
      balls: []
    }
  }

  componentDidMount() {
    const {element} = this.props
    const e = element
    // console.log('eee:', e.pageY, e.pageX, e);
    if(e){
      // 触发抛物线事件
      this.showFlyBall(e)
    }
  }

  componentWillUnmount() {
    const { fadeOut } = this.props
    const status = false // 状态为false代表组件已卸载
    fadeOut(status)
  }

  // 购物车清除小球
  changeFlyBallCount(id) {
    const { fadeOut } = this.props
    const status = true // status为true 挂载组件
    fadeOut(status)
    // console.log(`ball: ${id} hidden`)
    const { balls } = this.state
    for (let i=0; i<balls.length; i+=1) {
      if(balls[i].id === id) {
        // 进入购物车后清除小球
        balls.splice(i, 1)
        break
      }
    }
    this.setState({
      balls: Object.assign([], balls)
    })
  }

  // 记录小球的起始位置和时间戳
  showFlyBall(e) {
    const { balls } = this.state
    const newball ={
      id: new Date().getTime(),
      position: {
        x: e.pageX,
        y: e.pageY
      }
    }
    balls.push(newball)
    this.setState({
      balls: Object.assign([], balls),
    })
  }

  render() {
    const { ballsTarget, curvature} = this.props
    const { balls } = this.state
    return (
      <main>
        <FlyBall
          changeFlyBallCount={this.changeFlyBallCount.bind(this)}
          balls={balls}
          target={ballsTarget}
          curvature={curvature}
          speed={120}
        />
        {/* 盒子 */}
        <div className={styles.target} />
      </main>
    )
  }
}
export default Active
