import React, { useContext } from 'react';
import { RepositoriesContext } from '../../../context/repositoriesContext'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import './repository.scss'


const Repository = ({repository}) => {
    const navigate = useNavigate()
    const {setRepositoryActive} = useContext(RepositoriesContext)

    const handleOpenRepo = e => {
        e.preventDefault()
        setRepositoryActive(repository.name)
        setTimeout(() => {
            navigate(`/branches:${repository.name}`);
        }, 500)
    }

    const handleOpenPulls = e => {
        e.preventDefault()
        setRepositoryActive(repository.name)
        setTimeout(() => {
            navigate(`/pulls:${repository.name}`);
        }, 500)
    }
    return(
        <div className='repository-component'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5"  color="text.secondary">
                        {repository.name}
                        </Typography>
                        <hr></hr>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <label style={{fontWeight: 'bold'}}>Owner: </label>
                            {repository.owner.login}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <label style={{fontWeight: 'bold'}}>Branch por defecto: </label>
                            {repository.default_branch}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <label style={{fontWeight: 'bold'}}>Visibilidad: </label>
                            {repository.visibility}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <label style={{fontWeight: 'bold'}}>Visitantes: </label>
                            {repository.watchers}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={e => handleOpenRepo(e)} size="small">Branches</Button>
                        <Button onClick={e => handleOpenPulls(e)} size="small">Pulls</Button>
                    </CardActions>
                </Card>
        </div>
    )
}

export default Repository