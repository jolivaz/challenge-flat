import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const UsersContext = createContext()

const UsersProvider = (props) => {
    const [user, setUser] = useState([])
    const [userNotExist, setUserNotExist] = useState(false)
    const [repositories, setRepositories] = useState([])
    const [userActive, setUserActive] = useState(false)
    const [searchUser, setSearchUser] = useState([])

    useEffect(() => {
        if (searchUser.length > 0) {
            const getUsers = async() => {
                // Get detail for the selected user
                await axios.get(`https://api.github.com/users/${searchUser}`)
                .then((response) => {
                    setUserNotExist(false)
                    setUser(response.data)
                })
                .catch(() => {
                    setUserNotExist(true)
                    setUser([])
                    console.warn('user does not exist')
                })
            }
            getUsers()
        }
    }, [searchUser])

    return (
        <UsersContext.Provider
            value={{
                user,
                userActive,
                repositories,
                userNotExist,
                setUser,
                setSearchUser,
                setUserActive
            }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider
