

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
import awsmap from '../../public/images/profile/ux-images/map.jpg';
import tf2 from '../../public/images/profile/ux-images/tafs2.jpg';
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
        <Container maxWidth="md" component="footer">
          
          <Typography variant="h6" align="left" >
            Project Description:
          </Typography>
        
          <Typography className={text.paragraph}>
          When using amazon web services developers  initiate instances of services in different regions. It is hard to see what is still running and what has stopped. Some of those services could be pricey and they can be on and off by a condition that is hard to keep in track. One can get unexpectedly high bill if forget that something in different region is still running.<br/>
          A simple web application was created to see all accounts in all the regions.
          </Typography>
          
          <img src={awsmap} align="center" width="90%" alt="AWS accounts map" />
          <Typography className={text.paragraph}>
            <b>My role in this project</b> - UX and Graphic design of the application
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          User research:
          </Typography>
          <Typography className={text.paragraph}>
          This application is for aws developers. I didn't have to create personas for this project. My personal contacts are mostly developers :)<br/><br/>
            
          It seemed logical to use a spreadsheet data presentation. Many developers I know don't like spreadsheets, though.<br/>
          Bubble chart is much more fun and helps to prioritise your actions. I decided to combine bubble chart ideas with cards. <br/><br/>

          Every service in every region will be shown in a separate card. On the front will be information at glance. On click the card is turning and shows details.<br/><br/>
            
          The size of the card shows how many items are running and the title shows what servis it is. From a quick glance a user can see where the biggest bill will come from.<br/><br/>
          </Typography>
          
        </Container>      
    </div>
    );
  }

  AwsOverview.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(AwsOverview);