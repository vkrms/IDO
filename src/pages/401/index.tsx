import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { Button, Typography } from '@mui/material';

import { getLayout } from '@/components/layout/home';
import type { NextPageWithLayout } from '@/pages/_app';
import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';

/*
 * ----------------------------------------------------------------------------------
 * 401
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/10
 */

const Unauthorized: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>401 Unauthorized</title>
      </Head>

      <div>
        <Box height={256} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <Typography variant='h1' align='center' sx={{ fontSize: 120, color: colorWhite, fontWeight: 700 }}>
              401
              <b style={{ color: colorPrimary, marginLeft: 12 }}>Oops!</b>
            </Typography>
            <Typography variant='h2' align='center' sx={{ fontSize: 80, color: colorWhite, fontWeight: 700 }}>
              Unauthorized
            </Typography>
            <Box height={24} />
            <Typography variant='subtitle1' align='center' sx={{ color: colorWhite, fontSize: 20 }}>
              Access is allowed only for registered users, click on the button below to head on back to home base.
            </Typography>
            <Box height={24} />
            <Box textAlign='center'>
              <Button variant='contained' color='primary'>
                Back To Home
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

Unauthorized.getLayout = getLayout;

export default Unauthorized;
