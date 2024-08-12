/**
 * ----------------------------------------------------------------------------------
 * faq.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/faq/faq_item.css';

import { Grid, IconButton, ListItem, Typography } from '@mui/material';

import IconExpand from '@/assets/svg/expand_b.svg';
import { cn } from '@/lib/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// ----------------------------------------------------------------------------------

export type AnwserItem = {
  name: string;
  text: string;
};

// ----------------------------------------------------------------------------------

export type FAQItemData = {
  title: string;
  info: string;
  innerList?: AnwserItem[];
};

// ----------------------------------------------------------------------------------

interface PropsType {
  item: FAQItemData;
  className: string;
}

const accordionTextAnimation = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

// ----------------------------------------------------------------------------------

export default function FAQItem({ item, className }: PropsType) {
  const [expState, setExpState] = useState(false);

  function toggle() {
    setExpState(!expState);
  }

  // ----------------------------------------------------------------------------------

  return (
    <ListItem className={cn(styles.quesItem, className)}>
      <Grid container justifyContent='space-between' className={styles.itemTitleWrap} onClick={toggle}>
        <Grid item>
          <Typography className={styles.itemTitle}>{item.title}</Typography>
        </Grid>

        <IconButton size='large' className={styles.btn}>
          <IconExpand className={cn({ expState })} />
        </IconButton>
      </Grid>

      <AnimatePresence>
        {expState && (
          <motion.div {...accordionTextAnimation}>
            <Typography className={styles.itemInfo}>
              <div style={{ paddingRight: 48 }}>{item.info}</div>
            </Typography>

            {/* <List className={styles.innerList}>
              {item.innerList?.map((inner, index) => (
                <ListItem key={inner.text} className={styles.innerItem}>
                  <ListItemText className={styles.innerText}>
                    <b className={styles.innerIdx}>{index}.</b>
                    <b className={styles.innerText}>{inner.name}</b>
                    {inner.text}
                  </ListItemText>
                </ListItem>
              ))}
            </List> */}
          </motion.div>
        )}
      </AnimatePresence>
    </ListItem>
  );
}
