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
          This is a small personal project. I love reading Dao de Jing. It changes my perspection on any problem.  <br/>
          It is proven by psicologists that randomness brings more dopomine than predictable things. <br/>
          If I doubt my desision or just need to get in tuch with something ald and wise, I take a random quote from book or my little app.
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Used technologies:
          </Typography>
          <Typography className={text.paragraph}>
          It is a symple app build with React.js. <br/> I exersized to use class components the old fasion way.<br/>
          No styling librery was used just plain scss from scruch. <br/>
          </Typography>
         
          </Container>
         
          </main>
          <section>
            <div className={classes.blueWrap}>
            <Container alignItems="center">
            <img src="/images/projects/food_lables/gold.svg" alt="tap and fork" align="center" width="90%"/><br/>
              <div className={classes.img4decCaption}>Tap & Fork web editor screenshot </div><br/>
              <img src="/images/projects/food_lables/bordo.svg" alt="tap and fork" align="center" width="90%"/><br/>
              <div className={classes.img4decCaption}>Tap & Fork web editor screenshot </div><br/>
            </Container>
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
