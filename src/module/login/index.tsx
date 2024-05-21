/*
 * ----------------------------------------------------------------------------------
 * index
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/11
 */

import * as styles from '@/module/login/index.css';

import { Box, Button, CardMedia, FormControl, Stack, TextField, Typography } from '@mui/material';

import bannerImg from '@/assets/img/login/banner.png';
import IconEmail from '@/assets/svg/email.svg';
import IconEye from '@/assets/svg/eye.svg';
import IconLogo from '@/assets/svg/logo.svg';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// ----------------------------------------------------------------------------------

type Inputs = {
  account: string;
  password: string;
};

type ErrType = {
  code: number;
  message: string;
};

export default function Login() {
  const router = useRouter();
  const [err, setErr] = useState<ErrType | undefined>();
  const errAcc = err && err.code === 1001;
  const errPwd = err && err.code === 1002;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    // mode: 'all',
    defaultValues: {
      account: '',
      password: '',
    },
  });

  async function doLogin(data: Inputs) {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const v = await res.json();

    if (res.status === 500) {
      setErr(v as ErrType);
      return;
    }

    if (res.status === 200) {
      router.push('/event_dashboard');
    }
  }

  return (
    <Box height='100vh' display='flex' flexDirection='column'>
      <Head>
        <title>Admin Login</title>
      </Head>

      <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <Box className={styles.leftBox}>
          <IconLogo className={styles.siteName} />
          <CardMedia component='img' height='100%' image={bannerImg.src} />
        </Box>

        <Box className={styles.rightBox}>
          <Stack spacing={2} className={styles.rightContent}>
            <Typography variant='h2' align='center' textTransform='uppercase'>
              Login
            </Typography>
            <Box>
              <FormControl fullWidth sx={{ m: 1 }}>
                <p>Username or Email Address *</p>
                <TextField
                  error={!!errors.account || errAcc}
                  type='text'
                  placeholder='Email'
                  InputProps={{
                    endAdornment: (
                      <div className={styles.rightIcon}>
                        <IconEmail />
                      </div>
                    ),
                  }}
                  {...register('account', {
                    required: true,
                  })}
                />
                {errAcc && <p>{err?.message}</p>}
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth sx={{ m: 1 }}>
                <p>Password *</p>
                <TextField
                  error={!!errors.password || errPwd}
                  type='password'
                  placeholder='Password'
                  InputProps={{
                    endAdornment: (
                      <div className={styles.rightIcon}>
                        <IconEye />
                      </div>
                    ),
                  }}
                  {...register('password', {
                    required: true,
                  })}
                />
                {errPwd && <p>{err?.message}</p>}
              </FormControl>

              <p className={styles.forgotPwd}>
                <Link href='#'>Forgot Password?</Link>
              </p>
            </Box>

            <Button fullWidth variant='contained' className={styles.textUpper} onClick={handleSubmit(doLogin)}>
              Login
            </Button>

            <p>
              Don’t have account? <Link href='#'>Sign Up</Link>
            </p>
          </Stack>
        </Box>
      </div>
    </Box>
  );
}
