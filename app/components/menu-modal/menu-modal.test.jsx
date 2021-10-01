import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { Text } from 'react-native';

import MenuModal from './menu-modal';

describe('<ItemsList />', () => {
  test('has 1 child', () => {
    const onClose = jest.fn();
    const tree = renderer.create(
      <MenuModal onClose={() => onClose()}>
        <Text>
          My Content
        </Text>
      </MenuModal>,
    ).toJSON();
    expect(tree.children.length).toBe(1);
  });

  test('renders correctly', () => {
    const onClose = jest.fn();
    const tree = render(
      <MenuModal onClose={() => onClose()}>
        <Text>
          My Content
        </Text>
      </MenuModal>,
    );
    expect(tree).toMatchSnapshot();
  });
});
