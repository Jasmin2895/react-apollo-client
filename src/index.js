import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';


// import App from './App';
import Login from "./components/Login"
import './index.css';
// import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'https://7sgx4.sse.codesandbox.io'
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* <App /> */}
      <Login/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();