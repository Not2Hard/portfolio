import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import brand from '~/public/text/brand';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './about-style';


function About(props) {
  const theme = useTheme();
  const classes = useStyles();
  const text = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = props;
  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12} />
          <Grid item lg={9} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <figure>
                    <a target="_blank" href="https://www.youracclaim.com/badges/d7ffc9a0-7f71-4826-8ef6-64cad9538861?source=linked_in_profile"><img src="/images/profile/MTAJavaScript.png" alt="MS 98-382 exam" /></a>
                  </figure>
                  <Typography component="p">Microsoft</Typography>
                  <Typography variant="h5" className={text.subtitle}>Certified</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    {/* <a target="_blank" href="/Natalia_Sergeeva_UIdev.pdf"><img src="/images/profile/resume.jpg" alt="resume icon" /></a> */}
                    <a target="_blank" href="https://s3.us-east-2.amazonaws.com/sergeeva.us/NataliaS_Resume_novo.pdf"><img src="/images/profile/resume.jpg" alt="resume icon" /></a>
                  </figure>
                  <Typography component="p">see my</Typography>
                  <Typography variant="h5" className={text.subtitle}>Resume</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <a target="_blank" href="https://github.com/nata-se"><img src="/images/profile/github.jpg" alt="github icon" /></a>
                  </figure>
                  <Typography component="p">see my</Typography>
                  <Typography variant="h5" className={text.subtitle}>GitHub</Typography>
                </div>
                 
              </div>
             
              <Hidden mdUp>
                <div className={classes.socmed}>
                  <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-social-facebook" />
                  </IconButton>
                  <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-social-twitter" />
                  </IconButton>
                  <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-social-google" />
                  </IconButton>
                  <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-social-linkedin" />
                  </IconButton>
                </div>
                <Typography variant="h5">
                  {t('common:profile-landing.banner_desc')}
                </Typography>
              </Hidden>
              <Paper className={classes.photo}>
                <figure>
                  <img src={brand.profile.avatar} alt="avatar" />
                </figure>
                <span className={classes.frame} />
              </Paper>
            </div>
            <div className={classes.line} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(About);
