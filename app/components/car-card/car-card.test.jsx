import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { Alert } from 'react-native';

import CarCard from './car-card';

describe('<CarCard />', () => {
  const renderComponent = () => render(
    <CarCard title="title" tagline="tagline" taglineCTA="taglineCTA" source="img" />,
  );

  test('has 3 children', () => {
    const tree = renderer.create(<CarCard title="title" tagline="tagline" source="img" />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  test('renders correctly', () => {
    const tree = renderComponent();
    expect(tree).toMatchSnapshot();
  });

  test('has the title', () => {
    const { getByText } = renderComponent();
    getByText('title');
  });

  test('has the tagline followed by the CTA', () => {
    const { getByText } = renderComponent();
    getByText('tagline taglineCTA');
  });

  test('custom order alert is displayed when custom order button is pressed', () => {
    jest.spyOn(Alert, 'alert');
    const { getByText } = renderComponent();

    const button = getByText('Custom Order');
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith('Custom order was pressed');
  });

  test('existing inventory alert is displayed when existing inventory button is pressed', () => {
    jest.spyOn(Alert, 'alert');
    const { getByText } = renderComponent();

    const button = getByText('Existing Inventory');
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith('Existing inventory was pressed');
  });
});
