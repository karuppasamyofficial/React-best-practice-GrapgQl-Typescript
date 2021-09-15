import React from "react";
import Header from "../header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../common/style";
import Home from "../../pages/Home";
import About from "../../pages/About";
import {Client}  from "../common/ApolloClint";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
const App: React.FC = () => {
  return (
    <div>
      <ApolloProvider client={Client} >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
