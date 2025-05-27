import styled from 'styled-components/native';
import { dimension } from '../../utils/dimensions.utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

interface ButtonTextProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  padding: ${dimension(12)}px ${dimension(24)}px;
  border-radius: ${dimension(8)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.brand.main : 
    variant === 'secondary' ? theme.colors.brand.main : 
    variant === 'outline' ? 'transparent' : theme.colors.brand.main};
  border: ${({ variant, theme }) => 
    variant === 'outline' ? `1px solid ${theme.colors.brand.main}` : 'none'};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${dimension(16)}px;
  font-weight: 600;
  color: ${({ variant, theme }) => 
    variant === 'outline' ? theme.colors.brand.main : theme.colors.base.LT};
`; 
