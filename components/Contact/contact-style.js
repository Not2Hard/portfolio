import { makeStyles } from '@material-ui/core/styles';

const contactStyles = makeStyles(theme => ({

  thankyouNote: {
    backgroundColor: '#ffffff',
    color: 'grey',
    boxShadow:' 0 1.5px 12px 2px rgba(0, 0, 0, 0.2)',
    paddingTop: '40px',
    // width: "80%",
    height: "40%",
    position:'absolute',
    zIndex: 30,
    transform: "rotateX(90deg)",
    '&:before': {
      content: '""',
      left: -8,
      bottom: -8,
      width: '45%',
      height: '50%',
      border: '8px solid',
      borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
      borderImageSlice: 1,
      borderTop: 0,
      borderRight: 0,
      position: 'absolute'
    },
  },
  showThankyouNote: {
    backgroundColor: '#ffffff',
    color: 'grey',
    boxShadow:' 0 1.5px 12px 2px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    paddingTop: '40px',
    width: "90%",
    padding: '30px',
    height: "40%",
    position:'absolute',
    zIndex: 30,
    transform: "rotateX(90deg)",
    '&:before': {
      content: '""',
      left: -8,
      bottom: -8,
      width: '45%',
      height: '50%',
      border: '8px solid',
      borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
      borderImageSlice: 1,
      borderTop: 0,
      borderRight: 0,
      position: 'absolute'
    },

    animation: `$NoteUp 800ms ease-out forwards`,
  },
  "@keyframes NoteUp": {
    "0%": {
      // opacity: 0,
      transform: "rotateX(90deg)"
    },
    "100%": {
      // opacity: 1,
      transform: "rotateX(0deg)"
    }
  },





  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7),
    },
    '&:before': {
      content: '""',
      left: -16,
      bottom: -16,
      width: '45%',
      height: '30%',
      border: '16px solid',
      borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
      borderImageSlice: 1,
      borderTop: 0,
      borderRight: 0,
      position: 'absolute'
    }
  },
  title: {
    textAlign: 'left',
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(3),
      position: 'relative'
    }
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3)
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
  },
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 3),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 0)
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  },
}));

export default contactStyles;
