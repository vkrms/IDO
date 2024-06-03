import * as styles from '@/components/header.css';
import { isVisible, menuIcon } from '@/components/header.css';

import { Button, Grid, Typography, Drawer, useMediaQuery, IconButton, Theme } from '@mui/material';

import IconLogo from '@/assets/img//logo.svg';
import MenuIcon from '@/assets/svg/menu.svg';
import CloseIcon from '@/assets/svg/close.svg';
import { LOGIN } from '@/router/name';
import { linkToBtn } from '@/style/common/link.css';
import { colorWhite } from '@/style/config/color.css';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

// 

/**
 * ----------------------------------------------------------------------------------
 * header.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

// ----------------------------------------------------------------------------------

const dataList = ['Whitepaper', 'Why FloCoin', 'Tokenomics', 'Our Team', 'Roadmap'];

// ----------------------------------------------------------------------------------

interface Props {
  className?: string;
}

const Menu = ({className}: Props) => {
  return (
    <Grid item {...{className}}>
      <Grid item>
        <Grid className={cn(styles.list, 'doo')}>
          {dataList.map((data) => (
            <Grid key={data} className={styles.item}>
              <a href="//www.example.com" target='_blank'>
                <Typography className={styles.itemText}>{data}</Typography>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <Link href={LOGIN} className={linkToBtn}>
          <Button
            variant='outlined'
            sx={{ background: 'transparent', borderColor: colorWhite, color: colorWhite }}
            fullWidth
          >
            Early Access
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default function LandingHeader() {
  // ----------------------------------------------------------------------------------

  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <Grid container className={styles.headerCont}>
        <Grid item>
          <IconLogo width={176} />
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
        PaperProps={{className: styles.drawerPaper}}
      >
        <Menu className={styles.menuMobile} />
      </Drawer>

    </header>
  );
}
