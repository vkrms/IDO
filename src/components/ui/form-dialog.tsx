import Cross from '@/assets/svg/close.svg';
import ContextProvider from '@/components/provider/context_provider';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from './form-fields';

export type Inputs = {
  name: string;
  lastName: string;
  email: string;
  tel: string;
};

export type PhoneData = {
  tel: string;
  country?: string;
};

export default function FormDialog() {
  const { register, handleSubmit } = useForm<Inputs>();

  const [phoneData, setPhoneData] = useState<PhoneData>({
    tel: '',
    country: '',
  });

  async function post(payload: object) {
    const res = await fetch('/api/mailjet', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const v = await res.json();

    if (res.status === 500) {
      console.warn(v);
    }

    if (res.status === 200) {
      setSuccess(true);
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const payload = { ...data, ...phoneData };
    post(payload);
  };

  const context = useContext(ContextProvider);

  function handleClose() {
    context.toggleForm();
  }

  const [success, setSuccess] = useState(false);

  const getPhoneData = (obj: PhoneData) => {
    setPhoneData(obj);
    return obj;
  };

  return (
    <Dialog
      open={context.isOpen('form')}
      onClose={context.toggleForm}
      scroll='body'
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
          maxWidth: 'calc(100% - 32px)',
        },
      }}
    >
      <IconButton className={'cross-btn'} onClick={handleClose}>
        <Cross />
      </IconButton>

      <FormFields {...{ success, register, getPhoneData }} />
    </Dialog>
  );
}
