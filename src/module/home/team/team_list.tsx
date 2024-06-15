/**
 * ----------------------------------------------------------------------------------
 * ido_details.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/team/team_list.css';

import { Box, Typography } from '@mui/material';

import type { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils/cn';
import AppearList from '@/components/ui/appear-list';
import EmblaCarousel from '@/components/ui/embla-carousel';

// ----------------------------------------------------------------------------------
export type TeamData = {
  title: string;
  list: FounderData[];
};

// ----------------------------------------------------------------------------------

export type FounderData = {
  img: StaticImageData;
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
  align: 'start',
  dragFree: true,
  containScroll: 'keepSnaps',
  breakpoints: {
    '(min-width: 1040px)': { active: false }
  }
}

export default function TeamList({ list }: PropsType) {
  return (
    <Box>
      {list.map((item) => (
        <Box key={item.title} className={styles.teamItem}>
          <Typography variant="h3" className={styles.title}>{item.title}</Typography>

          {/* todo: stagger animation */}
          <AppearList>
            <EmblaCarousel slides={item.list} options={emblaOptions} />
          </AppearList>
          {/* <Grid container className={cn(styles.list)}>
          </Grid> */}

          {/* {item.list.map((item) => (
            <CardContainer className={cn(styles.cardContainer, 'stagger')} key={item.name}>
              <CardBody className="relative group/card">
                <Grid item className={styles.cardGrid}>

                  <Box className={styles.header}>
                    <Box className={styles.imgBox}>

                      <CardItem translateZ="60">
                        <Image src={`/img/home/team/${item.img}`} width={160} height={160} style={{ maxWidth: 160 }} alt='' />
                      </CardItem>

                    </Box>
                  </Box>
                
                  <CardItem translateZ="30" className="w-full">
                    <Typography className={styles.name}>{item.name}</Typography>
                    <Typography className={styles.role}>{item.role}</Typography>
                  </CardItem>

                  <CardItem translateZ={10}>
                    <Grid container className={styles.infoList}>
                      {item.info.map((info) => (
                        <FoundersListItem info={info} key={info.title} />
                      ))}
                    </Grid>
                  </CardItem>

                  </Grid>
                </CardBody>
            </CardContainer>
          ))} */}



        </Box>
      ))}
    </Box>
  );
}
