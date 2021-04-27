import Home from "./Home";
import About from "./About";
import Service from './Service';
import ContactUs from './contactUs';
import Blog from './Blog';
import Team from './Team';
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Switch>
      <Route path="/" exact><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/service"><Service/></Route>
        <Route path="/contactUs"><ContactUs/></Route>
        <Route path="/blog"><Blog/></Route>
        <Route path="/team"><Team/></Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
