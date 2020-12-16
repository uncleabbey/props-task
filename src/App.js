import './App.css';
import Pokedex from './Pokeman';
import { HashRouter, Switch, Route } from "react-router-dom";
import { ColorChange } from './ColorChange';
import TodoList from './Todo';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/pokemon"} component={Pokedex} />
          <Route exact path={"/boxes"} component={ColorChange} />
          <Route exact path={"/todo"} component={TodoList} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
