import styled from 'styled-components/native';
import { colors } from '../../tokens/brand-a/colors';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

interface ButtonTextProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant }) => 
    variant === 'primary' ? colors.brand.main : 
    variant === 'secondary' ? colors.brand.main : 
    variant === 'outline' ? 'transparent' : colors.brand.main};
  border: ${({ variant }) => 
    variant === 'outline' ? `1px solid ${colors.brand.main}` : 'none'};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ variant }) => 
    variant === 'outline' ? colors.brand.main : colors.base.LT};
`; 
