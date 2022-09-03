import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Increment from './Component/Increment';
import Toggle from './Component/Toggle';
import Testing from './Component/Testing';
import PrintName from './Component/PrintName';
import Form from './Component/Form';
import Header from './Component/Header';
import Todo from './Component/Todo';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/header' component={Header} />
        <Route exact path='/' component={Toggle} />
        <Route exact path="/increment" component={Increment} />
        <Route exact path="/testing" component={Testing} />
        <Route exact path="/printName" component={PrintName} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/todo" component={Todo} />

      </Switch>
    </>

  );
}

export default App;
