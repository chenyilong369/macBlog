import React from 'react'
import '../style/content.scss'
import Header from './Content/header'
import Main from './Content/main'

const Content: React.FC<any> = (props: any) => {
  return (
    <div className='content'>
      <div className='border'>
        <Header/>
        <Main/>
      </div>
    </div>
  )
}

export default Content
