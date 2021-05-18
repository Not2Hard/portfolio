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
import MemoryApp from '../projects/projectsJS/memoryGame/memoryApp';



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
    padding: 80,
    
    },
  containerWrap: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    }
  },
}));

function MemoryGame(props) {
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
             
              <MemoryApp/>
             
              </div>  
          </section>
         
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
            Stock Board
            </Typography> 
            
          </section>
          <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
        
          <Typography className={text.paragraph}>
          This is a small personal project. My daughter likes to play memory game.  <br/>
          I wanted to meke a game specially for her. She likes to play with her favorite Little pet Shop.  <br/>
          Small kids confuse dirrection of letters a lot. I used the letters that are harder for her to make her remember which way is "b", "d, "q" and "s".
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

MemoryGame.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

MemoryGame.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(MemoryGame);
