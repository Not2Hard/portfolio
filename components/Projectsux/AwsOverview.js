

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
import awsmap from '../../public/images/profile/map.jpg';
import tf2 from '../../public/images/profile/tf-images/tafs2.jpg';
import users from '../../public/images/profile/tf-images/users.jpg';
import tfmock from '../../public/images/profile/tf-images/tapandfork.jpg';

const AwsOverview = () => {
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
                  When start using amazon web services developers use services in different regions. It is hard to see what is still running and what has stoped. 
                  Bill can be very high if you forget that something in different region is still running.
                </Typography>
                
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" align="left" color="primary">
                  Solution:
                  </Typography>
                  <Typography className={text.paragraph}>
                    A symple web application was created to see all account in all the regions.
                  </Typography>
                  <img src={awsmap} align="center" width="90%" alt="AWS accounts map" />
                  
          
            </Grid>
           
            <Grid item xs={12} md={5}>
            <Typography variant="h4" align="left">
                  My role in this project
                </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
            
                <Typography variant="h5" align="left">
                  UX and Graphic design for the application
                </Typography>
                <br/>
                <Typography className={text.paragraph}>
                  This aplicatio is for aws developers. I didn't had to creat personas for this project. My personal contacts are mosly developers :)
                  
                  It seamed logikal to use spreadshit data presentation. Even developers don't like spredshits.
                  Bubble chart is much more fun and helps to prioretise your actions. I desided to combine buble chart idea with cards. 

                  Every servise in every reagion will be shown in a seporate card. On the front will be information at glance. On click the card is turning and shows detailes.
                  
                  The size of the card show how many items are running title shows what servis is it. From a quick glance a user can see where the biggest buill will come from.
                </Typography>
                <br/> <br/>
               
                  
                </Grid>
              </Grid>   
             
          
        </Container>      
    </div>
    );
  }

  AwsOverview.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(AwsOverview);