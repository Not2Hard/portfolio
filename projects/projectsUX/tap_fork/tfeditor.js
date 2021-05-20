

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from '../../projects-styles.js';


const TFeditor = () => {
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
        There is a need for a simpler way to make graphics for restaurant owners. It would be great if the manager could take a picture, add words and publish an ad or coupon. Tap & Fork offers a simple editor to create ads and coupons for restaurant owners as a part of website application. It is a key feature of the whole project to have an easy-to-use web based graphic editor. This editor helped to create custom images and restaurant owners were able to control time intervals and image gallery of their profile.<br/>
        The idea was:
        <ul>
          <li>Allow restaurant owners to control all of the information about their business directly on the application.</li>
          <li>Allow restaurants to publish coupons, specials, and events as well as promote new things on the menu without any design services.</li>
          <li>Publish new photos and manage the published ones.</li>
        </ul>
        </Typography>
        <Typography className={text.paragraph}>
        <b>My role in this project</b> - UX and Graphic design of the application
        </Typography>
        <Typography variant="h6" align="left" color="primary">
          Desk research:
        </Typography>
        <Typography className={text.paragraph}>
            I analyzed different mobile and web applications for graphic editing. I aimd for solutions that can be used without training for a customer who is not familiar with the graphic creation process.<br/>
            UI is only intuitive for a specific group of people. The average user, however, is not very comfortable with graphics. I therefore decided not to use popular elements in graphic editors, but rather opt for the simple left-to-right construction and logic.
        </Typography>
        <Typography variant="h6" align="left" color="primary">
          Persona creation:
        </Typography>
        <Typography className={text.paragraph}>
            I created 4 user personas for the ad builder. Personas help us visualize how many different perspectives we can reach. It is not about percentage and statistics it is about points of view and difficalies customers could have. There are more staff members than owners. It is important to identify who will be working with this application in real life situations.The needs and circumstances of a business owner may greatly vary. With this in mind, I created four personas.<br/>
            <ul>
              <li>owner interested in IT who keep up with the latest innovations and technologies</li>
              <li>owner with little experience in IT</li>
              <li>manager, with some experience in social media and MS Office</li>
              <li>young waitress, who uses her phone a lot</li>
            </ul><br/>
        </Typography>
        <Typography variant="h6" align="left" color="primary">
         Wireframe:
        </Typography>
        <Typography className={text.paragraph}>
        Analyzing the needs and requirement these users would have for the editor I created the minimum functionality list:
              <ul>
                <li>Basic functions (create, modify and delete objects)</li>
                <li>Image gallery (ready-to-use clip art)</li>
                <li>Upload images and logos</li>
                <li>Simple text editing</li>
                <li>Shapes for highlighting</li>
              </ul>
              I put these features together with left-to-right construction and logic in a simple wireframe:
        </Typography>
           <img src="/images/projects/tapAndFork/moskup.jpg" align="center" alt="Tap and Fork moskup" />
           <div className={classes.img4decCaption}>Web editor moskup </div>
        <Typography variant="h6" align="left" color="primary">
         Prototype: 
        </Typography>
        <Typography className={text.paragraph}>
          Design of the web page with graphic features looked like this:
        </Typography>
        </Container> 
           <Container maxWidth="lg" component="footer">
           <img src="/images/projects/tapAndFork/tf_editor.jpg" align="center" width="100%" alt="Tap and Fork prototype" />
           <div className={classes.img4decCaption}>Web editor prototype </div>
          </Container> 
        <Container maxWidth="md" component="footer">
        <br/><br/>
        <Typography variant="h6" align="left" color="primary">
            User testing:
        </Typography>
        <Typography className={text.paragraph}>

            We had a simplified user testing. Random people in a restaurant were asked to create something for a free beer. The results were both interesting and disheartening. Two people found the creative process addictive. Three users didn’t know where to start. Most could make letters on a background. This illustrated the application’s need for a more intuitive design process for the average user.<br/><br/>
              <b>Improvements after user testing:</b>
              <ul>
                <li>I designed a wizard to make step-by-step flow. The process became much easier to start and all the way till the end.</li>
                <li>The best decision was to create templates. Second round of user testing proved that customizing templates with their images is an easy task </li>
              </ul>
           </Typography>
          
        </Container>      
    </div>
    );
  }

  TFeditor.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(TFeditor);