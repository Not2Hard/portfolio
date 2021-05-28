import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Gallery from '../components/Gallery/Gallery'
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import { useText } from '~/theme/common';
import JourneyWP from '../projects/projecksWP/JourneyWP'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


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
    },
  },
  img4decCaption: {
    textAlign: 'center',
    color: '#efefef',
    fontStyle: 'italic',
  }
}));

function NVMAapp(props) {
  const classes = useStyles();
  const text = useText();
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
         <div className={classes.headderImg} ><img src="/images/projects/synovis/synovis_header.jpg" align="center" width="100%"  alt="App on mobile" /> </div>
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
            Synovis Micro website
            </Typography> 
            <Typography variant="h5" align="center">
            <Link color="primary" className={classes.websiteLink} href="https://www.synovismicro.com/" target="_blank">SynovisMicro.com</Link>
            </Typography>
           
          </section>
          <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
        
          <Typography className={text.paragraph}>
          Synovis Micro is a trusted resource of products and suplyes for microsergeons and hospitales. They are subsidiary of Buxter. Synovis Micro nedded a new website that would work on Baxter web servers. The structure and functionality was inhereted from previews version. It had to be pure JavaScript and html and css.  
          </Typography>
          <Typography className={text.paragraph}>
            <b>My role in this project</b> is front end developer. 
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Web technology:
          </Typography>
          <Typography className={text.paragraph}>
          This website is build on HTML. It uses only JavaScript and CSS for styling and functionality. It was created in Microsoft Visual Studio Code. 
          </Typography>
          <Typography className={text.paragraph}>
         Amazon S3 bucket is a public cloud storage resource.I use it for hosting a staging version of the website. When it is tested and approved. I send the sourse files to Baxter IT team.  
          </Typography>
           <Typography variant="h6" align="left" color="primary">
          Result:
          </Typography>
          <Typography className={text.paragraph}>
            <a></a>
          This is an ongoing project. Changes to representatives data are made each month. It would benefit from using a content managing system a lot. As a temporary solution it works fine from Baxter servers. The map makes it easy to find representatives all over the world.
          </Typography>
          <div align="center" width="100%">
            <Link color="primary" className={classes.websiteLink} href="https://journeyswiththemessiah.org/" target="_blank">JourneysWithTheMessiah.org</Link>
          </div>
        </Container>
          </main>
          
            <div className={classes.blueWrap}>
              <Container>
              <img src="/images/projects/synovis/synovis_screenshot.jpg" alt="Juorney screenshot" align="center" width="100%"/><br/><br/>
              <div className={classes.img4decCaption}>SynovisMicro.com screenshot </div><br/>
              </Container>
              </div>  
         
          
          <Gallery/>
        
        {/* <Notification /> */}
      </div>
    </React.Fragment>
  );
}

NVMAapp.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

NVMAapp.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(NVMAapp);
