import React from 'react'
import CardUser from '../../component/cardUser/cardUser'
import Header from '../../component/header/header'
import Search from '../../component/search/search'
import Footer from '../../component/footer/footer'
import './home.scss'

const HomeLayout = () => {
    return(
        <div className='flat-home'>
            <Header />
            <div className='flat-home_form'>
                <Search />
                <CardUser />
            </div>
            <Footer />
        </div>
    )
}

export default HomeLayout