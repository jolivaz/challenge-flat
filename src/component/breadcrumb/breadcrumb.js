import React, { useContext } from 'react'
import { RepositoriesContext } from '../../context/repositoriesContext'
import { UsersContext } from '../../context/userContext'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { useNavigate } from "react-router-dom"
import './breadcrumb.scss'

const BreadcrumbsComponent = () => {
    const {repositoryActive} = useContext(RepositoriesContext)
    const {user, setUserActive} = useContext(UsersContext)
    const navigate = useNavigate()

    const handleClick = (event, url) => {
        event.preventDefault()
        setUserActive(true)
        navigate(url)
    }
    return(
        <div className='breadcrumb-component' >
            <Breadcrumbs aria-label="breadcrumb">
                <Typography 
                    color="text.primary" 
                    onClick={e => handleClick(e, `/dashboard:${user.login}`)}>Repositorios</Typography>
                {
                    repositoryActive
                    ?   <Typography color="text.primary">{repositoryActive}</Typography>
                    : null
                }
            </Breadcrumbs>
        </div>
    )
}

export default BreadcrumbsComponent
