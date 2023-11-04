import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link,  } from "react-router-dom";
import PageTransition from "./animation/PageTransition";



export default class MainRouter {
    render() {
        return (
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Page 1</Link>
                </li>
                <li>
                  <Link to="/page2">Page 2</Link>
                </li>
                <li>
                  <Link to="/page3">Page 3</Link>
                </li>
              </ul>
            </nav>
            <Route
              render={({ location }) => (
                <PageTransition key={location.key}>
                  <Route location={location} path="/" exact component={Page1} />
                  <Route location={location} path="/page2" component={Page2} />
                  <Route location={location} path="/page3" component={Page3} />
                </PageTransition>
              )}
            />
          </Router>
        );
      }
    }