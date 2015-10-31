import { expect } from 'chai';

import * as actionTypes from 'lib/constants/action-types';
import * as appActions from 'lib/actions/app-actions';


describe('App Actions', function() {

  it('should dispatch an error', function() {
    let action = appActions.appError('Some error');
    expect(action).to.be.deep.equal({
      type: actionTypes.APP_ERROR,
      error: 'Some error',
    });
  });

});
