import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { cn } from '@/lib/utils/cn';
import FoundersListItem from '@/module/home/team/list_item';
import type { FounderData } from '@/module/home/team/team_list';
import * as styles from '@/module/home/team/team_list.css';
import { Box, Grid, Typography } from '@mui/material';
import cryptoRandomString from 'crypto-random-string';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import type React from 'react';
import { DotButton, useDotButton } from './embla-carousel-dot-btn';

type PropType = {
  slides: FounderData[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  // meaning everything fits in the viewport
  const centered = scrollSnaps.length === 1 ? '--centered' : '';

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className={cn('embla__container', centered)}>
          {slides.map((item) => (
            <div className='embla__slide' key={item.name}>
              <CardContainer className={cn(styles.cardContainer, 'stagger')}>
                <CardBody className='relative group/card'>
                  <Grid item className={styles.cardGrid}>
                    <Box className={styles.header}>
                      <Box className={styles.imgBox}>
                        <CardItem translateZ='60'>
                          <Image
                            src={`/img/home/team/${item.img}`}
                            width={160}
                            height={160}
                            style={{ maxWidth: 160 }}
                            alt=''
                          />
                        </CardItem>
                      </Box>
                    </Box>

                    <CardItem translateZ='30' className='w-full'>
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
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={cryptoRandomString(10)}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
