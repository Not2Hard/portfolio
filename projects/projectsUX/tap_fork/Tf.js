

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from '../../projects-styles.js';

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
          Tap &amp; Fork is an application that allows people to find restaurants. It is built to address the shortcoming of the existing applications to make the pricing strategy more attractive to restaurant owners and to allow them to fully control their marketing campaigns. With Tap & Fork, restaurant owners can easily upload images, create coupons, and run promotions. 
        </Typography>
        
        <Typography className={text.paragraph}>
        <b>My role in this project</b> - UX and Graphic design of the application
        </Typography>
        <Typography variant="h6" align="left" color="primary">
          Desk research:
        </Typography>
          <Typography className={text.paragraph}>
          To fully understand what set Tap &amp; Fork apart from its competitors, it was crucial that these competitors first be identified. Other projects with similar functionality on the market were:  <br/>
          </Typography>
          <ul className={text.paragraph}>
              <li>Yelp</li>
              <li>OpenTable</li>
              <li>Zomato</li>
              <li>Urbanspoon</li>
              <li>UberEATS</li>
            </ul>
            <br/>
            
          <Typography className={text.paragraph}>
            Most of these apps have too much information, and lack large, eye-catching images.<br/>
            List with a short description is practical but images and cards make the user experience more fun.
          </Typography>
          
          <Typography variant="h6" align="left" color="primary">
            User research:
          </Typography>
          <Typography className={text.paragraph}>
          At the beginning of the project we ran a series of user testing trying to find out what people are looking for in such an application, and how existing applications come short. One of the biggest issues reported by users was the amount of information surfaced by most of the popular applications. The listings would show too much information to parse through. At the same time the images of restaurants in the list were too small, making it difficult to see the unique features and the spirit of each restaurant. 
           <br/><br/>
           Our solution to that problem was to reduce the amount of the information presented in the restaurant list focusing on the image that would show each restaurant unique features. We have received a very strong positive user feedback. A team member contacted 20 restaurant owners. It gave us a chance to see their unique needs and pain points with the existing applications. After that we could state goals and pain points for both restaurant customers and restaurant owners.
           </Typography>
           <Typography className={text.paragraph}>
           Restaurant customers objectives:
           </Typography>
           <ul className={text.paragraph}>
              <li>Find a restaurants of preferred type and distance</li>
              <li>Get coupons and specials</li>
              <li>Call to make reservation</li>
              <li>Directions</li>
              <li>Save for future visits</li>
            </ul>
          
          <Typography className={text.paragraph}>
          Restaurant owners needs:
          </Typography>
          <ul className={text.paragraph}>
              <li>Affordable branding and listings</li>
              <li>Advertising through coupons and specials</li>
              <li>Easily publish new images</li>
              <li>Control promotion time windows</li>
            </ul>
          
          <Typography className={text.paragraph}>
            As a result we decided on this functionality list:
            </Typography>
            <ul className={text.paragraph}>
              <li>Search for distance, cuisine type, and keywords</li>
              <li>Listing of graphic ads</li>
              <li>Call and direction buttons</li>
              <li>Gallery for each restaurant</li>
              <li>Star rating</li>
              <li>Favorites </li>
              <li>Sample placeholders and Google images for non-subscribed restaurants</li>
            </ul>
          
          <Typography className={text.paragraph}>
           I could create user personas and coordinate ui with different scenarios of app users. A simple flowchart was created as a result:
           </Typography>
           </Container> 
           <Container maxWidth="lg" component="footer">
            <img src="/images/projects/tapAndFork/tf-flow.svg" align="center" width="100%" alt="flowchart" />
            <div className={classes.img4decCaption}>Tap&amp;Fork app flowchart </div>
          </Container> 
          <Container maxWidth="md" component="footer">
          <Typography className={text.paragraph}>
          Search results can be displayed as a list. For the purpose of this application and for better user experience I wanted to use cards with graphics. I think it is optimal to have 4 cards per screen and make them tall. It gives an opportunity for clear header with name and stars. Images of food looked so much better and more distinguishable than in other apps.
          </Typography>
          <Typography className={text.paragraph}>
          The big problem with the design was the initial state of the app. Where the images and restaurants would come from? How the app should look when it is just starting? The solution was to use google data and present images for certain types of restaurants. As a result the app was beautiful and addictive to scroll even when it just came alive.

          </Typography>
          <br/>
          <img src="/images/projects/tapAndFork/tf-screens.jpg" align="center" width="100%" alt="App on mobile" />
          <div className={classes.img4decCaption}>Tap&amp;Fork app mobile screenshots </div>
          <br/> <br/>
          
          <Typography variant="h6" align="left">
          <br/>
          I'm particularly proud of some contributions I made to this project:
          </Typography>
            <ul className={text.paragraph}>
              <li>Google data is used before restaurants customize their business account </li>
              <li>Beautifull images</li>
              <li>The ability to have 4 restaurants on one mobile screen. Image size is very important for pleasant scroll and prevents users from feeling bombarded with information.</li>
            </ul>
            <br/><br/>
          
        </Container>      
    </div>
    );
  }

  TapFork.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(TapFork);