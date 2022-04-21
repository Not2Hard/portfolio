import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import ReactWOW from 'react-wow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import './logoR.css'
import brand from '~/public/text/brand';
// import logo from '~/public/images/profile/reactlogo.png';

const reactLogo = "~/public/images/profile/reactlogo.png"

function Timeline(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();

  const { t } = props;

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [play, setPlay] = useState(false);


  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 200);
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            <Hidden mdDown>
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.profile.name}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={clsx(classes.title, text.subtitle)}>
                  {t('common:profile-landing.timeline_experience')}
                </Typography>
                <ul>
                <li>
                    <ReactWOW animation="fadeInLeftShort" delay="0.2s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Web developer</Typography>
                        <Typography gutterBottom>Vitamin D creative</Typography>
                        <Typography className={classes.time}>2009 - Present</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" delay="0.2s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>UX designer</Typography>
                        <Typography gutterBottom>Tap and Fork</Typography>
                        <Typography className={classes.time}> 2016 - 2017</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={100} delay="0.3s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Banner developer</Typography>
                        <Typography gutterBottom>AT&T</Typography>
                        <Typography className={classes.time}>2008 - 2009</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={200} delay="0.4s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Web 	&amp; graphic developer</Typography>
                        <Typography gutterBottom>Seals 	&amp; Stamps </Typography>
                        <Typography className={classes.time}>2007 - 2008</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={300} delay="0.5s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Web 	&amp; graphic developer</Typography>
                        <Typography gutterBottom>Active studio (Russia)</Typography>
                        <Typography className={classes.time}>2002-2005</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" className={clsx(classes.title, text.subtitle)}>
                  {t('common:profile-landing.timeline_skill')}
                </Typography>
                <ReactWOW animation="fadeIn" delay="0.4s" duration="0.3s" callback={handlePlay}>
                  <ul>
                  <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-world-outline" />
                        <Typography variant="h6" className={text.subtitle2}>HTML & CSS </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-social-javascript" />
                        <Typography variant="h6" className={text.subtitle2}>JavaScript</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                      {/* <i className="ion-code-working" /> */}
                        <img src="/images/profile/reactlogo.png" className="logoRAnim" alt="logo" />
                        <Typography variant="h6" className={text.subtitle2}>ReactJS</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-social-wordpress-outline" />
                        <Typography variant="h6" className={text.subtitle2}>WordPrss</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 70 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-camera-outline" />
                        <Typography variant="h6" className={text.subtitle2}>Adobe CS for Graphic design </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-compose-outline" />
                        <Typography variant="h6" className={text.subtitle2}>Adobe XD & Sketch for prototyping</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 60 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-social-github-outline" />
                        <Typography variant="h6" className={text.subtitle2}>GitHub</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 50 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                  </ul>
                </ReactWOW>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Timeline.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(Timeline);
