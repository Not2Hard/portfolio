import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import GallerySmall from '../components/Gallery/GallerySmall'
import Notification from '../components/Notification';
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import TapFork from '../components/Projectsux/Tf.js'
import Container from '@material-ui/core/Container';
import tfmock from '../public/images/profile/tf-images/tapandfork.jpg';

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
  containerWrap: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    }
  },
  blueWrap: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main})`,
    padding: theme.spacing(10, 0)
    },
}));

function TFapp(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir, t } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.profile.name }
          &nbsp; - Blank page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
              Tap & Fork mobile app
            </Typography>
            
          </section>
          <TapFork/> 
        </main>
        <section>
            <div className={classes.blueWrap}>
              <Container maxWidth="lg">
              <a href="/tflooks.pdf" target="_blank"><img src={tfmock} alt="tap and fork" align="center" width="100%"/></a>
              </Container>
              </div>  
          </section>
          <GallerySmall/>
        {/* <Notification /> */}
      </div>
    </React.Fragment>
  );
}

TFapp.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

TFapp.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(TFapp);
