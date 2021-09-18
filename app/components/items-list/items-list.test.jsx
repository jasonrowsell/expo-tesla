import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import ItemsList from './items-list';

describe('<ItemsList />', () => {
  test('has 1 child', () => {
    const tree = renderer.create(<ItemsList title="title" tagline="tagline" source="img" />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  test('renders correctly', () => {
    const tree = render(<ItemsList />);
    expect(tree).toMatchSnapshot();
  });
});
