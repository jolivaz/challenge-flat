import React, { useEffect, useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Pull = ({pull}) => {
    return(
        <div className='pull-component'>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={pull.user.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                primary={`${pull.title  } - ${pull.labels[0].name}`}
                secondary={
                    <div>
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {pull.labels[0].description}
                        </Typography>
                        {` - ${pull.state}`}
                        </React.Fragment>
                    </div>
                }
                />
            </ListItem>
            <hr></hr>
        </div>
    )
}

export default Pull
