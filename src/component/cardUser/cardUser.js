import React, { useContext } from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { UsersContext } from '../../context/userContext'
import FileOpenIcon from '@mui/icons-material/FileOpen'
import GitHubIcon from '@mui/icons-material/GitHub'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Person from './../../assets/person.jpeg'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Modal from '@mui/material/Modal'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import './cardUser.scss'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const CardUser = () => {
    const {user, setUserActive, userNotExist} = useContext(UsersContext)
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return(
        <div className='card-component'>
            <CardMedia
                    onClick={e => handleOpen(e)}
                    component="img"
                    alt="user"
                    height="140"
                    image={user.avatar_url || Person}
                />
            <Card sx={  { maxWidth: 345 }} className="card-component_detail">
                {
                    user.id
                    ?
                    <div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {user.name}
                            </Typography>
                            <Typography component="span">
                            {user.bio}
                            </Typography>
                            <div className='card-component_detail_property'>
                                <LocationOnIcon />
                                <Typography component="span">
                                    {user.location}
                                </Typography>
                            </div>
                            <div className='card-component_detail_property'>
                                <FileOpenIcon />
                                <label>Repositorios:</label>
                                <Typography component="span">
                                    {user.public_repos}
                                </Typography>
                            </div>
                            <div  className='card-component_detail_property'>
                                <PersonAddAlt1Icon />
                                <label>Seguidores:</label>
                                <Typography component="span">
                                    {user.followers}
                                </Typography>
                            </div>
                            <div  className='card-component_detail_property'>
                                <PersonAddAlt1Icon />
                                <label>Siguiendo:</label>
                                <Typography component="span">
                                    {user.following}
                                </Typography>
                            </div>
                            <hr></hr>
                            <div  className='card-component_detail_property'>
                                <GitHubIcon />
                                <a href={user.html_url} target='_blank'>
                                    Ingresar a perfil GitHub
                                </a>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Link to={`/dashboard:${user.login}`}>
                                <Button
                                    onClick={e => setUserActive(true)}
                                    className='card-component_detail_principal-button'
                                    size="small">
                                        Ingresar
                                </Button>
                            </Link>
                        </CardActions>
                    </div>
                    :
                    <div>
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {
                                    userNotExist
                                    ? <Alert severity="info">
                                        El usuario ingresado no existe!
                                    </Alert>
                                    : <Alert severity="info">
                                        Ingresar nombre de usuario en la parte superior!
                                    </Alert>
                                }
                            </Typography>
                        </CardContent>
                    </div>
                }
            </Card>
            <Modal
                className='card-component_modal'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                    <Box sx={style}>
                        <CardMedia
                        component="img"
                        alt="user"
                        height="140"
                        image={user.avatar_url || Person}/>
                    </Box>
            </Modal>
        </div>
    )
}

export default CardUser