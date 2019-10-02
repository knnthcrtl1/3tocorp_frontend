import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

=======
<<<<<<< Updated upstream
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

>>>>>>> Stashed changes
const App = lazy(() => import('./App'));
const Login = lazy(() => import('./Components/LoginComponent/LoginComponent'));
const StudentComponent = lazy(() => import('./Components/StudentComponent/StudentComponent'));

ReactDOM.render(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <div>
<<<<<<< Updated upstream
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/student" component={StudentComponent} />
=======
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/students" component={StudentComponent} />
                </Switch>
>>>>>>> Stashed changes
            </div>
        </Suspense>
    </Router>,

    document.getElementById('root')
);
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();





