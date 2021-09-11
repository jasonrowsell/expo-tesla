import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import Header from './header';

describe('<Header />', () => {
  test('has 2 children', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  test('renders correctly', () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
