'use client';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils/cn';
import { Box, Button, FormControl, Grid, Typography } from '@mui/material';
import React from 'react';
import { parsePhoneNumber } from 'react-phone-number-input';
import { FancyWrap } from './fancy-wrap';
import * as styles from './form-fields.css';
import { PhoneInput } from './tel-input';

import type { UseFormRegister } from 'react-hook-form';
import type { Value as E164Number } from 'react-phone-number-input';
import type { Inputs, PhoneData } from './form-dialog';

interface Props {
  success: boolean;
  getPhoneData: (a: PhoneData) => any;
  register: UseFormRegister<Inputs>;
}

export function FormFields({ success, register, getPhoneData }: Props) {
  const [phone, setPhone] = React.useState('');

  function handlePhoneChange(val: E164Number) {
    const phoneNumber = parsePhoneNumber(val);

    if (phoneNumber) {
      const { number, country } = phoneNumber;
      getPhoneData({
        tel: number,
        country,
      });

      setPhone(number);
    }
  }

  return (
    <>
      <Box className={styles.body}>
        {!success && (
          <>
            <Typography variant='h3' className={styles.title}>
              Early Access
            </Typography>

            <Typography className={cn('text-center', styles.subtitle)}>
              Get notified of the drop of the IDO and other important news by entering your details below.
            </Typography>

            <Grid container direction='column'>
              <FormControl className={styles.control}>
                <label>Name</label>

                <Grid container gap={2}>
                  <Input {...register('name')} placeholder='First name' />
                  <Input {...register('lastName')} placeholder='Last name' />
                </Grid>
              </FormControl>

              <FormControl className={styles.control}>
                <label htmlFor='email'>Email Address</label>
                <Input id='email' {...register('email')} placeholder='Enter your email address' type='email' />
              </FormControl>

              <FormControl className={cn(styles.control, 'telly')}>
                <label htmlFor='phone'>Phone Number</label>

                <FancyWrap>
                  <PhoneInput
                    value={phone}
                    onChange={handlePhoneChange}
                    international
                    defaultCountry='AU'
                    className='h-12 items-center'
                  />
                </FancyWrap>
              </FormControl>

              <Grid item textAlign={'center'} mt='20px'>
                <Button variant='contained' size='large' type='submit'>
                  <span>Register for Early Access</span>
                  <BottomGradient />
                </Button>
              </Grid>
            </Grid>
          </>
        )}

        {success && (
          <>
            <div className='text-center'>
              <Typography variant='h3' className={styles.title}>
                Win 10,000 FloCoins & an <span className='whitespace-nowrap'>All–Expenses–Paid</span>
                Trip to Australia!
              </Typography>

              <Typography variant='body1' className={styles.subtitle}>
                Thank you for signing up!
                <br />
                <br />
                Think you could become the biggest FloFanatic?
                <br />
                Click below to discover how you can win.
              </Typography>

              <Button variant='contained' size='large' className={'' /*styles.btn*/}>
                <span>Learn More</span>
                <BottomGradient />
              </Button>
            </div>
          </>
        )}
      </Box>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='grady group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='grady group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

export default FormFields;
