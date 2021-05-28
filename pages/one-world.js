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
import JourneyWP from '../projects/projecksWP/JourneyWP'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useText } from '~/theme/common';


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
          &nbsp;- One-World
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
         <div className={classes.headderImg} ><img src="/images/projects/one-world/oneworld_header.jpg" align="center" width="100%"  alt="App on mobile" /> </div>
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
              One-World website
            </Typography> 
            <Typography variant="h5" align="center">
            <Link color="primary" className={classes.websiteLink} href="https://one-world-inc.com/" target="_blank">one-world-inc.com</Link>
            </Typography>
           
          </section>
          <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
        
          <Typography className={text.paragraph}>
          This is an international pharmaceutical distribution company. They help thire clients throughout the world gain access to urgently needed U.S. FDA medications. Website has general informaion and most impotantly contact information of area representatives. 
          </Typography>
          <Typography className={text.paragraph}>
            <b>My role in this project</b> is WordPress developer. 
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Web technology:
          </Typography>
          <Typography className={text.paragraph}>
          React.js is a greate tool for creating a stanning UI. It is not good for SEO. I decided to use node.js to make it better for serch engins. Next.js is a react framework that alows to create pre-rendere react websites. I upload static pages to a S3 bucket and it helps with preformance and can be mapped by serch engins. 
          </Typography>
          <Typography className={text.paragraph}>
          There is nothing uniq in idea to have a portfolio website. I found a great themplate for a react landing page. It saved a lot of time and learned from a great master who created the template. 
          This one is made by <a href="https://www.behance.net/ilhammeidi" target="_blank">Ilham Meidi</a>. I have purchest it form <a href="https://themeforest.net/" target="_blank">themeforest.net</a>. 
          </Typography>
          <Typography className={text.paragraph}>
          Microsoft Visual Studio Code is a geat IDE and has many plugins to improve codding style and productivity. It is my favoret tool.  
          </Typography>
          <Typography className={text.paragraph}>
          I use Amazon S3 bucket for hosting my static pages and Github for version control.
          </Typography>
           <Typography variant="h6" align="left" color="primary">
          Result:
          </Typography>
          <Typography className={text.paragraph}>
            <ul>
              <li>My website dosn't need to be updated with new version of WordPress.</li>
              <li>I like how easy it is for hiering agents to see if I'm a good mach. </li>
              <li>I got to use styled-components to keep up with the themplate. Before i used only css and scss for styling.</li>
            </ul>

          </Typography>
          <div align="center" width="100%">
            <Link color="primary" className={classes.websiteLink} href="https://one-world-inc.com/" target="_blank">one-world-inc.com</Link>
          </div>
        </Container>
          </main>
          
            <div className={classes.blueWrap}>
              <Container>
              <img src="/images/projects/one-world/oneworld_screenshot.jpg" alt="Juorney screenshot" align="center" width="100%"/><br/><br/>
              <div className={classes.img4decCaption}>one-world-inc.com screenshot </div><br/>
              </Container>
              </div>  
         
          
          <Gallery/>
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
