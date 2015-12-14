import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import reactStub from 'react-stub';

import { App } from 'lib/components/app';
import Error from 'lib/components/error';
import { initialAppState } from 'lib/reducers/app';


describe('App', function() {

  it('should render an error', function() {
    let appState = {
      ...initialAppState,
      error: 'some error',
    };
    let ErrorStub = reactStub(Error);
    let container = ReactTestUtils.renderIntoDocument(
      <App app={appState} Error={ErrorStub} />
    );

    // This is not a very useful test but it's more of a proof for
    // how to use reactStub() to verify the use of dependent components.
    let renderedError = ReactTestUtils.findRenderedComponentWithType(
      container, ErrorStub
    );
    expect(renderedError.props.message).to.be.equal('some error');
  });

});
