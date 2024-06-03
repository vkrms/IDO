/**
 * ----------------------------------------------------------------------------------
 * faq.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/faq/faq_item.css';

import { Box, Grid, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';

import IconExpand from '@/assets/svg/expand_b.svg';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

// ----------------------------------------------------------------------------------

export type AnwserItem = {
  name: string;
  text: string;
};

// ----------------------------------------------------------------------------------

export type FAQItemData = {
  title: string;
  info: string;
  innerList: AnwserItem[];
};

// ----------------------------------------------------------------------------------

interface PropsType {
  item: FAQItemData;
}

const accordionTextAnimation = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
}

// ----------------------------------------------------------------------------------

export default function FAQItem({ item }: PropsType) {
  const [expState, setExpState] = useState(false);

  function toggle() {
    setExpState(!expState)
  }

  // ----------------------------------------------------------------------------------

  return (
    <ListItem className={styles.quesItem}>
      <Grid container justifyContent='space-between' className={styles.itemTitleWrap} onClick={toggle}>
        <Grid item>
          <Typography className={styles.itemTitle}>{item.title}</Typography>
        </Grid>

          <IconButton size='large' className={styles.btn}>
            <IconExpand className={cn({expState})}/>
          </IconButton>
      </Grid>

      <AnimatePresence>
        {expState && (
          <motion.div {...accordionTextAnimation}>
            <Box height={56} />

            <Typography className={styles.itemInfo}>
              {item.info}
            </Typography>

            <List className={styles.innerList}>
              {item.innerList.map((inner, index) => (
                <ListItem key={inner.text} className={styles.innerItem}>
                  <ListItemText className={styles.innerText}>
                    <b className={styles.innerIdx}>{index}.</b>
                    <b className={styles.innerText}>{inner.name}</b>
                    {inner.text}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </ListItem>
  );
}
