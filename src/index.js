import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./App'));
const Login = lazy(() => import('./Components/LoginComponent/LoginComponent'));
const StudentComponent = lazy(() => import('./Components/StudentComponent/StudentComponent'));

ReactDOM.render(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/student" component={StudentComponent} />
            </div>
        </Suspense>
    </Router>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
