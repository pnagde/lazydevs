import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route path="/About"><About/></Route>
        <Route path="/"><Home/>
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
