import React from "react";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from "./components/Login";
import CountryDetails from "./components/CountryDetails";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar"

const App = () => {
  return(
    <>
      <Navbar></Navbar>
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/countryDetails' component={CountryDetails}/>
          <Route path="*"  component={ErrorPage} />
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;