

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
          Michael Belk is a successful fashion photographer. He created beautiful series of images to share Jesus teachings from a modern perspective.
          </Typography>
          <Typography className={text.paragraph}>
          His books and images could be found in such big stores as Hobby Lobby. This website is the main commersial point for selling his art and other products.
          </Typography>
          <Typography className={text.paragraph}>
            <b>My role in this project</b> is WordPress developer. 
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Web technology:
          </Typography>
          <Typography className={text.paragraph}>
          This web store is build on WordPress. WordPress is a free and open-source content management system written in PHP and paired with a MySQL database. It allows to extend functionalty of a website using plugins and WordPress themes. 
          </Typography>
          <Typography className={text.paragraph}>
          We used the most popular WordPress theme - Avada by ThemeFusion. This theme is an ultimate tool to  clean, modern, multi-purpose designs. It is also well documented and kept up to date.
          </Typography>
          <Typography className={text.paragraph}>
          JourneysWithTheMessiah.org is an e-commerce project. WooCommerce is used for online merchants. It creates product pages, adds shopping basket and provides ability to accept major credit cards and manage orders. Ontop of WooCommerce I used payment gateway plugin to connect owner square account with the website. To culculate shipping expences anothe plugin was added. It connects website with stamps.com account. Just for conviniense a spesial shipping lable printing plugin was added also.
          </Typography>
          <Typography className={text.paragraph}>
          As a new part of this projeckt the owner created a series of videos that explaines the messages and to provce a didder understanding of Jesus teaching. It was important to harvest customer emails so a free membership was offered if a user provides her email adress. It was dome by utilizing a Fusion Builder Membership plugin. It works great with Avada. 
          </Typography>
          <Typography className={text.paragraph}>
          If images and ideas will inspier user and someone would like to help but don't want to make a perchese, there is a donatiotion option. It is done by using Donation For Woocommerce plugin.
          </Typography>
          <Typography className={text.paragraph}>
          The most impotant part in every webproject is serch engine optimization. Best practices are inplemented in all the development process. 
          </Typography>
           <Typography variant="h6" align="left" color="primary">
          Result:
          </Typography>
          
          <Typography className={text.paragraph}>
            <a></a>
          Michael Belk's project is expending and finds more and more customers and supporters. He is shearing his vision and provides a uniqe servise to christian comunity. 
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