/**
 * ----------------------------------------------------------------------------------
 * ido_details.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/team/team_list.css';

import { Box, CardMedia, Grid, Typography } from '@mui/material';

import FoundersListItem from '@/module/home/team/list_item';
import type { StaticImageData } from 'next/image';

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


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

export default function TeamList({ list }: PropsType) {
  return (
    <Box>
      {list.map((item) => (
        <Box key={item.title} className={styles.teamItem}>
          <Typography className={styles.title}>{item.title}</Typography>

            <Grid container className={styles.list}>
              {item.list.map((item) => (
                <CardContainer className="card-container">
                  <CardBody className="relative group/card lookiehere text-white">
                    <Grid item key={item.name} flexBasis={352} className={styles.bar}>

                      <Box className={styles.header}>
                        <Box className={styles.imgBox}>

                          <CardItem translateZ="60">
                            <CardMedia component='img' image={item.img.src} width={160} height={160} sx={{ maxWidth: 160 }} />
                          </CardItem>

                        </Box>
                      </Box>
                    
                      <CardItem translateZ="30" className="w-full">
                        <Typography className={styles.name}>{item.name}</Typography>
                        <Typography className={styles.role}>{item.role}</Typography>
                      </CardItem>

                        <Grid container className={styles.infoList}>
                          {item.info.map((info) => (
                            <FoundersListItem info={info} key={info.title} />
                          ))}
                        </Grid>

                      </Grid>
                    </CardBody>
                  </CardContainer>
              ))}
            </Grid>
        </Box>
      ))}
    </Box>
  );
}
