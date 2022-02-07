import React from 'react'
import BreadcrumbsComponent from '../../component/breadcrumb/breadcrumb'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'
import Pulls from '../../component/pulls/pulls'

const PullsLayout = () => {
    return(
        <div className='flat-component-pulls'>
            <Header />
            <BreadcrumbsComponent />
            <Pulls />
            <Footer />
        </div>
    )
}

export default PullsLayout