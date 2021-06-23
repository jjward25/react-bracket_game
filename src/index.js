import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './modules/menu/Menu';
import Creategame from './modules/create-form/form';
import Random from './modules/random/random';

function App() {

    return (
        <Router>
        <div className="app">
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/creategame" component ={Creategame}/>
                <Route path="/random" component={Random}/>
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
