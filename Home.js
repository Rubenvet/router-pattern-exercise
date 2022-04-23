import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
// import { Button } from 'semantic-ui-react';
import Steve from "./Steve";
import Dogs from "./Dogs";
import Max from "./Max";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Dog category!</h1>
                <div class="options">
             <Link to="/Steve">
                <button type="button" class="btn btn-primary">
                    <p>Steve</p>
                </button>
            </Link>
            <Link to="/Dogs">
            <button type="button" class="btn btn-primary">
                    <p>Bruce</p>
                </button>
            </Link>
            <Link to="/Max">
            <button type="button" class="btn btn-primary">
                    <p>Max</p>
                </button>
            </Link>
            </div>
                {/* <Switch>
                    <Route
                        exact path="/dogs"
                        render={() => <Dogs />}
                    />
                    <Route
                        exact path="/max"
                        render={() => <Max />}
                    />
                    <Route
                        exact path="/steve"
                        render={() => <Steve />}
                    />
                </Switch> */}
            </div>
        )
    }
}

export default Home;