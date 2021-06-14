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
import Container from '@material-ui/core/Container';
import DaoApp from '../projects/projectsJS/daoQuotes/DaoApp';
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
          &nbsp; - Dao quotes project
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
            Dao De Jing quotes
            </Typography> 
            <Typography variant="h5" align="center">
            <Link color="primary" className={classes.websiteLink} href="http://daoquotes.s3-website.us-east-2.amazonaws.com/" target="_blank">Dao quotes app</Link>
            </Typography>
          </section>
          <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
        
          <Typography className={text.paragraph}>
          This is a small personal project. I love reading Dao de Jing. It changes my perspective on any problem. <br/>
          It is proven by psychologists that randomness brings more dopamine than predictable things. Sometimes it feels good to see a random idea.<br/>
          </Typography>
        
          <Typography className={text.paragraph}>
          When I doubt my decision or just need to get in touch with someone old and wise, I take a random quote from this book or use my little app. I can even take it as a sign or divination :)
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Used technologies:
          </Typography>
          <Typography className={text.paragraph}>
          It is a symple app built with React.js. <br/> 
          I used class components the old fashioned way.<br/>
          No styling library was used, just plain SCSS from scratch. <br/>
          </Typography>
         
          </Container>
         
          </main>
          <section>
            <div className={classes.blueWrap}>
              
              </div>  
          </section>
          
          <Gallery/>
        
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
