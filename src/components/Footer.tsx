import React from 'react'
import '../style/footer.scss'

const Footer:React.FC = (props) => {
  return (
    <div className="footer">
      <div className="menu">
        <div className="content">
          <div className="iconBox">
            <div className="iconfont icon">&#xe63a;</div>
          </div>
          <div className="iconBox">
            <div className="iconfont icon">&#xe611;</div>
          </div>
          <div className="iconBox">
            <div className="iconfont icon">&#xe690;</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer