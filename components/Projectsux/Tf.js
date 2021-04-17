

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
import useStyles from './ux-style';
import ContactForm from '../Contact/Form';
import tfscreens from '../../public/images/profile/tf-screens.jpg';
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
        <Container maxWidth="md" component="footer">
        <Typography variant="h6" align="left" >
          Project Description:
        </Typography>
        
        <Typography className={text.paragraph}>
          Tap & Fork is an application that allows people to find restaurants. Conceptually it is similar to applications like Yelp, OpenTable or Zomato. Tap & Fork is built to address the shortcoming of the existing applications to make the pricing strategy more attractive to restaurant owners and to allow them to fully control their marketing campaigns. With Tap & Fork, restaurant owners can easily upload images, create coupons, and run promotions. 
        </Typography>
        <Typography className={text.paragraph}>
          Tap & Fork has a website where restaurant owners could build promotions that would be run for specified time intervals, add coupons, and create custom images with a simple and easy-to-use web based graphic editor.
          <br />
        </Typography>
        <Typography className={text.paragraph}>
        <b>My role in this project</b> - UX and Graphic design of the application
        </Typography>
        <Typography variant="h6" align="left" color="primary">
          Desk research:
          </Typography>
          <Typography className={text.paragraph}>
          I started with looking up what is already in the google and App Store. Most sucsessful competitors are Yelp, OpenTable or Zomato. My goal was to create aplication design that is more fun then them. List with short description is practical but images and cards are much more porular now.
          </Typography>
          <Typography variant="h6" align="left" color="primary">
            User research:
          </Typography>
          <Typography className={text.paragraph}>
           Next step was user research. A teem member contacted 20 restaurant owners. After that we could state goals and pain points for both restaurant customers and restaurant owners. I could create user personas and coordinate ui with different scenarios of app users.
          </Typography>
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
          <Typography className={text.paragraph}>
           Search result can be displayed as list. For the pupose of this aplikation and for better user experience I wanted to use cards with graphic. I think it is optimal to have 4 cards per screen and make them tall. It give an oppotunity for clear headder with name and stars. Images of food looked so much better and more destinguisheble then in other apps.
          </Typography>
          <Typography className={text.paragraph}>
           Espesially big problem with the design was the initial state of the app. Where the images and restaurants would come from? How the app should look when it is just starting? The solution was to use googl data and preset images for certan types of restaurants. As a result the app was beautiful and addictive to scroll even when it just came alive.
          </Typography>
          <br/>
          <img src={tfscreens} align="center" width="100%" alt="App on mobile" />
          <br/> <br/>
          
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
        </Container>      
    </div>
    );
  }

  TapFork.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(TapFork);