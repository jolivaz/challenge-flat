import React, { useContext, useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { UsersContext } from './../../context/userContext'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import './search.scss'

const Search = () => {
    const {setSearchUser} = useContext(UsersContext)
    const [ user, setUser ] = useState('')

    const handleSearchUser = (e) => {
        e.preventDefault()
        setSearchUser(user)
    }
    return(
        <div className='flat-component-search'>
            <Box sx={{ '& > :not(style)': { m: 1 } }} className='flat-component-search_input'>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                    Nombre del usuario Github
                    </InputLabel>   
                    <Input
                    onKeyDown={e => e.key === 'Enter' ? handleSearchUser(e) : null}
                    onChange={e => setUser(e.target.value)}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <SearchIcon onClick={e => handleSearchUser(e)}/>
            </Box>
        </div>
    )
}

export default Search