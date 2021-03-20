import React, { useState, useEffect } from 'react'
import '../style/header.scss'

const Header: React.FC = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let timerId = setInterval(() => {
      tick()
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  })

  const tick = () => {
    setDate(new Date())
  }

  return (
    <div className='header'>
      <div className='iconfont apple'>&#xe63a;</div>
      <div className="right">
        <div className='iconfont icon'>&#xe690;</div>
        <div className='iconfont icon'>&#xe611;</div>
        <div className='time'>{date.toLocaleTimeString()}</div>
      </div>
    </div>
  )
}

export default Header
