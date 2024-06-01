import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useContext } from 'react';
import ContextProvider from '@/components/provider/context_provider';
import { FormFields } from './form-fields';

export default function FormDialog() {
    const context = useContext(ContextProvider);

    function handleClose() {
        context.toggleModal();
    }

    return (
        <Dialog
            open={context.isOpen}
            onClose={context.toggleModal}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const email = formJson.email;
                    console.log(email, 'foo-bar');
                    handleClose();
                },
                className: 'bg-transparent'
            }}
        >
            <FormFields/>
        </Dialog>
    );
}
