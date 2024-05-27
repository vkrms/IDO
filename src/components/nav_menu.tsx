import * as styles from '@/components/header.css';

import { Button, Dialog, DialogContent, Grid, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Box, fontFamily, fontSize, lineHeight } from '@mui/system';

import IconLogo from '@/assets/img//logo.svg';
import IconClose from '@/assets/svg/close.svg';
import { pathList } from '@/components/header';
import { LOGIN } from '@/router/name';
import { linkToBtn } from '@/style/common/link.css';
import { colorWhite } from '@/style/config/color.css';
import { manropeSemiBold } from '@/style/config/font.css';
import { fontFace } from '@vanilla-extract/css';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * ----------------------------------------------------------------------------------
 * header.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

// ----------------------------------------------------------------------------------

interface PropsType {
  open: boolean;
  onClose: () => void;
}
// ----------------------------------------------------------------------------------

export default function NavMenu({ open, onClose }: PropsType) {
  const router = useRouter();
  // ----------------------------------------------------------------------------------

  function onclick(route: string) {
    router.push(route);
    onClose();
  }
  // ----------------------------------------------------------------------------------

  return (
    <Dialog
      open={open}
      fullScreen
      sx={{
        '& .MuiPaper-root': { background: 'rgba(12, 12, 12, 0.80)' },
        '& .MuiDialogContent-root': {
          padding: '32px 40px',
          width: '100%',
        },
      }}
    >
      <DialogContent>
        <Grid container className={styles.headerCont}>
          <Grid item>
            <IconLogo width={176} />
          </Grid>
          <Grid item>
            <IconButton size='large' sx={{ padding: 0 }}>
              <IconClose />
            </IconButton>
          </Grid>
        </Grid>

        <Box height={40} />
        <List sx={{ padding: 0 }}>
          {pathList.map((data) => (
            <ListItem key={data.text} sx={{ padding: 0, marginBottom: '8px' }}>
              <ListItemText sx={{ textAlign: 'center' }}>
                <Button
                  variant='text'
                  onClick={() => onclick(data.route)}
                  style={{
                    fontSize: 16,
                    lineHeight: '22px',
                    fontFamily: manropeSemiBold,
                    color: colorWhite,
                    padding: 0,
                  }}
                >
                  {data.text}
                </Button>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Box height={48} />
        <Box sx={{ textAlign: 'center' }}>
          <Link href={LOGIN} className={linkToBtn}>
            <Button size='large' variant='contained'>
              Early Access
            </Button>
          </Link>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
