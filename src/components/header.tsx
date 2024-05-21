import * as styles from '@/components/header.css';

import { HOME, LOGIN, OUR_TEAM, ROADMAP, TOKENOMICS, WHY_FLO_COIN } from '@/router/name';
import { Button, Grid, IconButton, Typography } from '@mui/material';

import IconLogo from '@/assets/img//logo.svg';
import IconMenu from '@/assets/svg/menu.svg';
import NavMenu from '@/components/nav_menu';
import { linkToBtn } from '@/style/common/link.css';
import { colorWhite } from '@/style/config/color.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

/**
 * ----------------------------------------------------------------------------------
 * header.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

// ----------------------------------------------------------------------------------

export const pathList = [
  {
    text: 'Whitepaper',
    route: HOME,
  },
  {
    text: 'Why FloCoin',
    route: WHY_FLO_COIN,
  },
  {
    text: 'Tokenomics',
    route: TOKENOMICS,
  },
  {
    text: 'Our Team',
    route: OUR_TEAM,
  },
  {
    text: 'Roadmap',
    route: ROADMAP,
  },
];

// ----------------------------------------------------------------------------------

export default function Header() {
  // ----------------------------------------------------------------------------------

  const [menuState, setMenuState] = useState(false);

  // ----------------------------------------------------------------------------------

  return (
    <header className={styles.header}>
      <Grid container className={styles.headerCont}>
        <Grid item>
          <IconLogo width={176} />
        </Grid>
        <Grid item className={styles.listBox}>
          <Grid className={styles.list}>
            {pathList.map((data) => (
              <Grid key={data.text} className={styles.item}>
                <Link href={data.route} className={styles.itemText}>
                  {data.text}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <IconButton size='large' sx={{ padding: 0 }} className={styles.menu} onClick={() => setMenuState(true)}>
            <IconMenu />
          </IconButton>
          <Link href={LOGIN} className={classNames([styles.loginBtn, linkToBtn])}>
            <Button
              variant='outlined'
              sx={{ background: 'transparent', borderColor: colorWhite, color: colorWhite }}
              fullWidth
            >
              {/* Early Access */}
              LOGIN
            </Button>
          </Link>
        </Grid>
      </Grid>

      {<NavMenu open={menuState} onClose={() => setMenuState(false)} />}
    </header>
  );
}
