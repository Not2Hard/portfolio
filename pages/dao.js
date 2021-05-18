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
import { useText } from '~/theme/common';
import Container from '@material-ui/core/Container';
import DaoApp from '../projects/projectsJS/DaoQuotes/DaoApp';



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

function DaoProject(props) {
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
         <section>
            <div className={classes.blueWrap}>
              <Container>
              <DaoApp/>
              </Container>
              </div>  
          </section>
         
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
            DAO DE JING quotes project
            </Typography> 
            
          </section>
          <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
        
          <Typography className={text.paragraph}>
          New school of martial arts was opening in Dallas, GA. <br/>
          Owner objectives:
          <ul>
                <li>To be within 1-5 in Google or Martial Arts Acworth GA, Martial Arts Dallas GA, and Martial Arts Kennesaw GA</li>
                <li>Create a unique and successful brand</li>
                <li>Have one place for all info about classes</li>
                <li>Create a simple signup and payment process online</li>
              </ul>
          </Typography>
          {/* <Typography className={text.paragraph}>
            <b>My role in this project</b> - I was hired to create a branding, website and give some essential graphics support.
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Desk research:
          </Typography>
          <Typography className={text.paragraph}>
          I made a detailed analysis of existing martial arts schools in Dalas and Acworth, GA. Most successful businesses were using industry specialized marketing companies. The targeted auditory was parents looking for kids classes and adult weight loss programs. 
          </Typography> */}
          </Container>
         
          </main>
          <section>
            <div className={classes.blueWrap}>
              <Container>
              
              </Container>
              </div>  
          </section>
          
          <GallerySmall/>
        
        {/* <Notification /> */}
      </div>
    </React.Fragment>
  );
}

DaoProject.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

DaoProject.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(DaoProject);
