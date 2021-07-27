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
    },
    
  },
  img4decCaption: {
    textAlign: 'center',
    color: '#efefef',
    fontStyle: 'italic',
  }
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
          &nbsp; - Kefir Label design
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
            Kefir Label Design
            </Typography> 
            
          </section>
          <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
          <Typography className={text.paragraph}>
          This was a label design project for <a href="http://www.goldstarusa.com/" target="_blank">International Gold Star, Inc</a>. Pink Cow was the name of the new line. They planned to make 6 flavors and needed them in both Russian and English languages.   
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Used technologies:
          </Typography>
          <Typography className={text.paragraph}>
          I used Adobe Illustrator to create and edit the design.  
          </Typography>
         
          </Container>
         
          </main>
          <section>
            <div className={classes.blueWrap}>
            <Container >
            <img src="/images/projects/food_lables/kefir1-3_4.png" alt="Gold label option 1." align="center" width="100%"/><br/>
              <img src="/images/projects/food_lables/kefir4-6.png" alt="Gold label option 2." align="center" width="100%"/><br/>
              <div className={classes.img4decCaption}>Labels for kefir. </div><br/>
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
