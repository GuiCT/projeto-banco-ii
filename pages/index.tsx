import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer"
import DrawerComponent from "../components/Drawer";
import { useDrawerContext } from '../context/DrawerContext';
import React from 'react';

class Home extends React.Component {

  
  render(){
    const { toggleDrawerOpen } = useDrawerContext();
    return (
      <Container maxWidth="lg">
        <Navbar />

        <Button variant="contained" color="primary"
        onClick={() => {toggleDrawerOpen}}
        >Pimba</Button>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Projeto semestral de Banco de Dados II
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
        
        </Box>
      
      <Footer />
      </Container>
    )
}
}

export default Home;