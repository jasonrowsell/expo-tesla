import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import CarsList from './cars-list';

describe('<CarsList />', () => {
  test('has 1 child', () => {
    const tree = renderer.create(<CarsList title="title" tagline="tagline" source="img" />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  test('renders correctly', () => {
    const tree = render(<CarsList />);
    expect(tree).toMatchSnapshot();
  });
});
