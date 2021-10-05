import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import MenuItems from './menu-items';

describe('<MenuItems />', () => {
  test('has 1 child', () => {
    const tree = renderer.create(<MenuItems />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  test('renders correctly', () => {
    const tree = render(<MenuItems />);
    expect(tree).toMatchSnapshot();
  });
});
