import { colorPrimary, colorTextBlack, colorTextGrey } from '@/style/config/color.css';
import { manropeBold, manropeMedium, manropeRegular } from '@/style/config/font.css';
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

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box height={256} />
        <div>
          <Typography
            variant='h1'
            align='center'
            sx={{ fontSize: 120, fontFamily: manropeBold, color: colorTextBlack }}
          >
            401
            <b style={{ color: colorPrimary, marginLeft: 12 }}>Oops!</b>
          </Typography>
          <Typography
            variant='h2'
            align='center'
            sx={{ fontSize: 80, fontFamily: manropeMedium, color: colorTextBlack }}
          >
            Unauthorized
          </Typography>
          <Box height={24} />
          <Typography
            variant='subtitle1'
            align='center'
            sx={{ color: colorTextGrey, fontSize: 20, fontFamily: manropeRegular }}
          >
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
  );
};

Unauthorized.getLayout = getLayout;

export default Unauthorized;
