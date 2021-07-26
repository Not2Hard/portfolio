

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './wp-style';


const NVmartial = () => {
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
          New school of martial arts was opening in Dallas, GA. <br/>
          A new website and branding was needed. <br/> 
          The owner stated these goals at the begining of the project:
          </Typography>
          <ul className={text.paragraph}>
                <li>To be within 1-5 in Google or Martial Arts Acworth GA, Martial Arts Dallas GA, and Martial Arts Kennesaw GA</li>
                <li>Create a unique and successful brand</li>
                <li>Have one place for all info about classes</li>
                <li>Create a simple signup and payment process online</li>
              </ul>
          
          <Typography className={text.paragraph}>
            <b>My role in this project</b> - I was hired to create a branding, website and give some essential graphics support.
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Desk research:
          </Typography>
          <Typography className={text.paragraph}>
          I made a detailed analysis of existing martial arts schools in Dallas and Acworth, GA. Most successful businesses were using industry specialized marketing companies. The targeted audience was parents looking for kids classes and adult weight loss programs. 
          </Typography>
          <Typography className={text.paragraph}>
          I like to start with search engine optimization. Google Ads Keyword Planner helps to see what words people use to find businesses. I made a list of the most popular keywords, found businesses that take first 2 places on each word or phrase. I made sure that I use all the winning techniques.
            <br/><br/>
          The owner agreed to choose a name for the business considering available domain names with the best search words. It was a combination of his vision and available domains. His idea was to organize the school in an untraditional way, so he chose New Vision Martial Arts. We could purchase a great domain : nv-martialarts.com. It gave him a lot of advantages in google rating later on.
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          User research:
          </Typography>
          <Typography className={text.paragraph}>
          I asked the opinions of 4 teenagers, 3 kids, 3 mothers and 2 fathers about the name of the business and chosen graphics styles, as well as the information they look for on this kind of website. It helped to keep focus on different perspectives of different users.<br/><br/>
          This list of customer goals is the result of user research:
          </Typography>
          <ul className={text.paragraph}>
                <li>Look up good classes in their area</li>
                <li>See if they like the teachers and atmosphere of the club</li>
                <li>Find a good time in their schedule</li>
                <li>Find out the price and compare programs</li>
                <li>Signup for a free class</li>
                <li>Ask questions</li>
                <li>Pay online</li>
                <li>Signup for a program</li>
              </ul>
              
          
          <Typography variant="h6" align="left" color="primary">
          Branding:
          </Typography>
          <Typography className={text.paragraph}>
          It was important to translate the teacher’s personality and talent working with teenagers and kids. He has a recognizable kick so I traced a photo of his kick into the logo and added some bright, non-traditional details. 
          </Typography>
          <img src="/images/projects/nv-ma/nv-logo1.jpg" align="center"  alt="AWS accounts map" className={classes.img4dec} />
          <Typography className={text.paragraph}>
              
              This logo was developed with a variant that is good for one and two color printing in a traditional looking way. The owner likes to use them all. <br/><br/>
          <img src="/images/projects/nv-ma/nv-logo2.jpg" align="center" width="50%" alt="AWS accounts map" className={classes.img4dec} /><br/><br/>
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          WordPress theme:
          </Typography>
          <Typography className={text.paragraph}>
          One of the weaknesses of a website made on WordPress is performance. When starting a new project I like to check the chosen theme for the loading speed. If developers can’t make the theme load fast with demo content, it means I would have trouble doing it without extra investments. <br/><br/>
          The website was hosted on a budget hosting account, but it has staging, two ways backup and saves information from form submission. WordPress can give some very specific issues in those areas.
          </Typography>
          <Typography variant="h6" align="left" color="primary">
          Printed materials:
          </Typography>
          <Typography className={text.paragraph}>
          A new business needs at least basic promotional materials. To attract attention on the shopping plaza window decorations and "A" stand. To spread the word in printed catalogs a full page ad. <br/><br/>
           </Typography>   
            <img src="/images/projects/nv-ma/nv-windows.jpg" align="center" width="100%" alt="AWS accounts map" className={classes.img4dec}/> 
            <div className={classes.img4decCaption}>Window decals </div>
            <br/><br/>
            
            <img src="/images/projects/nv-ma/nv-add1.jpg" align="center" width="50%" alt="AWS accounts map" className={classes.img4dec}/> 
            <div className={classes.img4decCaption}> A full page ad for the local catalog </div>
            <br/><br/>
            
            <img src="/images/projects/nv-ma/nv-add2.jpg" align="center" width="50%" alt="AWS accounts map"className={classes.img4dec} /> 
            <div className={classes.img4decCaption}> "A" stand to attract the attention of the walking public.  </div>
            <br/><br/>
          
           <Typography variant="h6" align="left" color="primary">
          Result:
          </Typography>
          <Typography className={text.paragraph}>
          This business has flourished. It opened 1 year before the pandemic and it has survived all the difficulties. There are plans about remodeling the website and moving to a different location though. Nothing stands still for too long, but the owner created the school of his dream and he keeps recommending my service to others.
          </Typography>
        </Container>      
    </div>
    );
  }

  NVmartial.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(NVmartial);