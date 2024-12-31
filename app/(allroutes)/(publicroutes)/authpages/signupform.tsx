import * as React from 'react';
import {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import { Button } from '@/components/ui/button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '@/components/footer';
import { emailLogin } from '@/components/auth';
import { useRouter } from 'next/navigation';
import { registerUserWithEmail } from '@/components/auth';



const defaultTheme = createTheme();

const SignUpForm = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [usersource, setUsersource] = useState<string>('fixupe')
  const [message, setMessage] = useState<string | any>('Sign up')
  const [isSiginingIn, setIsSigningIn] = useState(false)

  const router = useRouter()
  const payload = {
    username,
    email,
    password,
    company,
    usersource
  }
  

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if(username === '' || email === '' || password === 'company' || usersource === ''){
      setMessage('Field cannot be empty')
      return
    }
    try{
    
    setIsSigningIn(true)
    setMessage('Registering user...')
    const response: any = await registerUserWithEmail(payload)
    if(response.ok){
    const serverMessage = response.data
    setMessage(serverMessage)
    setCompany('')
    setPassword('')
    setEmail('')
    setUsername('')
  }else{
    console.log(response)
    setMessage(response)
  }
}
  catch(err: any){
    console.log(err)
    setMessage("No response! Unable to fetch from server. Check internet connection")

  }finally{
    setIsSigningIn(false)
  }
    
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.primary' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h5" variant="h5" className='text-center text-xl font-extrabold text-blue-300'>
            {message}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate  className='grid place-items-center gap-2 mt-2 '>
            <input type='hidden' name='usersource' />
            <input
              required
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              name="username"
              placeholder='username'
              autoComplete="username"
              autoFocus
              className='m-0 w-full border border-black rounded-2xl px-4 py-2'
            />
           <input
              
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              placeholder='email'
              autoComplete="email"
              autoFocus
              className='m-0 w-full border border-black rounded-2xl px-4 py-2'
              required
            />
          <input
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              placeholder='password'
              autoComplete="password"
              autoFocus
              className='m-0 w-full border border-black rounded-2xl px-4 py-2'
            />
             <input
              required
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
              name="company"
              placeholder='company'
              autoComplete="company"
              autoFocus
              className='m-0 w-full border border-black rounded-2xl px-4 py-2'
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              className='rounded-2xl bg-blue-500 hover:bg-blue-500'
            >
              SIGN UP
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/authpages/signinpage" variant="body2">
                  {"Already registered? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUpForm