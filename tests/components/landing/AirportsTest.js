// Link.react.test.js
import React from 'react';
import Airport from '../../../src/components/landing/Airport.js';
import renderer from 'react-test-renderer';

test('Airport renders correctly', () => {
  const component = renderer.create(<Airport/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
