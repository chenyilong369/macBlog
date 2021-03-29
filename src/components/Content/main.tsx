import React, {useState} from 'react'
import { menu } from '../../config/config'
import Article from './article'

const Main: React.FC<any> = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }
  return (
    <div className='main'>
      <div className='sidebar'>
        {menu().map((item) => {
          return (
            <div className='sidebarItem'>
              <div className='iconfont leftIcon'>&#xe611;</div>
              <div>{item}</div>
            </div>
          )
        })}
      </div>
      <div className='wrapper'>
        <div className='contentMain'>
          <div className='pages'>
            <div className='pageborder' onClick={handleClick}>
              <div className='iconfont iconSize'>&#xebb1;</div>
              <div className='fileName'>111</div>
            </div>
          </div>
        </div>
      </div>
      {
        isOpen? <Article setIsOpen={setIsOpen}/> : null
      }
    </div>
  )
}

export default Main
