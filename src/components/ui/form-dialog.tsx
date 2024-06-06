import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import ContextProvider from '@/components/provider/context_provider';
import { FormFields } from './form-fields';
import { set } from 'react-hook-form';
import Cross from '@/assets/svg/close.svg';

export default function FormDialog() {
    const context = useContext(ContextProvider);

    function handleClose() {
        context.toggleForm();
    }

    const [success, setSuccess] = React.useState(false);

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
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const email = formJson.email;
                    console.log({formJson});
                    // handleClose();
                    setSuccess(true);
                },
                className: 'bg-transparent overflow-visible',
                sx: {margin: '80px auto 16px'}
            }}
        >
            <IconButton className={'foo-close'} onClick={handleClose}>
                <Cross />
            </IconButton>

            <FormFields {...{success}} />
        </Dialog>
    );
}
