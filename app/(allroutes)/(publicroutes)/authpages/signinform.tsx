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
import { emailLogin } from '@/components/auth';
import { useRouter } from 'next/navigation';



const defaultTheme = createTheme();

const SignInForm = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string | any>('Sign in with Email')
  const [isSiginingIn, setIsSigningIn] = useState(false)

  const router = useRouter()
  const payload = {
    email,
    password
  }
  


  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if(email === '' || password === 'company'){
      setMessage('Field cannot be empty')
      return
    }

    try{
    
    setIsSigningIn(true)
    setMessage('Signing in...')
    const response: any = await emailLogin(payload)
    if(response.ok){
      router.push('/dashboard/dashboardpage')
    
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
          <Typography  className={`text-center text-xl font-extrabold text-blue-300`} >
            {message}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate className='grid place-items-center gap-3 mt-3'>
          <input
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              placeholder='email'
              autoComplete="email"
              autoFocus
              className='m-0 w-full border border-black rounded-2xl px-4 py-2'
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              // fullWidth
              // variant="contained"
              // style={{ marginTop: 3, marginBottom: 2, backgroundColor: 'error' }}
              className='rounded-2xl bg-blue-500 hover:bg-blue-500'
            >
              SIGN IN
            </Button>
            <Grid container className='gap-2'>
              <Grid item xs>
                <Link href="/authpages/forgotpasswordpage" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
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

  );
}

export default SignInForm