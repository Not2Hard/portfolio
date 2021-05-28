import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Gallery from '../components/Gallery/Gallery'
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import TFeditor from '../projects/projectsUX/tap_fork/tfeditor.js';

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
  img4decCaption: {
    textAlign: 'center',
    color: '#efefef',
    fontStyle: 'italic',
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
        <div className={classes.headderImg} >
          <img src="/images/projects/tapAndFork/editor_header.jpg" align="center" width="100%"  alt="Editor header" /> 
          </div>
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
              <img src="/images/projects/tapAndFork/editor_tf.jpg" alt="tap and fork" align="center" />
              <br/><br/>
              </Grid>
              <div className={classes.img4decCaption}>Login page </div>
              <br/><br/>
              <img src="/images/projects/tapAndFork/editor1.png" alt="tap and fork" align="center" width="100%"/><br/>
              <div className={classes.img4decCaption}>Tap & Fork web editor screenshot </div><br/>
              <img src="/images/projects/tapAndFork/editor2.png" alt="tap and fork" align="center" width="100%" /><br/>
              <div className={classes.img4decCaption}>Tap & Fork web editor screenshot </div><br/>
              </Container>
              </div>  
          </section>
          <Gallery/>
       
       
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
