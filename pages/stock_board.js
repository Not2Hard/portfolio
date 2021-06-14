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
import StockFrame from '../projects/projectsJS/stockBoard/StockFrame'
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
    padding: 80,
    
    },
    img4decCaption: {
      textAlign: 'center',
      color: '#efefef',
      fontStyle: 'italic',
    },
  containerWrap: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    },
  },
}))

function StockBoard(props) {
  const classes = useStyles()  
  const text = useText();
  const { onToggleDark, onToggleDir, t } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.profile.name }
          &nbsp; - Stock Board
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
         <img src="/images/projects/stock_board/stock_header.jpg" alt="tap and fork" align="center" width="100%" /><br/>
             
           
          </section>
         
        <main className={classes.containerWrap}>
         
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
            Stock Board
            </Typography> 
            <Typography variant="h5" align="center">
            <Link color="primary" className={classes.websiteLink} href="http://mindover.cloud.s3-website.us-east-2.amazonaws.com/" target="_blank">Stock Board web app</Link>
           </Typography>
          </section>
          <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
          <Typography className={text.paragraph}>
          This is a small personal project. I though it would be nice to have a board that would show all the stocks that I bought on one page.  <br/>
          I don't have to login or save anyting. I can see what is going on in one sight.   <br/>
          </Typography>
          <Typography className={text.paragraph}>
            <b>My role in this project</b> is UI developer. 
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Used technologies:
          </Typography>
          <Typography className={text.paragraph}>
          <a href="https://polygon.io/" target="_blank">Polygon.io</a> is the data source for this project. To show the data in beutiful charts <a href="https://www.tradingview.com/" target="_blank">TradingView </a>charts wrere used. I used Polygon.io <a href="https://github.com/polygon-io/tradingview-adapter">TradingView Adapter</a> as an easy way to cnnect them.<br/>
          </Typography>
          <Typography className={text.paragraph}>
          <a href="https://github.com/sheaivey/react-axios" target="_blank">Axios Component</a> for React with child function callback was utilised in this project to render async requests. <br/>
          </Typography>
          <Typography className={text.paragraph}>
          I used <a href="https://bulma.io/" target="_blank">Bulma</a> css framework for styling.<br/>
          </Typography>
          <Typography className={text.paragraph}>
           <a href="https://github.com/react-grid-layout/react-grid-layout" target="_blank">React-Grid-Layout</a> is a grate way to make grid of elements that are scalable and have drug and drop functionality.<br/>
          </Typography>
          <Typography className={text.paragraph}>
           <a href="https://github.com/maslianok/react-resize-detector" target="_blank">React Resize Detector</a> was used to obtaine the size of each chart and save it together with stock name and layout in lockal storege.<br/>
          </Typography>
              <img src="/images/projects/stock_board/stock_board.jpg" alt="tap and fork" align="center" width="100%" /><br/>
              <div className={classes.img4decCaption}>Stock Board screenshot </div><br/>
            
         
          </Container>
         
          </main>
          <section>
          <div className={classes.blueWrap}>     
              <StockFrame  source="http://mindover.cloud.s3-website.us-east-2.amazonaws.com/"/>
              </div>  
            
          </section>
          
          <Gallery/>
          
      </div>
    </React.Fragment>
  );
}

StockBoard.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

StockBoard.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(StockBoard)
