import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]:{

    mainContainer:{
      flexDirection:'column-reverse',
    }
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontSize: '40px',
  },
  image: {
    marginLeft: '15px',
  },
}));