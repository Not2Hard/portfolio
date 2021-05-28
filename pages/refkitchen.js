import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Gallery from '../components/Gallery/Gallery'
import Notification from '../components/Notification';
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Refugee from '../projects/projectsUX/refugee_kit/Refugee.js';



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
    marginTop: theme.spacing(1),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    }
  },
  blueWrap: {
    // background: '#333333',
    backgroundImage: `linear-gradient(120deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main})`,
    padding: theme.spacing(10, 0),
    },
    headderImg: {
      marginTop: 50,
      maxHeight: 400,
      overflow: 'hidden',
    },
    img4decCaption: {
      textAlign: 'center',
      color: '#efefef',
      fontStyle: 'italic',
    },
    blueWrapImg: {
      margin: 10,
      float: 'left',
      padding: 10,
    },
    clearFix: {
      display: 'block',
      clear: 'both',
    }
  
}));

function RefKitchen(props) {
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
        <div className={classes.headderImg} >
          <img src="/images/projects/refugeeKit/ref_head.jpg" align="center" width="100%"  alt="App on mobile" /> 
        </div>
        <main className={classes.containerWrap}>
          <Refugee/> 
         
          
        </main>
        <section>
          <div className={classes.blueWrap}>
          <Container>
            <Grid container justify="center" alignItems="center" className={classes.root} spacing={3}>
              <Grid md={3} item>
              <img src="/images/projects/refugeeKit/ref_signin.svg" align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src="/images/projects/refugeeKit/ref_recipes.svg" align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src="/images/projects/refugeeKit/ref_classes.svg" align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src="images/projects/refugeeKit/ref_recipe.svg" align="center" width="100%" alt="App on mobile" />
              </Grid>
            </Grid>
            
            <br/>
            <Grid container justify="center" alignItems="center" className={classes.root} spacing={3}>
              <Grid md={3} item>
              <img src="/images/projects/refugeeKit/ref_class.svg" align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src="images/projects/refugeeKit/ref_recipe.svg" align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src="/images/projects/refugeeKit/ref_chef.svg" align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src="/images/projects/refugeeKit/ref_country.svg" align="center" width="100%" alt="App on mobile" />
              </Grid>
          </Grid>
          <div className={classes.img4decCaption}>Refugee Kitchen application design </div>
            </Container>
        </div>  
        </section>
        <br /><br /><br /><br />
        <Gallery/>
        
        {/* <Notification /> */}
      </div>
    </React.Fragment>
  );
}

RefKitchen.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

RefKitchen.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(RefKitchen);
