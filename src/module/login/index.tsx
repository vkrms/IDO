/*
 * ----------------------------------------------------------------------------------
 * index
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/11
 */

import * as styles from '@/module/login/index.css';

import { colorPrimary, colorTextBlack, colorTextGrey } from '@/style/config/color.css';
import { Box, Button, CardMedia, FormControl, Grid, Stack, TextField, Typography } from '@mui/material';

import IconLogo from '@/assets/img/header/logo.svg';
import bannerImg from '@/assets/img/login/banner.png';
import IconEmail from '@/assets/svg/email.svg';
import IconEye from '@/assets/svg/eye.svg';
import { linkToBtn } from '@/style/common/link.css';
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
    <Box height='100vh'>
      <Head>
        <title>Admin Login</title>
      </Head>

      <Grid container className={styles.box}>
        <Grid className={styles.leftBox}>
          <IconLogo className={styles.siteName} />
          <CardMedia component='img' height='100%' image={bannerImg.src} />
        </Grid>

        <Grid className={styles.rightBox}>
          <Stack spacing={2} className={styles.rightContent}>
            <Typography variant='h2' align='center' textTransform='uppercase'>
              Login
            </Typography>
            <Box height={40} />
            <Box sx={{ marginBottom: '20px' }}>
              <FormControl fullWidth>
                <Typography variant='subText8' sx={{ marginBottom: '12px' }}>
                  Username or Email Address *
                </Typography>
                <TextField
                  error={!!errors.account || errAcc}
                  type='text'
                  placeholder='Email'
                  InputProps={{
                    endAdornment: (
                      <div className={styles.rightIcon}>
                        <IconEmail color={colorTextGrey} />
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

            <Box sx={{ marginBottom: '20px' }}>
              <FormControl fullWidth>
                <Typography variant='subText8' sx={{ marginBottom: '12px' }}>
                  Password *
                </Typography>
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
            </Box>

            <p className={styles.forgotPwd}>
              <Link href='#' className={linkToBtn} style={{ color: colorTextBlack }}>
                Forgot Password?
              </Link>
            </p>

            <Button fullWidth variant='contained' className={styles.textUpper} onClick={handleSubmit(doLogin)}>
              Login
            </Button>

            <Typography variant='subText9' sx={{ color: colorTextGrey }}>
              Don’t have account?{' '}
              <Link href='#' className={linkToBtn} style={{ color: colorPrimary }}>
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
