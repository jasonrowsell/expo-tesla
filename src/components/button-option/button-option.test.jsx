import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import ButtonOption from './button-option';

describe('<ButtonOption />', () => {
  const onPress = jest.fn();
  const renderComponent = () => render(<ButtonOption type="primary" content="content" onPress={onPress} />);

  test('has 1 child', () => {
    const tree = renderer.create(<ButtonOption type="primary" content="content" onPress={onPress} />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  test('renders correctly', () => {
    const tree = renderComponent();
    expect(tree).toMatchSnapshot();
  });

  test('has the content', () => {
    const { getByText } = renderComponent();
    getByText('content');
  });

  test('calls a functions once pressed', () => {
    const { getByText } = renderComponent();
    const button = getByText('content');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });

  describe('primary type of button', () => {
    test('has backgroundColor of light gray', () => {
      const { getByTestId } = renderComponent();

      const button = getByTestId('button');

      expect(button).toHaveStyle({
        backgroundColor: '#171A20CC',
      });
    });

    test('has font color of black', () => {
      const { getByText } = renderComponent();

      const button = getByText('content');

      expect(button).toHaveStyle({
        color: '#FFFFFF',
      });
    });
  });

  describe('secondary type of button', () => {
    test('has backgroundColor of dark gray', () => {
      const { getByTestId } = render(<ButtonOption type="secondary" content="content" onPress={onPress} />);

      const button = getByTestId('button');

      expect(button).toHaveStyle({
        backgroundColor: '#FFFFFFA6',
      });
    });

    test('has font color of light gray', () => {
      const { getByText } = render(<ButtonOption type="secondary" content="content" onPress={onPress} />);

      const button = getByText('content');

      expect(button).toHaveStyle({
        color: '#171A20',
      });
    });
  });
});
