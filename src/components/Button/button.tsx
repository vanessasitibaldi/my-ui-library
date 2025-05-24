import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText } from './button.styles';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ title, variant = 'primary', ...rest }) => {
  return (
    <ButtonContainer variant={variant} {...rest}>
      <ButtonText variant={variant}>{title}</ButtonText>
    </ButtonContainer>
  );
};
