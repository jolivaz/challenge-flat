import React, { useEffect, useContext, useState } from 'react'
import { RepositoriesContext } from '../../context/repositoriesContext'
import CircularProgress from '@mui/material/CircularProgress'
import { UsersContext } from '../../context/userContext'
import notAvailable from '../../assets/notfound.png'
import Pull from './pull/pull'
import axios from "axios"
import './pulls.scss'

const Pulls = () => {
    const [pullsList, setPullsList] = useState([])
    const [loader, setLoader] = useState(false)
    const {repositoryActive} = useContext(RepositoriesContext)
    const {user} = useContext(UsersContext)
    useEffect(() => {
        const getPulls = async() => {
            setLoader(true)
            const dataPulls = await axios.get(`https://api.github.com/repos/${user.login}/${repositoryActive}/pulls`)
            if (dataPulls) {
                setTimeout(() => {
                    setPullsList(dataPulls.data)
                    setLoader(false)
                },500)
            } else {
                console.warn('user does not exist')
            } 
        }
        getPulls()
    }, [])
    return(
        <div className='pulls-component'>
            {
                loader
                ? <CircularProgress />
                :
                <div>
                    <h2>Pull requests</h2>
                    <div className='pulls-component_list'>
                        {
                            pullsList.length > 0
                            ? pullsList.map(pull => (
                                <Pull pull={pull}/>
                            ))
                            : <div className='not-available'>
                            <p>No hay Pulls disponibles</p>
                            <img src={notAvailable} />
                        </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Pulls