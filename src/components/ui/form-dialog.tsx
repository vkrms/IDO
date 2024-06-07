import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import ContextProvider from '@/components/provider/context_provider';
import { FormFields } from './form-fields';
import Cross from '@/assets/svg/close.svg';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string,
    familyName: string,
    email: string,
    tel: string,
}


export default function FormDialog() {
    const { register, handleSubmit } = useForm<Inputs>();

    const [phoneB, setPhoneB] = React.useState('')

    async function post(payload: {}) {
        const res = await fetch('/api/mailjet', {
            method: 'POST',
            body: JSON.stringify(payload),
        });

        const v = await res.json();

        if (res.status === 500) {
            console.warn(v)
        }

        if (res.status === 200) {
            // alert('Success');
            setSuccess(true);
        }
    }


    const onSubmit: SubmitHandler<Inputs> = data => {
        data.tel = phoneB
        console.log({data})
        post(data)
    }

    const context = useContext(ContextProvider);

    function handleClose() {
        context.toggleForm();
    }

    const [success, setSuccess] = React.useState(false);

    const getPhone = (phone: string) => {
        console.log({phone})
        setPhoneB(phone)
        return phone
    }

    return (
        <Dialog
            open={context.isOpen('form')}
            onClose={context.toggleForm}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: '#0009',
                        backdropFilter: 'blur(6px)',
                    },
                },
            }}
            PaperProps={{
                component: 'form',

                onSubmit: handleSubmit(onSubmit),

                className: 'bg-transparent overflow-visible',
                sx: {margin: '80px auto 16px'}
            }}
        >
            <IconButton className={'cross-btn'} onClick={handleClose}>
                <Cross />
            </IconButton>

            <FormFields {...{success, register, getPhone}} />
        </Dialog>
    );
}
