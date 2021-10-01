import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './modules/a.menu/Menu';

import Choosegame from './modules/z.choose/choose';
import NewChoose from './modules/z.choose/chooseGame';
import NewRandom from './modules/x.random/newRandom';
import UserGame from './modules/y.create/create-form';
import NewCreate from './modules/y.create/createGame';

function App() {

    return (
        <Router>
        <div className="app">
            <Switch>
                <Route path="/" exact component={Menu} />

                <Route path="/random" component={NewRandom}/>

                <Route path="/creategame" component ={UserGame}/>
                <Route path="/usergame" component ={NewCreate}/>

                <Route path="/choose" component={Choosegame}/>
                <Route path="/choosegame" component={NewChoose}/>
            </Switch>
        </div>
        </Router>
    )
}

ReactDOM.render(
<React.StrictMode>
    <App />
    </React.StrictMode>,
document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
