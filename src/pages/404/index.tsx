import { colorPrimary } from '@/style/config/color.css';
import { Button, Typography } from '@mui/material';

import { getLayout } from '@/components/layout/home';
import type { NextPageWithLayout } from '@/pages/_app';
import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';

/*
 * ----------------------------------------------------------------------------------
 * 404
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/10
 */

const NotFound: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>404 notfound</title>
      </Head>

      <div>
        <Box height={256} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <Typography variant='h1' align='center' sx={{ fontSize: 120, fontWeight: 700 }}>
              404
              <b style={{ color: colorPrimary, marginLeft: 12 }}>Oops!</b>
            </Typography>
            <Typography variant='h2' align='center' sx={{ fontSize: 80, fontWeight: 700 }}>
              Page Not Found
            </Typography>
            <Box height={24} />
            <Typography variant='subtitle1' align='center' sx={{ fontSize: 20 }}>
              Sorry the page you are looking for does not exist, click the <br />
              button below to head on back to the home base.
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

NotFound.getLayout = getLayout;

export default NotFound;
