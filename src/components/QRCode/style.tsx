'use client';

import {styled} from 'styled-components/native';
import theme from '../../styles/theme';

interface QRCodeProps {
  size: number;
}

export const QRCode = styled.TouchableOpacity<QRCodeProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size ?? 200}px;
  height: ${props => props.size ?? 200}px;
  background-color: ${theme.colors.white};
  border-radius: 12px;

  cursor: pointer;
`;
