import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import Overlay from './overlay';

describe('<Overlay />', () => {
  const renderComponent = () => render(
    <Overlay open>
      <Text>
        My Content
      </Text>
    </Overlay>,
  );

  test('has 1 child', () => {
    const tree = renderer.create(
      <Overlay open>
        <Text>
          My Content
        </Text>
      </Overlay>,
    ).toJSON();
    expect(tree.children.length).toBe(1);
  });

  test('renders correctly', () => {
    const tree = renderComponent();
    expect(tree).toMatchSnapshot();
  });

  test('renders to the page if open is true', () => {
    const { getByText } = renderComponent();
    getByText('My Content');
  });

  test('does not render to the page if open is false', () => {
    const { queryByText } = render(
      <Overlay open={false}>
        <Text>
          My Content
        </Text>
      </Overlay>,
    );
    expect(queryByText('My Content')).not.toBeTruthy();
  });
});
