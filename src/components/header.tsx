import * as styles from '@/components/header.css';
import { isVisible, menuIcon } from '@/components/header.css';

import { Button, Grid, Typography, Drawer, useMediaQuery, IconButton, Theme } from '@mui/material';

import IconLogo from '@/assets/img//logo.svg';
import MenuIcon from '@/assets/svg/menu.svg';
import CloseIcon from '@/assets/svg/close.svg';
import { colorWhite } from '@/style/config/color.css';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { CtaButton } from './ui/cta_button';

// 

/**
 * ----------------------------------------------------------------------------------
 * header.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

// ----------------------------------------------------------------------------------

const dataList = ['Why FloCoin', 'Tokenomics', 'Our Team', 'Roadmap'];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

// ----------------------------------------------------------------------------------

interface Props {
  className?: string;
  clickHandler?: () => void;
}


const Menu = ({className, clickHandler}: Props) => {
  return (
    <Grid item {...{className}}>
      <Grid item>
        <Grid className={cn(styles.list)}>
          
          <Grid className={styles.item}>
            <a href='https://eventflo.gitbook.io/eventflo' target="_new" className='menu-item'>
              <Typography variant="inherit" className={styles.itemText}>
                Whitepaper
              </Typography>
            </a>
          </Grid>

          {dataList.map((data) => (
            <Grid key={data} className={styles.item}>
              <a href={'#' + slugify(data)} className='menu-item' onClick={clickHandler}>
                <Typography variant="inherit" className={styles.itemText}>{data}</Typography>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item>
          <CtaButton>
            <Button
              variant='outlined'
              sx={{ background: 'transparent', borderColor: colorWhite, color: colorWhite }}
              fullWidth
              className="btn-hover-fx"
            >
              Early Access
            </Button>
          </CtaButton>
      </Grid>
    </Grid>
  )
}

export default function LandingHeader() {
  // ----------------------------------------------------------------------------------

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <Grid container className={styles.headerCont}>
        <Grid item mb={'12px'}>
          <IconLogo className={styles.logo} />
        </Grid>

        <Menu className={styles.menuWide}/>

        <IconButton
          className={styles.menuBtn}
          onClick={toggleDrawer}
        >
          <CloseIcon className={cn(menuIcon, { [isVisible]:  open })}/>
          <MenuIcon  className={cn(menuIcon, { [isVisible]: !open })} />
        </IconButton>

      </Grid>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        className={styles.drawer}
        PaperProps={{
          sx: {
            width: '100%',
            background: 'rgba(12, 12, 12, 0.8)',
            padding: '32px 16px',         
            backdropFilter: 'blur(4px)',   
          }
        }}
      >
        <Menu className={styles.menuMobile} clickHandler={toggleDrawer} />
      </Drawer>

    </header>
  );
}
