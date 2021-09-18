import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { Alert } from 'react-native';

import ProductCard from './product-card';

describe('<CarCard />', () => {
  const renderComponent = () => render(
    <ProductCard title="title" tagline="tagline" buttonContent="buttonContent" source="img" />,
  );

  test('has 3 children', () => {
    const tree = renderer.create(
      <ProductCard title="title" tagline="tagline" buttonContent="buttonContent" source="img" />,
    ).toJSON();
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

  test('button content alert is displayed when button is pressed', () => {
    jest.spyOn(Alert, 'alert');
    const { getByText } = renderComponent();

    const button = getByText('buttonContent');
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith('buttonContent was pressed');
  });

  test('renders terms links', () => {
    const { getByText } = render(
      <ProductCard title="title" tagline="tagline" buttonContent="buttonContent" source="img" termsLinks />,
    );

    getByText('Tesla © 2021');
    getByText('Privacy & Legal');
    getByText('Careers');
    getByText('News');
  });
});
