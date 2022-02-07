import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './footer.scss'

const Footer = () => {
    return(
        <div className='flat-component-footer'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <div className='flat-component-footer_icons'>
                            <a 
                                href= 'https://www.linkedin.com/in/jose-antonio-oliva-zamora-6a8184114/'
                                target='_blank'>
                                <LinkedInIcon />
                            </a>
                            <a href='mailto:joseant389@gmail.com' target='_blank'>
                                <EmailIcon />
                            </a>
                            <a 
                                href= 'https://wa.me/+541137583688?text=Hola%20Jose!%20Te%20contacto%20desde%20tu%20challenge%20flat'
                                target='_blank'>
                                <WhatsAppIcon />
                            </a>
                            <a 
                                href= 'https://github.com/jolivaz'
                                target='_blank'>
                                <GitHubIcon />
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='flat-component-footer_description'>
                            <Typography gutterBottom variant="h7" component="div">
                                Ing. Jose Oliva
                            </Typography>
                            <Typography gutterBottom variant="p" component="div">
                                Frontend Developer
                            </Typography>
                            <Typography gutterBottom variant="span" component="div">
                                Venezolano
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='flat-component-footer_address'>
                            <Typography gutterBottom variant="span" component="div">
                                Buenos Aires - Argentina
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Footer