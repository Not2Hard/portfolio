import { makeStyles } from '@material-ui/core/styles';

const tfStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    paddingBottom: theme.spacing(5)
  },
  decoration: {},
  mobshots:{
    width: 250,
    margin: 15,
    top: 0
  },
  logo: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5)
    },
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 80,
      marginBottom: theme.spacing(2)
    },
    '& h4': {
      textTransform: 'uppercase',
    }
  },
  margin: {
    margin: theme.spacing(2)
  },
  socmed: {
    margin: theme.spacing(3, 0),
    '& button': {
      margin: theme.spacing(),
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  contact: {
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  }
}));

export default tfStyles;
