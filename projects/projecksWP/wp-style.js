import { makeStyles } from '@material-ui/core/styles';


const sectionMargin = margin => (margin * 10);


const wpStyles = makeStyles(theme => ({
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
  },
  backgr: {
    width: '100%',
    backgroundColor: '#efefef',

    padding: 30,
  },
  counterWrap: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main})`,
    padding: theme.spacing(10, 0)
  },
  img4dec: {
    display: 'block',
    margin: 'auto',
  },
  img4decCaption: {
    textAlign: 'center',
    color: '#19318e',
    fontStyle: 'italic',
  },
  parallaxWrap: {
    position: 'relative'
  },
  greyBg: {
    paddingTop: theme.spacing(10),
    width: '100%',
  },
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing())
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing())
  },
  websiteLink: {
    textTransform: 'none',
    fontSize: 20,
  }
}));

export default wpStyles;
