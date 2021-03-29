import React from 'react'

const Header: React.FC<any> = (props: any) => {
  const {setIsOpen} = props
  return (
    <div className='header'>
      <div className='left'>
        <div className='item red' onClick={() => setIsOpen(false)}></div>
        <div className='item green'></div>
        <div className='item yellow'></div>
        <div className='returnOrGo'>
          <div className='borderGo'>{'<'}</div>
          <div className='borderGo'>{'>'}</div>
        </div>
      </div>
      <div className='right'>
        <div className='iconfont search borderRight'>&#xe721;</div>
        <div className='under'>
          <div className='iconfont borderRight underRight'>&#xe62f;</div>
          <div className='borderRight underRight'>
            <span className='icon'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
