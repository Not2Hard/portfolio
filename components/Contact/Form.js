import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import useStyles from './contact-style';
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha';
import classnames from 'classnames'




function Form(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [reCaptucheCode, setreCaptucheCode] = useState('')
  const [sentNote, setSentNote] = useState(false)
  const [showNote, setShowNote] = useState(false)

  const [openNotif, setNotif] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    
  };

  const handleSubmit = () => {

    console.log("typed", { ...values })

    const data = {
      service_id: 'service_mf6kdl3',
      template_id: 'template_ebd7ysm',
      user_id: 'user_8zt4ZsTUHoeZ50SQr6EpE',
      template_params: {
          "to_name": "Natalia Sergeeva",
          "from_name": values.name,
          "message": values.message,
          "user_email": values.email,
          "g-recaptcha-response": reCaptucheCode
          
      }
    }
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
    .then((res) => {
        console.log("EMAILJS SENT", res)
    }).catch((error) => console.log("EMAILJS ERROR",error))  
    
    setValues(
      {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      }
    )
    setShowNote(true)
    setTimeout(() => {setShowNote(false)}, 4000)
    // setNotif(true);
    setreCaptucheCode('')
    grecaptcha.reset()

  };

  const handleClose = () => {
    setNotif(false);
  };
  function onReCAPTCHAChange(captchaCode) {
    console.log("Captcha value:", captchaCode);
    if(!captchaCode) {
      return;
    }
    setreCaptucheCode(captchaCode)
  }
  

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Paper className={classes.formBox}>
        <Grid container spacing={6}>
          <Grid item lg={5} xs={12}>
            <Typography className={clsx(classes.title, text.title)} variant="h3">
              {t('common:profile-landing.contact_title')}
            </Typography>
          </Grid>
          <Grid item lg={7} xs={12}>
            
            <div className={classes.form}>
              <div className={clsx(classes.thankyouNote, {[classes.showThankyouNote]: showNote})}> 
                <Typography variant="h5" className={text.subtitle}>
                  Thank you, <br/>
                  <b>your message was sent </b>
                </Typography>
              </div>
              <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
              >
                <TextValidator
                  className={classes.input}
                  label={t('common:profile-landing.form_name')}
                  onChange={handleChange('name')}
                  name="Name"
                  value={values.name}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  className={classes.input}
                  label={t('common:profile-landing.form_email')}
                  onChange={handleChange('email')}
                  name="Email"
                  value={values.email}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                  multiline
                  rows="6"
                  className={classes.input}
                  label={t('common:profile-landing.form_message')}
                  onChange={handleChange('message')}
                  name="Message"
                  value={values.message}
                />
                 <ReCAPTCHA
                    sitekey="6LdgPDAbAAAAANto4KTmjiOIKo7XEoA3yBp8bd_N"
                    onChange={onReCAPTCHAChange}
                  />
                <div className={classes.btnArea}>
                  <Button variant="contained" type="submit" color="primary" size="large">
                    {t('common:profile-landing.form_send')}
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Form.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(Form);
