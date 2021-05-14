import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import GallerySmall from '../components/Gallery/GallerySmall'
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import NVmartial from '../components/ProjectsWP/NVmartial.js'
import Container from '@material-ui/core/Container';
import nvweb from '../public/images/profile/wp-images/nv-web.jpg';
import nvwin from '../public/images/profile/wp-images/nv-windows.jpg';
import nvadd1 from '../public/images/profile/wp-images/nv-add1.jpg';
import nvadd2 from '../public/images/profile/wp-images/nv-add2.jpg';
import header from '../public/images/profile/wp-images/nv_head.jpg';

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
    padding: theme.spacing(10, 0),
    
    },
  containerWrap: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    }
  },
}));

function AWSmap(props) {
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
         <div className={classes.headderImg} ><img src={header} align="center" width="100%"  alt="App on mobile" /> </div>
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
              New Vision Martial Arts
            </Typography> 
            
          </section>
          <NVmartial/> 
          </main>
          <section>
            <div className={classes.blueWrap}>
              <Container>
              <img src={nvweb} alt="tap and fork" align="center" width="100%"/><br/><br/>
              </Container>
              </div>  
          </section>
          
          <GallerySmall/>
        
        {/* <Notification /> */}
      </div>
    </React.Fragment>
  );
}

AWSmap.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

AWSmap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(AWSmap);
