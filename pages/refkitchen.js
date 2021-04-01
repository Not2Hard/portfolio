import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import GallerySmall from '../components/Gallery/GallerySmall';
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import Refugee from '../components/Projectsux/Refugee.js';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import refhead from '../public/images/profile/ref_head.jpg'

import signin from '../public/images/profile/ref_signin.svg';
import classlist from '../public/images/profile/ref_classes.svg';
import aboutclass from '../public/images/profile/ref_class.svg';
import country from '../public/images/profile/ref_country.svg';
import recipe from '../public/images/profile/ref_recipe.svg';
import recipes from '../public/images/profile/ref_recipes.svg';
import chef from '../public/images/profile/ref_chef.svg';



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
        <div className={classes.headderImg} ><img src={refhead} align="center" width="100%"  alt="App on mobile" /> </div>
        <main className={classes.containerWrap}>
          <Refugee/> 
         
          
        </main>
        <section>
          <div className={classes.blueWrap}>
          <Container>
            <Grid container justify="center" alignItems="center" className={classes.root} spacing={3}>
              <Grid md={3} item>
              <img src={signin} align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src={signin} align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src={classlist} align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src={recipes} align="center" width="100%" alt="App on mobile" />
              </Grid>
            </Grid>
            <br/>
            <Grid container justify="center" alignItems="center" className={classes.root} spacing={3}>
              <Grid md={3} item>
              <img src={aboutclass} align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src={recipe} align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src={chef} align="center" width="100%" alt="App on mobile" />
              </Grid>
              <Grid md={3} item>
              <img src={country} align="center" width="100%" alt="App on mobile" />
              </Grid>
          </Grid>
            </Container>
        </div>  
        </section>
        <br /><br /><br /><br />
        <GallerySmall/>
        
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
