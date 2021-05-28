import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Carousel from 'react-slick';
import clsx from 'clsx';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';

const portfolio = [
  {
    img: imgAPI.profile[4],
    title: 'Tap & Fork app',
    link: 'tap_and_fork',
    size: 'short',
    category: 'ux'
  },
  {
    img: imgAPI.profile[7],
    title: 'New Vision Martial Art',
    link: 'nv_martialarts',
    size: 'short',
    category: 'WordPress'
  },
  {
    img: imgAPI.profile[5],
    title: 'AWS account overview app',
    link: 'aws_map',
    size: 'short',
    category: 'ux'
  },
  {
    img: imgAPI.profile[16],
    title: 'Synovis micro website',
    link: 'one-world',
    size: 'short',
    category: 'JavaScript'
  },
  {
    img: imgAPI.profile[12],
    title: 'Kefir label design',
    link: 'kefir',
    size: 'short',
    category: 'Graphic design'
  },{
    img: imgAPI.profile[15],
    title: 'One World website',
    link: 'one-world',
    size: 'short',
    category: 'WordPress'
  },
  {
    img: imgAPI.profile[3],
    title: 'Tap & Fork ad editor',
    link: 't&f_editor',
    size: 'short',
    category: 'ux'
  },
  {
    img: imgAPI.profile[8],
    title: 'Dao',
    link: 'dao',
    size: 'short',
    category: 'JavaScript'
  },
  {
    img: imgAPI.profile[14],
    title: 'Journey with the Messiah website',
    link: 'journey',
    size: 'short',
    category: 'WordPress'
  },
  {
    img: imgAPI.profile[9],
    title: 'Memory Game',
    link: 'memory_game',
    size: 'short',
    category: 'JavaScript'
  },
  {
    img: imgAPI.profile[6],
    title: 'Refugee kitchen',
    link: 'refkitchen',
    size: 'short',
    category: 'ux'
  },
  {
    img: imgAPI.profile[11],
    title: 'Stock Board',
    link: 'stock_board',
    size: 'short',
    category: 'JavaScript'
  },
  {
    img: imgAPI.profile[17],
    title: 'One World website',
    link: 'one-world',
    size: 'short',
    category: 'JavaScript'
  },
  {
    img: imgAPI.profile[13],
    title: 'Sausage label design',
    link: 'salami',
    size: 'short',
    category: 'Graphic design'
  },
];

function GallerySmall(props) {
  const classes = useStyle();
  const { t } = props;
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(true);
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    setData(portfolio);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  const filterChildren = name => {
    if (name !== 'all') {
      const filteredData = portfolio.filter(item => item.category === name);
      setData(filteredData);
      setFilter(name);
    } else {
      setData(portfolio);
      setFilter('all');
    }

    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 700);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Title>
         other
          <strong>
           Projects
          </strong>
        </Title>
        <div className={classes.filter}>
          <Button
            onClick={() => filterChildren('all')}
            className={filter === 'all' ? classes.selected : ''}
          >
            All
          </Button>
          <Button
            onClick={() => filterChildren('cat1')}
            className={filter === 'cat1' ? classes.selected : ''}
          >
            Category 1
          </Button>
          <Button
            onClick={() => filterChildren('Graphic design')}
            className={filter === 'v' ? classes.selected : ''}
          >
           Graphic design
          </Button>
          <Button
            onClick={() => filterChildren('JavaScript')}
            className={filter === 'JavaScript' ? classes.selected : ''}
          >
            JavaScript
          </Button>
          <Button
            onClick={() => filterChildren('WordPress')}
            className={filter === 'WordPress' ? classes.selected : ''}
          >
            WordPress
          </Button>
          <Button
            onClick={() => filterChildren('ux')}
            className={filter === 'ux' ? classes.selected : ''}
          >
            UX
          </Button>
        </div>
        <Hidden xsDown>
          <div className={classes.massonry}>
            {data.map((item, index) => (
              <div
                className={clsx(classes.item, isLoaded && classes.loaded)}
                key={index.toString()}
                style={{ transitionDuration: index / 4 + 's' }}
              >
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size='short'
                />
              </div>
            ))}
          </div>
          {data.length < 1 && <Typography variant="button" component="p" align="center">{t('common:profile-landing.gallery_nodata')}</Typography>}
        </Hidden>
        <Hidden smUp>
          <div className={classes.massonry}>
              {data.map((item, index) => (
                <div
                  className={clsx(classes.item, isLoaded && classes.loaded)}
                  key={index.toString()}
                  style={{ transitionDuration: index / 4 + 's' }}
                >
                  <ImageThumbCard
                    img={item.img}
                    title={item.title}
                    link={item.link}
                    size='short'
                  />
                </div>
              ))}
            </div>
          {/* <Carousel {...settings}>
            {data.map((item, index) => (
              <div
                className={classes.itemCarousel}
                key={index.toString()}
              >
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size='short'
                />
              </div>
            ))}
          </Carousel> */}
        </Hidden>
      </Container>
    </div>
  );
}

GallerySmall.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(GallerySmall);
