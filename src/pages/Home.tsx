import React from 'react'
import '../style/Home.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Content from '../components/Content'

const Home: React.FC<any> = (props) => {
  return (
    <div className='home'>
      <img src='image/home.jpg' className='Homeimage' alt='' />
      <div className='foothead'>
        <Header />
        <Content className="content"/>
        <Footer />
      </div>

    </div>
  )
}

export default Home
