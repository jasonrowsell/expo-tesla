import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import ButtonOption from './button-option';

describe('<ButtonOption />', () => {
  test('has 1 child', () => {
    const onPress = jest.fn();
    const tree = renderer.create(<ButtonOption type="primary" content="content" onPress={onPress} />).toJSON();

    expect(tree.children.length).toBe(1);
  });

  test('renders correctly', () => {
    const onPress = jest.fn();
    const tree = render(<ButtonOption type="primary" content="content" onPress={onPress} />);

    expect(tree).toMatchSnapshot();
  });

  test('has the content', () => {
    const onPress = jest.fn();
    const { getByText } = render(<ButtonOption type="primary" content="content" onPress={onPress} />);

    getByText('content');
  });

  test('calls onPress function once clicked', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonOption type="primary" content="content" onPress={onPress} />);

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  });

  describe('primary type of button', () => {
    test('has backgroundColor of light gray', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(<ButtonOption type="primary" content="content" onPress={onPress} />);

      const button = getByTestId('button');

      expect(button).toHaveStyle({
        backgroundColor: '#171A20CC',
      });
    });

    test('has font color of black', () => {
      const onPress = jest.fn();
      const { getByText } = render(<ButtonOption type="primary" content="content" onPress={onPress} />);

      const button = getByText('content');

      expect(button).toHaveStyle({
        color: '#FFFFFF',
      });
    });
  });

  describe('secondary type of button', () => {
    test('has backgroundColor of dark gray', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(<ButtonOption type="secondary" content="content" onPress={onPress} />);

      const button = getByTestId('button');

      expect(button).toHaveStyle({
        backgroundColor: '#FFFFFFA6',
      });
    });

    test('has font color of light gray', () => {
      const onPress = jest.fn();
      const { getByText } = render(<ButtonOption type="secondary" content="content" onPress={onPress} />);

      const button = getByText('content');

      expect(button).toHaveStyle({
        color: '#171A20',
      });
    });
  });
});
