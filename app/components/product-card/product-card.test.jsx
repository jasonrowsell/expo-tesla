import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { Alert } from 'react-native';

import ProductCard from './product-card';

describe('<CarCard />', () => {
  const renderComponent = () => render(
    <ProductCard title="title" tagline="tagline" source="img" />,
  );

  test('has 3 children', () => {
    const tree = renderer.create(
      <ProductCard title="title" tagline="tagline" source="img" />,
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

  test('Order now alert is displayed when order now button is pressed', () => {
    jest.spyOn(Alert, 'alert');
    const { getByText } = renderComponent();

    const button = getByText('Order Now');
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith('Order Now was pressed');
  });

  test('Learn more alert is displayed when learn more button is pressed', () => {
    jest.spyOn(Alert, 'alert');
    const { getByText } = renderComponent();

    const button = getByText('Learn More');
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith('Learn More was pressed');
  });

  describe(('termsLinks enabled'), () => {
    test('renders terms links', () => {
      const { getByText } = render(
        <ProductCard title="title" tagline="tagline" source="img" termsLinks />,
      );

      getByText('Jason Rowsell © 2021');
      getByText('Privacy & Legal');
      getByText('Careers');
      getByText('News');
    });

    test('Shop now alert is displayed when shop now button is pressed', () => {
      jest.spyOn(Alert, 'alert');
      const { getByText } = render(
        <ProductCard title="title" tagline="tagline" source="img" termsLinks />,
      );

      const button = getByText('Shop Now');
      fireEvent.press(button);

      expect(Alert.alert).toHaveBeenCalledWith('Shop Now was pressed');
    });
  });
});
