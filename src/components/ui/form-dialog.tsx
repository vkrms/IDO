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

    const [phoneData, setPhoneData] = React.useState({
        tel: '',
        country: '',
    })

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
            setSuccess(true);
        }
    }


    const onSubmit: SubmitHandler<Inputs> = data => {
        const payload = {...data, ...phoneData}
        post(payload)
    }

    const context = useContext(ContextProvider);

    function handleClose() {
        context.toggleForm();
    }

    const [success, setSuccess] = React.useState(false);

    const getPhoneData = (obj) => {
        setPhoneData(obj)
        return obj
    }

    return (
        <Dialog
            open={context.isOpen('form')}
            onClose={context.toggleForm}
            scroll="body"
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
                maxWidth: '500px',

                onSubmit: handleSubmit(onSubmit),

                className: 'bg-transparent overflow-visible modal-form',
                sx: {
                    margin: '8px auto',
                    maxWidth: 'calc(100% - 32px)'
                }
            }}
        >
            <IconButton className={'cross-btn'} onClick={handleClose}>
                <Cross />
            </IconButton>

            <FormFields {...{success, register, getPhoneData}} />
        </Dialog>
    );
}
