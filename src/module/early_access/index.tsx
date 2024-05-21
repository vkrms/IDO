/*
 * ----------------------------------------------------------------------------------
 * index
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/05/21
 */

import * as styles from '@/module/early_access/index.css';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { style, styled } from '@mui/system';

import { colorWhite } from '@/style/config/color.css';
import MuiPhoneNumber from 'material-ui-phone-number';

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

export default function EarlyAccess() {
  return (
    <>
      <Box height={72} />
      <Box className={styles.box}>
        <Typography className={styles.title}>Early Access</Typography>
        <Typography className={styles.subtitle}>
          Get notified of the drop of the IDO and other important news by entering your details below.
        </Typography>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputTitle}>Name</Typography>
          <Grid container className={styles.list}>
            <Grid item>
              <TextField
                placeholder='First Name'
                fullWidth
                sx={{
                  color: colorWhite,
                  '& .MuiInputBase-input': {
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    color: colorWhite,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: `1px solid ${colorWhite}`,
                    height: 48,
                    borderRadius: '8px',
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField placeholder='Last Name' fullWidth />
            </Grid>
          </Grid>
        </Box>

        <Box className={styles.inputBox}>
          <Typography className={styles.inputTitle}>Email</Typography>
          <TextField placeholder='Enter your email address' fullWidth />
        </Box>

        <Box className={styles.inputBox}>
          <Typography className={styles.inputTitle}>Phone Number*</Typography>

          <MuiPhoneNumber defaultCountry='us' onChange={() => {}} fullWidth />
        </Box>
        <Box height={40} />
        <Button size='large' variant='contained' fullWidth>
          Register For Early Access
        </Button>
      </Box>
    </>
  );
}
