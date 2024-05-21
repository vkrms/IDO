/**
 * ----------------------------------------------------------------------------------
 * faq.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/faq/faq_item.css';

import { Box, Grid, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';

import IconExpand from '@/assets/img//home/faq/expand.svg';
import IconShrink from '@/assets/img//home/faq/shrink.svg';
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
  innerList: AnwserItem[];
};

// ----------------------------------------------------------------------------------

interface PropsType {
  item: FAQItemData;
}

// ----------------------------------------------------------------------------------

export default function FAQItem({ item }: PropsType) {
  const [expState, setExpState] = useState(false);

  // ----------------------------------------------------------------------------------

  return (
    <ListItem className={styles.quesItem}>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Typography className={styles.itemTitle}>{item.title}</Typography>
        </Grid>
        <Grid item>
          <IconButton size='large' onClick={() => setExpState(!expState)}>
            {expState ? <IconShrink /> : <IconExpand />}
          </IconButton>
        </Grid>
      </Grid>

      {expState && (
        <Box>
          <Box height={56} />
          <Typography className={styles.itemInfo}>{item.info}</Typography>
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
        </Box>
      )}
    </ListItem>
  );
}
