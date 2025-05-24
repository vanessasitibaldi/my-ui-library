import styled from 'styled-components/native';

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
    variant === 'primary' ? '#007AFF' : 
    variant === 'secondary' ? '#5856D6' : 
    variant === 'outline' ? 'transparent' : '#007AFF'};
  border: ${({ variant }) => 
    variant === 'outline' ? '1px solid #007AFF' : 'none'};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ variant }) => 
    variant === 'outline' ? '#007AFF' : '#FFFFFF'};
`; 
