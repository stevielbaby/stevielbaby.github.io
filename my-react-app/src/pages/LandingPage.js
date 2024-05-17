// src/pages/LandingPage.js
import React from 'react';
import { Container, Typography, Button, Grid, Paper, AppBar, Toolbar, Box } from '@mui/material';

const LandingPage = () => {
  console.log("Rendering LandingPage Component");
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#4D69AA' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OTM Legacy
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: 'url(https://www.dropbox.com/scl/fi/rktrxkcs23mf53zqxbtay/LOGO-RGB-GOLD.png?rlkey=89ha3174crdrlosbwefo8hul5&raw=1)',
          backgroundSize: '75%',
          backgroundRepeat: 'no-repeat', // Ensure the image does not repeat
          backgroundPosition: 'center',
          height: { xs: '30vh', sm: '40vh', md: '50vh', lg: '80vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
            textAlign: 'center',
            px: 2, // Padding X-axis
          }}
        >
          Coming Soon
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
        <Paper elevation={3} sx={{ padding: { xs: '1rem', md: '2rem' }, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            OTM Legacy specializes in Design, Production, and Consulting for audio-visual projects including corporate events, commercial integration, and films.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ marginTop: '1rem', backgroundColor: '#4D69AA' }}>
            Get Notified
          </Button>
        </Paper>
        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: '1rem' }}>
              <Typography variant="h4" gutterBottom>
                Our Services
              </Typography>
              <Typography variant="body1">
                We offer top-notch design, production, and consulting services tailored to meet the needs of corporate events, commercial integrations, and film projects.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: '1rem' }}>
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1">
                Reach out to us for inquiries and more information about how we can assist with your next audio-visual project.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
