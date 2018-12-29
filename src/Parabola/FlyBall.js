import React, { PureComponent } from 'react'
import Ball from './Ball'

class FlyBall extends PureComponent {
  constructor(props) {
    super(props)

    this.createFlyBall = this.createFlyBall.bind(this)

    this.state = {
      balls: props.balls
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      balls: newProps.balls
    })
  }

  createFlyBall(item) {
    const { target, curvature, speed, changeFlyBallCount } = this.props
    return (
      <Ball
        {...item.position}
        target={target}
        key={item.id}
        id={item.id}
        curvature={curvature}
        speed={speed}
        changeFlyBallCount={changeFlyBallCount} 
      />
    )
  }

  render() {
    const { balls } = this.state
    return (
      <div>
        {
          balls.map(this.createFlyBall)
        }
      </div>
    )
  }
}

FlyBall.defaultProps = {
  curvature: 0.004,
  speed: 120
}

export default FlyBall
