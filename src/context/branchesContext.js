import React, { useContext, createContext, useState, useEffect } from "react"
import { RepositoriesContext } from './repositoriesContext'
import { UsersContext } from './userContext'
import axios from "axios"

export const BranchesContext = createContext()

const BranchesProvider = (props) => {
    const {repositoryActive} = useContext(RepositoriesContext)
    const {user} = useContext(UsersContext)
    const [branches, setBranches] = useState([])

    useEffect(() => {
        // Get list of branches available for the selected project
        const getBranches = async() => {
            const dataBranches = await axios.get(`https://api.github.com/repos/${user.login}/${repositoryActive}/branches`)
            if (dataBranches) {
                setBranches(dataBranches.data)
            } else {
                console.warn('Branches does not exist')
            } 
        }
        getBranches()
    }, [repositoryActive])

    return (
        <BranchesContext.Provider
            value={{
                branches
            }}>
            {props.children}
        </BranchesContext.Provider>
    )
}

export default BranchesProvider
