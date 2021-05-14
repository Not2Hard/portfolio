import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import GallerySmall from '../components/Gallery/GallerySmall'
import Notification from '../components/Notification';
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import TFeditor from '../components/Projectsux/tfeditor.js';
import edheader from '../public/images/profile/ux-images/editor_header.jpg';
import tfmock from '../public/images/profile/ux-images/tapandfork.jpg';

import ed_login from '../public/images/profile/ux-images/editor_tf.jpg';
import ed1 from '../public/images/profile/ux-images/editor1.jpg';
import ed2 from '../public/images/profile/ux-images/editor2.jpg';

import Container from '@material-ui/core/Container';

const sectionMargin = margin => (margin * 10);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing())
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing())
  },
  blueWrap: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main})`,
    padding: theme.spacing(10, 0)
    },
  containerWrap: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    }
  },
}));

function TFwebeditor(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir, t } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.profile.name }
          &nbsp; - Graphic editor for Tap & Fork 
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
        <div className={classes.headderImg} ><img src={edheader} align="center" width="100%"  alt="App on mobile" /> </div>
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
            Graphic editor for Tap & Fork 
            </Typography>
            
          </section>
          <TFeditor/> 
          </main>
          <section>
            <div className={classes.blueWrap}>
              <Container alignItems="center">
              <Grid container justify = "center">
              <img src={ed_login} alt="tap and fork" align="center" /><br/><br/>
              </Grid>
              <br/><br/>
              <img src={ed1} alt="tap and fork" align="center" width="100%"/><br/><br/>
              <img src={ed2} alt="tap and fork" align="center" width="100%" /><br/><br/>
              </Container>
              </div>  
          </section>
          <GallerySmall/>
       
        {/* <Notification /> */}
      </div>
    </React.Fragment>
  );
}

TFwebeditor.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

TFwebeditor.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(TFwebeditor);
