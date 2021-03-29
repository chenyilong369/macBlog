import React, {useState} from 'react'
import Header from './header'

const Article: React.FC<any> = (props: any) => {
  const {setIsOpen} = props
  return (
    <div className='article' >
      <Header setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Article

