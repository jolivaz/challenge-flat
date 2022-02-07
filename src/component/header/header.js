import React, { useContext } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { UsersContext } from './../../context/userContext'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem'
import logo from './../../assets/logo.png'
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import './header.scss'

const Header = () => {
    const {user, setUser, setUserActive, userActive} = useContext(UsersContext)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const navigate = useNavigate()
    const open = Boolean(anchorEl)
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleCloseSession = e => {
        e.preventDefault()
        navigate('/');
        setUserActive(false)
        setUser([])
    }

    return(
        <div className='flat-component-header'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={8} bg='transparent'>
                        <img className='flat-component-header_logo' src={logo} name='logo' />
                    </Grid>
                    <Grid item xs={4}>
                        <div className='flat-component-header_user'>
                            {
                                user.login && userActive
                                ? 
                                <div>
                                    <div className='flat-component-header_user_name' onClick={handleOpen}>
                                        <p>{user.login}</p>
                                        <ArrowDropDownIcon />
                                    </div>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}>
                                        <MenuItem onClick={e => handleCloseSession(e)}>Salir</MenuItem>
                                    </Menu>
                                </div>
                                : null
                            }
                            {
                                user.avatar_url && userActive
                                ? <img
                                    src={user.avatar_url}
                                    alt='user'
                                    name='logo' />
                                : <PersonIcon />
                            }
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Header