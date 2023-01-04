import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function Footer(){
    return <footer>
        <Box bottom={0} width='85%' justifyContent='center' sx={{position:'fixed', bottom:0}}>
            <Container >
                <Grid container spacing={4} justifyContent="space-evenly">
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Lorem ipsum</Box>
                        <Box>
                            <Link href="#">Sobre nós</Link>
                        </Box>
                        <Box>
                            <Link href="#">Contato</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Lorem ipsum</Box>
                        <Box>
                            <Link href="#">Sobre nós</Link>
                        </Box>
                        <Box>
                            <Link href="#">Contato</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Lorem ipsum</Box>
                        <Box>
                            <Link href="#">Sobre nós</Link>
                        </Box>
                        <Box>
                            <Link href="#">Contato</Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign='center'  sx={{ pt: 4 }}>
                        <Link href="#" color="red" underline="none">© {new Date().getFullYear()} Pescadores S/A.</Link>
                </Box>
            </Container>
        </Box>

    </footer>

}