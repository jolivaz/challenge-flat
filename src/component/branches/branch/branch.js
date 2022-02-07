import React, {useState} from 'react'
import ListItemText from '@mui/material/ListItemText'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import ArticleIcon from '@mui/icons-material/Article'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import Tooltip from '@mui/material/Tooltip'
import axios from "axios"
import './branch.scss'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

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

const Branch = ({branch}) => {
    const [open, setOpen] = useState(false)
    const [commitData, setCommitData] = useState([])

    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(true)
        const getData = async() => {
            const dataCommit = await axios.get(branch.commit.url)
            if (dataCommit) {
                setCommitData(dataCommit.data)
            } else {
                console.warn('user does not exist')
            } 
        }
        getData()
    }
    const handleClose = () => setOpen(false)

    return(
        <div className='branch-component'>
            <ListItem
                key={branch.name}
                disableGutters
                className='branch-component_item'
                secondaryAction={
                    <IconButton>
                        <Tooltip title="Commit">
                            <ArticleIcon onClick={e => handleOpen(e)} />
                        </Tooltip>
                    </IconButton>
                }>
                <ListItemText primary={`${branch.name}`} />
                <ListItemText primary={`${branch.commit.sha}`} />
            </ListItem>
            {
                commitData.length !== 0
                ?  <Modal
                className='card-component_modal'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                    <Box sx={style}>
                        <ListItem>
                            <label style={{fontWeight: 'bold'}}>Autor: </label>
                            <ListItemText primary={`${commitData.commit.author.name}`} />
                            <ArticleIcon/>
                        </ListItem>
                        <ListItem>
                            <label style={{fontWeight: 'bold'}}>Fecha: </label>
                            <ListItemText primary={`${commitData.commit.author.date}`} />
                            <ArticleIcon/>
                        </ListItem>
                        <ListItem>
                            <label style={{fontWeight: 'bold'}}>Message: </label>
                            <ListItemText primary={`${commitData.commit.message}`} />
                            <ArticleIcon/>
                        </ListItem>
                        <ListItem>
                            <label style={{fontWeight: 'bold'}}>Additions: </label>
                            <ListItemText primary={`${commitData.stats.additions}`} />
                            <SyncAltIcon/>
                        </ListItem>
                        <ListItem>
                            <label style={{fontWeight: 'bold'}}>Deletions: </label>
                            <ListItemText primary={`${commitData.stats.deletions}`} />
                            <SyncAltIcon/>
                        </ListItem>
                        {
                            commitData.files.length > 0 ?
                            <ListItem>
                            <label style={{fontWeight: 'bold'}}>Archivos modificados:  </label>
                            <div className='modal-modal-description_files'>
                                {commitData.files.map(file => (
                                    <span>{file.filename}</span>
                                ))}
                            </div>
                        </ListItem>
                        : null
                        }
                    </Box>
            </Modal>
            : null
            }              
        </div>
    )
}

export default Branch