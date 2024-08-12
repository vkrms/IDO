/**
 * ----------------------------------------------------------------------------------
 * ido_details.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/team/team_list.css';

import { Box, Typography } from '@mui/material';

import AppearList from '@/components/ui/appear-list';
import EmblaCarousel from '@/components/ui/embla-carousel';
import type { AlignmentOptionType } from 'node_modules/embla-carousel/esm/components/Alignment';
import type { ScrollContainOptionType } from 'node_modules/embla-carousel/esm/components/ScrollContain';

// ----------------------------------------------------------------------------------
export type TeamData = {
  title: string;
  list: FounderData[];
};

// ----------------------------------------------------------------------------------

export type FounderData = {
  img: string;
  name: string;
  role: string;
  info: { title: string; text: string }[];
};

// ----------------------------------------------------------------------------------

interface PropsType {
  list: TeamData[];
}
// ----------------------------------------------------------------------------------

const emblaOptions = {
  align: 'start' as AlignmentOptionType,
  dragFree: true,
  containScroll: 'keepSnaps' as ScrollContainOptionType,
  breakpoints: {
    '(min-width: 1040px)': { active: false },
  },
};

export default function TeamList({ list }: PropsType) {
  return (
    <Box>
      {list.map((item) => (
        <Box key={item.title} className={styles.teamItem}>
          <Typography variant='h3' className={styles.title}>
            {item.title}
          </Typography>

          <AppearList>
            <EmblaCarousel slides={item.list} options={emblaOptions} />
          </AppearList>
        </Box>
      ))}
    </Box>
  );
}
