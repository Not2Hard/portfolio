

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './wp-style';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


const JourneyWP = () => {
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
          Michael Belk is a successful fashion photographer. He created a beautiful series of images to share Jesus' teachings from a modern perspective.
          </Typography>
          <Typography className={text.paragraph}>
          His books and images could be found in big stores, including Hobby Lobby. This website is the main commercial point for selling his art and other products.
          </Typography>
          <Typography className={text.paragraph}>
            <b>My role in this project</b> is WordPress developer. 
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Web technology:
          </Typography>
          <Typography className={text.paragraph}>
          This web store is build on WordPress. WordPress is a free and open-source content management system written in PHP and paired with a MySQL database. It allows the extension functionality of a website using plugins and WordPress themes. 
          </Typography>
          <Typography className={text.paragraph}>
          We used the most popular WordPress theme - Avada by ThemeFusion. This theme is an ultimate tool to  clean, modern, multi-purpose designs. It is also well documented and kept up to date.
          </Typography>
          <Typography className={text.paragraph}>
          JourneysWithTheMessiah.org is an e-commerce project. WooCommerce is used for online merchants. It creates product pages, adds shopping baskets and provides the ability to accept major credit cards and manage orders. On top of WooCommerce I used a payment gateway plugin to connect the owner square account with the website. To calculate shipping expense another plugin was added. It connects the website with stamps.com account. Just for convenience a special shipping label printing plugin was added also.
          </Typography>
          <Typography className={text.paragraph}>
          As a new part of this project, the owner created a series of videos that explains the messages and to provide a deeper understanding of Jesus' teachings. It was important to harvest customer emails so a free membership was offered if a user provides her email address. It was built by utilizing a Fusion Builder Membership plugin. It works great with Avada.
          </Typography>
          <Typography className={text.paragraph}>
          If images and ideas will inspire users and someone would like to help but don't want to make a purchase, there is a donatiotion option. It is done by using Donation For Woocommerce plugin.
          </Typography>
          <Typography className={text.paragraph}>
          The most important part in every web project is search engine optimization. Best practices are implemented in all the development processes.
          </Typography>
           <Typography variant="h6" align="left" color="primary">
          Result:
          </Typography>
          
          <Typography className={text.paragraph}>
            <a></a>
            Michael Belk's project is expanding and finds more and more customers and supporters. He is sharing his vision and provides a unique service to the Christian community.
          </Typography>
          <div align="center" width="100%">
            <Link color="primary" className={classes.websiteLink} href="https://journeyswiththemessiah.org/" target="_blank">JourneysWithTheMessiah.org</Link>
          </div>
        </Container>      
    </div>
    );
  }

  JourneyWP.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(JourneyWP);