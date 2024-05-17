// src/LandingPage.js

import React from 'react';
import { Container, Typography, Button, Grid, Paper, AppBar, Toolbar, Box } from '@mui/material';

const LandingPage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Welcome to My Website
        </Typography>
      </Box>
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            A brief description of what my website is about.
          </Typography>
          <Button variant="contained" color="primary" size="large" style={{ marginTop: '1rem' }}>
            Get Started
          </Button>
        </Paper>
        <Grid container spacing={4} style={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="h4" gutterBottom>
                Feature 1
              </Typography>
              <Typography variant="body1">
                Description of Feature 1.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="h4" gutterBottom>
                Feature 2
              </Typography>
              <Typography variant="body1">
                Description of Feature 2.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
