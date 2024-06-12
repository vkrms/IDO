"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";
import { Typography, Box, Grid, Button, FormControl, IconButton } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import * as styles from './form-fields.css';
import type { UseFormRegister } from "react-hook-form";

type infoProps = {
    numberValue: string,
    countryCallingCode: number,
}

interface Props {
    success: boolean,
    register: UseFormRegister<any>,
    getPhoneData: (a: {}) => {tel: string, country: string},
}

export function FormFields({success, register, getPhoneData}: Props) {
    const [phone, setPhone] = React.useState('')

    const handleChange = (newPhone: string, info: infoProps) => {
        setPhone(newPhone)
        getPhoneData({
            tel: info.numberValue,
            country: info.countryCallingCode,
        })
    }

    return (
        <>
            <Box className={styles.body}>                
    {!success && <>
                    <Typography variant="h3" className={styles.title}>
                        Early Access
                    </Typography>

                    <Typography className={cn('text-center', styles.subtitle)}>
                        Get notified of the drop of the IDO and other important news by entering your details below.
                    </Typography>

                    <Grid container direction='column'>
                        <FormControl className={styles.control}>
                            <label>Name</label>

                            <Grid container gap={2}>
                                <Input {...register('name')} placeholder="First name" />
                                <Input {...register('lastName')}placeholder="Last name" />
                            </Grid>
                        </FormControl>

                        <FormControl className={styles.control}>
                            <label htmlFor="email">Email Address</label>
                            <Input id="email" {...register('email')} placeholder="enter your email address" type="email" />
                        </FormControl>

                        <FormControl className={cn(styles.control, 'telly')}>
                            <label htmlFor="phone">Phone Number</label>
                            <MuiTelInput             
                                value={phone}
                                onChange={handleChange}
                                defaultCountry="AU"
                                forceCallingCode={true}
                                className="my-class-name"
                            />                        
                        </FormControl>

                        <Grid item textAlign={'center'}>
                            <Button variant='contained' size='large' type="submit">
                                <span>
                                    Register for Early Access
                                </span>
                                <BottomGradient />
                            </Button>
                        </Grid>
                    </Grid>
                </>}

    {success && <>
                    <div className="text-center">
                        <Typography variant="h3" className={styles.title}>                        
                            Win 10,000 FloCoins & an <span className="whitespace-nowrap">All–Expenses–Paid</span>
                            Trip to Australia!
                        </Typography>

                        <Typography variant="body1" className={styles.subtitle}>
                            Thank you for signing up!
                            <br /><br />
                            Think you could become the biggest FloFanatic?<br />
                            Click below to discover how you can win.
                        </Typography>

                        <Button variant='contained' size='large' className={''/*styles.btn*/}>
                            <span>
                                Learn More
                            </span>
                            <BottomGradient />
                        </Button>
                    </div>
                </>}
            </Box>
        </>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="grady group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="grady group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

export default FormFields;