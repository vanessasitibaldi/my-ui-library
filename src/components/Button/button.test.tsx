import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from '@testing-library/react-native';
import { Button } from './button';
import { ThemeProvider } from 'styled-components/native';
import { themes } from '../../tokens/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={themes['brand-a']}>{component}</ThemeProvider>);
};

describe('Button Component', () => {
  it('should render correctly with default props', () => {
    const { getByText } = renderWithTheme(<Button title="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('should render with primary variant by default', () => {
    const { getByText } = renderWithTheme(<Button title="Primary Button" />);
    const button = getByText('Primary Button');
    expect(button).toBeTruthy();
  });

  it('should render with secondary variant', () => {
    const { getByText } = renderWithTheme(<Button title="Secondary Button" variant="secondary" />);
    const button = getByText('Secondary Button');
    expect(button).toBeTruthy();
  });

  it('should render with outline variant', () => {
    const { getByText } = renderWithTheme(<Button title="Outline Button" variant="outline" />);
    const button = getByText('Outline Button');
    expect(button).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithTheme(
      <Button title="Clickable Button" onPress={onPressMock} />,
    );

    const button = getByText('Clickable Button');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithTheme(
      <Button title="Disabled Button" onPress={onPressMock} disabled />,
    );

    const button = getByText('Disabled Button');
    fireEvent.press(button);

    expect(onPressMock).not.toHaveBeenCalled();
  });
});
