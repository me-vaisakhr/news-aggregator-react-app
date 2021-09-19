// Home page component
import Home from './components/home'
import { BrowserRouter as Router} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  App: {
    background:theme.palette.background.main
  },
}));

function App() {
  const classes = useStyles();
  return (
      <Router>
        <div className={classes.App}>
          <Home/>
        </div>
      </Router>
  );
}
  
export default App