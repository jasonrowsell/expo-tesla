import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import Header from './header';

describe('<Header />', () => {
  test('has 2 children', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  test('renders correctly', () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
  });

  test('pressing the menu icon opens the menu modal', async () => {
    const { getByTestId, findByTestId } = render(<Header />);

    const menuIcon = getByTestId('menu-icon');
    fireEvent.press(menuIcon);

    const closeIcon = getByTestId('close-icon');

    await expect(findByTestId(closeIcon)).toBeTruthy();
  });

  test('pressing the close icon closes the menu modal', async () => {
    const { getByTestId, findByTestId } = render(<Header />);

    const menuIcon = getByTestId('menu-icon');
    fireEvent.press(menuIcon);

    const closeIcon = getByTestId('close-icon');
    fireEvent.press(closeIcon);

    await expect(findByTestId(menuIcon)).toBeTruthy();
  });
});
