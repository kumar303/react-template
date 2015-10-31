import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from 'lib/actions/app-actions'
import Error from 'lib/components/error';


export class App extends Component {

  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.boundAppActions = bindActionCreators(appActions, props.dispatch);
  }

  render() {
    if (this.props.app.error) {
      return <Error message={this.props.app.error} />;
    }

    return (
      <div>
        <h1>Hello from React!</h1>
        <p>
          <a onClick={() => this.boundAppActions.appError('This is an error')} href="#">
            Would you like to see an error?
          </a>
        </p>
        <p>
          Of course you would.
        </p>
        <button>Example button</button>
      </div>
    );
  }
}


function select(state) {
  return {
    app: state.app,
  };
}


export default connect(select)(App);
