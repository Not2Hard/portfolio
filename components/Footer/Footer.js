import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { withTranslation } from '~/i18n';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Form';
import Link from '@material-ui/core/Link';

function Footer(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src="/images/profile-logo.svg" alt="logo" />
              <Typography variant="h3" className={text.title}>
                {brand.profile.name}
              </Typography>
              <Typography variant="h4" className={text.subtitle}>
                {brand.profile.title}
              </Typography>
            </div>
            <div className={classes.socmed}>
            <Link href="https://www.facebook.com/natalia.sergeeva.522" target="_blank">
              <IconButton aria-label="Delete" className={classes.margin} size="small">
                <i className="ion-social-facebook" />
              </IconButton></Link>
              {/* <IconButton aria-label="Delete" className={classes.margin} size="small">
                <i className="ion-social-instagram" />
              </IconButton>
              <IconButton aria-label="Delete" className={classes.margin} size="small">
                <i className="ion-social-twitter" />
              </IconButton> */}
              <Link href="https://www.linkedin.com/in/natalia-sergeeva-08118b2b/" target="_blank">
              <IconButton aria-label="Delete" className={classes.margin} size="small">
                <i className="ion-social-linkedin" />
              </IconButton>
              </Link>
            </div>
            {/* <div className={classes.contact}>
              <Typography className={text.paragraph}>
                {t('common:profile-landing.footer_contact')}
                <br />
                +12 345 678 90
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={text.paragraph}>
                {t('common:profile-landing.footer_hello')}
                <br />
                jenadoe.skype
              </Typography>
            </div> */}
          </Grid>
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(Footer);
