import React from 'react';
import BreadcrumbsComponent from '../../component/breadcrumb/breadcrumb'
import Branches from '../../component/branches/branches'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'

const BranchesLayout = () => {
    return(
        <div className='dashboard-component'>
            <Header />
            <BreadcrumbsComponent />
            <Branches />
            <Footer />
        </div>
    )
}

export default BranchesLayout