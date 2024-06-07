/**
 * ----------------------------------------------------------------------------------
 * ido_details.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */
import { Grid, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import * as styles from '@/module/home/team/team_list.css';
import IconArrowRight from '@/assets/img//home/team/arrow_right.svg';

const accordionTextAnimation = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
}

// ----------------------------------------------------------------------------------

export type FounderInfoData = {
  title: string;
  text: string;
};

// ----------------------------------------------------------------------------------
interface PropsType {
  info: FounderInfoData;
}
// ----------------------------------------------------------------------------------

export default function FoundersListItem({ info }: PropsType) {
  const [expState, setExpState] = useState(false);

  function toggle() {
    setExpState(!expState)
  }

  // ----------------------------------------------------------------------------------
  return (
    <Grid item key={info.title}>

      <Grid container gap={2} alignItems='center' className={styles.cardItemTitle} onClick={toggle}>
        <Grid>
          <Typography className={styles.infoTitle}>{info.title}</Typography>
        </Grid>

        <motion.div
          style={{ width: 18, height: 18, display: 'grid' }}
          animate={{ rotate: expState ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconButton
            sx={{ width: 18, height: 18 }}            
          >
            <IconArrowRight />
          </IconButton>
        </motion.div>
      </Grid>

      <AnimatePresence>
        {expState && (
          <motion.div
            {...accordionTextAnimation}
          >
            <Typography className={styles.infoText}>
              {info.text}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Grid>
  );
}
