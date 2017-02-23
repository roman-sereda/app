import React                  from 'react';
import ReactDOM               from 'react-dom';
import { renderIntoDocument,
         scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils';
import Voting                 from '../../app/components/views/users/user-list';
import {expect}               from 'chai';

describe('Users\' list should ', () => {

  it('have user list', () => {

    const user_test = [{id: "1", pasword: "123123123", name: "panas"},
                       {id: "2", pasword: "123123123", name: "panas2"}]

    const component = renderIntoDocument(
      <Voting users = { user_test } />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'span');

    expect(buttons.length).to.equal(2);
  });

});
