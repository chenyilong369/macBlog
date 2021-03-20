import React from 'react'
import '../style/content.scss'

const Content: React.FC<any> = (props: any) => {
  return (
    <div className='content'>
      <div className='border'>
        <div className='header'>
          <div className='left'>
            <div className='item red'></div>
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
                <span className="icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
