import React, { useContext } from 'react';
import BreadcrumbsComponent from '../../component/breadcrumb/breadcrumb'
import Repositories from '../../component/repositories/repositories'
import { RepositoriesContext } from '../../context/repositoriesContext'
import CircularProgress from '@mui/material/CircularProgress'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import './dashboard.scss'


const DashboardLayout = () => {
    const {loaderActive} = useContext(RepositoriesContext)
    return(
        <div className='dashboard-component'>
            <Header />
            <BreadcrumbsComponent />
            {
                loaderActive
                ? <div className='dashboard-component_loader'><CircularProgress /></div>
                :  <Repositories />
            }
            <Footer />
        </div>
    )
}

export default DashboardLayout