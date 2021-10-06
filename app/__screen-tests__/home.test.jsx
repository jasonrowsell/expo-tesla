import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import Home from '../screens/home';

describe('<Home />', () => {
  test('has 1 child', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree.children.length).toBe(2);
  });

  test('renders correctly', () => {
    const tree = render(<Home />);

    expect(tree).toMatchSnapshot();
  });
});
