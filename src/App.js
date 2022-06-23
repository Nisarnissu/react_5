import LandingPage from "./LandingPage";
import Postview from "./Postview"
import {BrowserRouter,Switch,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route excat path ="/" component ={LandingPage}></Route>
      <Route excat path ="/Postview" component ={Postview}></Route>
      </Switch>
    </BrowserRouter>
    // <Postview/>
    
     );
}

export default App;
