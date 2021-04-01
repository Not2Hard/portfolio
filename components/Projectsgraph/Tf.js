

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withTranslation } from '~/i18n';
import logo from '../../public/images/profile-logo.svg';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './tf-style';
import ContactForm from '../Contact/Form';
import tf1 from '../../public/images/profile/tf-images/tafs1.jpg';
import tf2 from '../../public/images/profile/tf-images/tafs2.jpg';
import users from '../../public/images/profile/tf-images/users.jpg';
import tfmock from '../../public/images/profile/tf-images/tapandfork.jpg';
const TapFork = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
      <div className={classes.root}>
        <Container maxWidth="lg" component="footer">
          <Grid container spacing={6} direction={isMobile ? 'column' : 'row'}>
            <Grid item xs={12} md={5}>
                <Typography variant="h6" align="left" color="primary">
                  Problem:
                </Typography>
                <Typography className={text.paragraph}>
                  Shortcomings of the existing applications to make the pricing strategy more attractive to restaurant owners and to allow them to fully control their marketing campaigns.
                </Typography>
                
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" align="left" color="primary">
                  Solution:
                  </Typography>
                  <Typography className={text.paragraph}>
                    Tap & Fork is an application that allows people to find restaurants. Conceptually it is similar to applications like Yelp, OpenTable or Zomato. Mobile app should have simular functionality. 
                  </Typography>
                  <Typography className={text.paragraph}>
                    Tap & Fork is built to help restaurant owners to gain controll over thier representation in the app. Restaurant owners can easily upload images, create coupons, and run promotions.
                    <br />
                    Tap & Fork has a website where restaurant owners could build promotions that would be run for specified time intervals, add coupons, and create custom images with a simple and easy-to-use web based graphic editor.
                    <br />
                    <img src={tf1} className={classes.mobshots} alt="tap and fork" />
                    <img src={tf2} className={classes.mobshots} alt="tap and fork" />
                </Typography>
          
            </Grid>
           
            <Grid item xs={12} md={5}>
            <Typography variant="h4" align="left">
                  My role in this project
                </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
            
                <Typography variant="h5" align="left">
                  UX and Graphic design of the application
                </Typography>
                <br/>
                <Typography className={text.paragraph}>
                  I made competitor research. It gave us user expectations and ideas on improvements.
                  Next step was user research. A teem member contacted 20 restaurant owners. After that we could state goals and pain points for both restaurant customers and restaurant owners. I could create user personas and coordinate ui with different scenarios of app users.
                </Typography>
                <br/> <br/>
                <Typography className={text.paragraph}>
                  As a result we decided on this functionality list:
                  <ul>
                    <li>Search for distance, cuisine type, and keywords</li>
                    <li>Listing of graphic ads</li>
                    <li>Call and direction buttons</li>
                    <li>Gallery for each restaurant</li>
                    <li>Star rating</li>
                    <li>Favorites </li>
                    <li>Sample placeholders and Google images for non-subscribed restaurants</li>
                  </ul>
                  <a href="/tfsi.pdf" target="_blank">See goals and flowcharts in pdf file (for app and editor together).</a>

                  <br />
                
                </Typography>
                <br/> <br/>
                <Typography variant="h5" align="left">
                  Tap&Fork mobile app mockup: 
                </Typography>
                <br/><br/>
                <a href="/tflooks.pdf" target="_blank">Click here for pdf</a>
                <br/><br/>
                <a href="/tflooks.pdf" target="_blank"><img src={tfmock} alt="tap and fork" align="center" width="50%"/></a>
                <br/><br/><br/>
                <Typography className={text.paragraph}>
                </Typography>
                <Typography variant="h6" align="left">
                <br/>
                I'm particularly proud of some contrebutions I made to this project:
                </Typography>
                <Typography className={text.paragraph}>
                <ul>
                    <li>Google data is used before restaurants customize their business account </li>
                    <li>Beautifull images</li>
                    <li>The ability to have 4 restaurants on one mobile screen. Image size is very important for pleasant scroll and prevents users from feeling bombarded with information.</li>
                  </ul>
                  <br/><br/>
                  </Typography>

                  
                </Grid>
              </Grid>   
             
          
        </Container>      
    </div>
    );
  }

  TapFork.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(TapFork);