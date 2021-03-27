import React from 'react';
import {
    Redirect,
    Route,
    Switch,
    BrowserRouter,
} from 'react-router-dom';
import Login from './components/Login';
import CountryDetails from './components/CountryDetails';
import SavedCountryList from './components/SavedCountryList';
import ErrorPage from './components/ErrorPage';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route
                    path="/country-details"
                    component={CountryDetails}
                />
                <Route
                    path="/saved-country-list"
                    component={SavedCountryList}
                />
                <Route path="*" component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
