import './App.css';
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {Link, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><Photos/></Route>
        <Route path="/cart"><Cart/></Route>
      </Switch>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
