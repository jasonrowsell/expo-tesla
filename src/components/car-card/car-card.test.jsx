import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import CarCard from './car-card';

describe('<CarCard />', () => {
  const renderComponent = () => render(<CarCard title="title" tagline="tagline" source="img" />);
  it('has 2 children', () => {
    const tree = renderer.create(<CarCard title="title" tagline="tagline" source="img" />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it('renders correctly', () => {
    const tree = renderComponent();
    expect(tree).toMatchSnapshot();
  });

  it('has the title', () => {
    const { getByText } = renderComponent();
    getByText('title');
  });

  it('has the tagline', () => {
    const { getByText } = renderComponent();
    getByText('tagline');
  });
});
