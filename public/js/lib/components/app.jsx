import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from 'lib/actions/app-actions';
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
          <button
              onClick={() => this.boundAppActions.appError('This is an error')}>
            Would you like to see an error?
          </button>
        </p>
        <p>
          Of course you would.
        </p>
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
