'use client'
import * as React from 'react';
import {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '@/components/footer';
import { SendIcon } from 'lucide-react';
import { getPasswordResetLink} from '@/components/auth';



const defaultTheme = createTheme();

const ForgotPasswordPage = () => {

const [email, setEmail] = useState<string>('')
const [message, setMessage] = useState<string>('Enter email to get a reset link.')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(email === ''){
      setMessage('Email is required')
    }
    if(!email) return
    setMessage('Confirming user email...')
    const data = await getPasswordResetLink(email);
    if (data.ok){
      console.log(data)
      setMessage(data.data)
      setEmail('')
    }else{
      console.log(data)
      setMessage(data)
    }
  };

  return (
    <div>
    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h5" variant="h5" className='text-center'>
            {message}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate 
          sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              required
            />
            <Button
              type="submit"
              variant='contained'
              fullWidth
              color='primary'
              endIcon={<SendIcon />}
              style={{ marginTop: 3, marginBottom: 2, backgroundColor: 'blue' }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/authpages/signuppage" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    <Footer />
    </div>
  );
}

export default ForgotPasswordPage