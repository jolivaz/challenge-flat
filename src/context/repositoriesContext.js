import React, { useContext, createContext, useState, useEffect } from "react"
import { UsersContext } from './userContext'
import axios from "axios"

export const RepositoriesContext = createContext()

const RepositoriesProvider = (props) => {
    const {user, userActive} = useContext(UsersContext)
    const [loaderActive, setLoaderActive] = useState(false)
    const [repositories, setRepositories] = useState([])
    const [repositoryActive, setRepositoryActive] = useState([])

    useEffect(() => {
        // Get list of repositories available for the selected user
        const getRepositories = async() => {
            setLoaderActive(true)
            const dataRepositories = await axios.get(`https://api.github.com/users/${user.login}/repos`)
            if (dataRepositories) {
                setRepositories(dataRepositories.data)
                setTimeout(() => {
                    setLoaderActive(false)
                }, 500)
            } else {
                console.warn('repositories does not exist')
            } 
        }
        getRepositories()
    }, [userActive])

    return (
        <RepositoriesContext.Provider
            value={{
                repositories,
                repositoryActive,
                setRepositoryActive,
                loaderActive
            }}>
            {props.children}
        </RepositoriesContext.Provider>
    )
}

export default RepositoriesProvider
