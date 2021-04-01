

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
import tfad from '../../public/images/profile/tf-images/adeditor.jpg';
import adbuilder from '../../public/images/profile/tf-images/adbuilder.jpg';
import moskup from '../../public/images/profile/tf-images/moskup.jpg';
import users from '../../public/images/profile/tf-images/users.jpg';


const TFeditor = () => {
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
                  It is complicated prosses to make custom graphic ad and promotion cupons for a busy buisness manager. There is a need for symple way take a picture add words and publish an ad.
                </Typography>
                
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" align="left" color="primary">
                  Solution:
                  </Typography>
                  <Typography className={text.paragraph}>
                    Tap & Fork offers a symple ad editor for restaurant owners as a part of website application.
                    </Typography>
                    <br/>
                    <Typography className={text.paragraph}>
                        The idea was:
                        <ul>
                            <li>Allow restaurant owners to control all of the information about their business directly on the application.</li>
                            <li>Allow restaurants to publish coupons, specials, and events  as well as promote new things on the menu without any design services.</li>
                            <li>Publish new photos and manage the published ones.</li>
                        </ul>
                        <br />
                    </Typography>
                  <Typography className={text.paragraph}>
                   
                    <br />
                    <img src={tfad} alt="tap and fork" />
                </Typography>
          
            </Grid>
           
            <Grid item xs={12} md={5}>
            <Typography variant="h4" align="left">
                  My role in this project
                </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
            
                <Typography variant="h5" align="left">
                  User centured design
                </Typography>
                <br/>
                <Typography className={text.paragraph}>
                        The idea was:
                        <ul>
                            <li>Allow restaurant owners to control all of the information about their business directly on the application.</li>
                            <li>Allow restaurants to publish coupons, specials, and events  as well as promote new things on the menu without any design services.</li>
                            <li>Publish new photos and manage the published ones.</li>
                        </ul>
                        <br />
                    </Typography>

                <br/> <br/>
                <Typography className={text.paragraph}>
                I created 4 user personas for the ad builder. Personas help us visualize how many different perspectives we can reach. It is not about percentage and statistics it is about points of view and difficalies customers could have. There are more staff members than owners. It is important to identify who will be working with this application in real life situations.The needs and circumstances of a business owner may greatly vary. With this in mind, I created four personas.
                <br/>
                <ul>
                    <li>owner interested in IT who keep up with the latest innovations and  technologies</li>
                    <li>owner with little experience in IT</li>
                    <li>manager, with some experience in social media and MS Office</li>
                    <li>young waitress, who uses her phone a lot</li>
                </ul>
                </Typography>

                <img src={users} alt="tap and fork" />
                <br/> <br/>
                <a href="/tfsi.pdf" target="_blank">See goals and flowcharts in pdf file (for app and editor together).</a>

                <Typography className={text.paragraph}>
                  I was analizing different mobile and web aplications for graphic editing. We aime for solution that can be used without training for a customer who is not familiar with graphic creation process. 
                  <br/>
                  UI is only intuitive for a specific group of people. The average user, however, is not very comfortable with graphics.We therefore decided not to use popular elements in graphic editors, but rather opt for the simply left-to-right construction and logic.
                </Typography>
                <br/><br/><img src={moskup} alt="tap and fork" align="left"/>
                <Typography className={text.paragraph}>
                 This mosk up was implemented into a beutiful working prototype:
                </Typography>
                <br/><br/><a href={adbuilder} target="_blank"><img src={adbuilder} alt="tap and fork" align="center" width="700px"/></a>
                <a href={adbuilder} target="_blank">click for bigger screenshot</a>
                <br/> <br/>
                <Typography variant="h5" align="left">
                  User testing:
                </Typography>
                <Typography className={text.paragraph}>
                 We had a simplified user testing. Random people in a restaurant were asked to create something for a free beer. 
                 The results were both interesting and disheartening. Two people found the creative process addictive. Three users didn’t know where to start. Most could make letters on a background. This illustrated the application’s need for a more intuitive design process for the average user.

                </Typography>
                <Typography variant="h5" align="left">
                  Improvements after user testing:
                </Typography>
                <Typography className={text.paragraph}>
                <ul>
                            <li>I designed a wizard to make step-by-step flow. The process became  much easier to start and all the way till finish.</li>
                            <li>The best decision was to create templates. 
                                People could customize templates with their images just fine! </li>
                </ul>
                </Typography>

                </Grid>
              </Grid>   
              
          
        </Container>      
    </div>
    );
  }

  TFeditor.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(TFeditor);