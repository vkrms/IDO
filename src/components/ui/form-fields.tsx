"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";
import { Typography, Box, Grid, Button, FormControl } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import * as styles from './form-fields.css';

export function FormFields() {
    return (
        <>
            <Box className={styles.body}>
                <Typography variant="h3" className={styles.title}>
                    Early Access
                </Typography>

                <Typography className={cn('text-center', styles.subtitle)}>
                    Get notified of the drop of the IDO and other important news by entering your details below.
                </Typography>

                {/* <form className="my-8 align-left" onSubmit={handleSubmit}> */}
                    <Grid direction='column'>
                        <FormControl className={styles.control}>
                            <label>Name</label>

                            <Grid container gap={2}>
                                <Input placeholder="First name" />
                                <Input placeholder="Last name" />
                            </Grid>
                        </FormControl>

                        <FormControl className={styles.control}>
                            <label htmlFor="email">Email Address</label>
                            <Input id="email" placeholder="enter your email address" type="email" />
                        </FormControl>

                        <FormControl className={styles.control}>
                            <label htmlFor="phone">Phone Number</label>
                            <MuiTelInput/>
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
                {/* </form> */}
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