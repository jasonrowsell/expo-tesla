import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import CarCard from './car-card';

describe('<CarCard />', () => {
  const renderComponent = () => render(<CarCard title="title" tagline="tagline" source="img" />);
  test('has 2 children', () => {
    const tree = renderer.create(<CarCard title="title" tagline="tagline" source="img" />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  test('renders correctly', () => {
    const tree = renderComponent();
    expect(tree).toMatchSnapshot();
  });

  test('has the title', () => {
    const { getByText } = renderComponent();
    getByText('title');
  });

  test('has the tagline', () => {
    const { getByText } = renderComponent();
    getByText('tagline');
  });
});
