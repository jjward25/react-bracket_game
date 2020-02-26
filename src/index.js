import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Menu from './modules/menu/Menu';
import Createdform from './modules/create-form/form';
import Createdgame from './modules/create-game/cgame';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app-menu"><Menu /></div>
                <div className="app-body">
                    <Createdform />
                    <Createdgame />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
