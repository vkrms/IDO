import Cross from '@/assets/svg/close.svg';
import ContextProvider from '@/components/provider/context_provider';
import Reading from '@/components/ui/reading';
import * as styles from '@/components/ui/reading.css';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { useContext } from 'react';

interface Props {
  text: string;
  slug: string;
}

export default function ReadingDialog({ text, slug }: Props) {
  const context = useContext(ContextProvider);

  function handleClose() {
    context.toggle(slug);
  }

  return (
    <Dialog
      open={context.isOpen(slug)}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: '#0009',
            backdropFilter: 'blur(6px)',
          },
        },
      }}
      PaperProps={{
        component: 'div',
        className: styles.body,
      }}
    >
      <IconButton className={'cross-btn'} onClick={handleClose}>
        <Cross />
      </IconButton>

      <Reading text={text} />
    </Dialog>
  );
}
