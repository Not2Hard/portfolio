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
// import awsmap from '../public/images/profile/ux-images/map.jpg';
// import awsheader from '../public/images/profile/ux-images/aws_header.jpg';

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
    padding: theme.spacing(10, 0)
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
    color: '#aaaaaa',
    fontStyle: 'italic',
  }
}));

function AWSmap(props) {
  const classes = useStyles();
  const text = useText();
  const { onToggleDark, onToggleDir, t } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.profile.name }
          &nbsp; - Amazon services map 
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
         <div className={classes.headderImg} ><img src="/images/projects/aws_map/aws_header.jpg" align="center" width="100%"  alt="App on mobile" /> </div>
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
            Amazon services map 
            </Typography>
            
          </section>
          <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
        
          <Typography className={text.paragraph}>
          Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 165 fully featured services from data centers globally. Millions of customers —including the fastest-growing startups, largest enterprises, and leading government agencies—use AWS to power their infrastructure, become more agile, and lower costs.
          </Typography>
          <Typography className={text.paragraph}>The number of AWS services has grown exponentially over the last several years. Today, even a relatively simple application likely uses dozens of different AWS services. These services could be used in two or more different regions for redundancy and disaster recovery. It is easy to forget that a service is running in a different region. As a result the bill for those services could be unexpected and big.
          </Typography>
          <Typography className={text.paragraph}>
            While AWS provides various tools to monitor infrastructure costs, it may be difficult to have a comprehensive view on all provisioned resources across different regions and different AWS accounts. The issue  becomes even worse if there are several (potentially geographically dispersed) teams involved.
            </Typography>
          <Typography className={text.paragraph}>The “AMAZON SERVICES MAP” project is here to fill the gap. It provides a single comprehensive view of all resources provisioned inside a set of AWS accounts across all regions helping to spot abandoned resources, enforce deployment policies, and  predict the overall monthly bill.
          </Typography>
          <Typography className={text.paragraph}>
            <b>My role in this project</b> is UX and Graphic designer of the application. 
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Desk research:
          </Typography>
          <Typography className={text.paragraph}>
          I had to get a little familiar with the AWS website. This application should look consistent with colors and styles. I created an account and even started using S3 bucket service and route 53 service.
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          User research:
          </Typography>
          <Typography className={text.paragraph}>This application is for aws developers. I didn't have to create personas for this project. My personal contacts are mostly developers :)
          </Typography>
          <Typography className={text.paragraph}>
          It seemed logical to use a spreadsheet data presentation. Many developers I know don't like spreadsheets, though.
          </Typography> 
          <Typography className={text.paragraph}>
          Bubble charts are much more fun and help to prioritise your actions. I decided to combine bubble chart ideas with cards.
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Prototype:
          </Typography>
         
          <Typography className={text.paragraph}>
          Every service in every region will be shown in a separate card. On the front will be information at glance. On click the card is turning and shows details. 
          </Typography>
          <Typography className={text.paragraph}>
          The size of the card shows how many items are running and the title shows what servis it is. From a quick glance a user can see where the biggest bill will come from.
          </Typography>
          <img src="/images/projects/aws_map/map.jpg" align="center" width="100%" alt="Synovis representatives map" className={classes.img4dec}/> 
            <div className={classes.img4decCaption}>Prototype for aws services map </div>
           <Typography variant="h6" align="left" color="primary">
          Result:
          </Typography>
          <Typography className={text.paragraph}>
            <a></a>
            It is a useful application with a nice data representation.  Click here for a <Link color="primary" className={classes.websiteLink} href="http://cloud-providence-website.s3-website-us-west-2.amazonaws.com/" target="_blank">demo account.</Link>
          </Typography>
          <div align="center" width="100%">
           
          </div>
        </Container>
          </main>
          <section>
            <div className={classes.blueWrap}>
              <Container maxWidth="lg">
              <img src="/images/projects/aws_map/aws_screenshot.jpg" alt="aws accounts map" width="100%"/>
              <div className={classes.img4decCaption}>Screenshot from demo account map </div>
              </Container>
              </div>  
          </section>
          
          <Gallery/>
        
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
