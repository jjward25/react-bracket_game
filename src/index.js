import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './modules/a.menu/Menu';
import Creategame from './modules/create-form/form';
import CreateRd1 from './modules/create-form/create-game/create-rd1';
import Random from './modules/b.random/random';
import Choosegame from './modules/d.choose/choose';

function App() {

    return (
        <Router>
        <div className="app">
            <Switch>
                <Route path="/" exact component={Menu} />

                <Route path="/creategame" component ={Creategame}/>
                <Route path="/creategame-rd1" component ={CreateRd1}/>

                <Route path="/random" component={Random}/>

                <Route path="/choose" component={Choosegame}/>
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
