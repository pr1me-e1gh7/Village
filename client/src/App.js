// Loads landing page - update to add Login Status Check
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Welcome from "./components/Welcome.js";
import Signup from './components/Modals/Signup.js';
import Login from './components/Modals/Login.js';
import Footer from "./components/Footer.js";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Welcome/>} />
          <Route path='/Signup' exact element={<Signup/>} />
          <Route path='/Login' exact element={<Login/>} />
          {/* <Route path='/Village' exact element={<Village/>} /> */}
        </Routes>
        <Footer></Footer>
      </Router>
    </ApolloProvider>
  )
}

export default App;