'use client';

import {styled} from 'styled-components/native';

interface HeadingProps {
  $align: 'left' | 'center' | 'right';
  $color?: string;
}

export const HeadingCustom = styled.Text<HeadingProps>`
  color: ${props => props.$color};
  text-align: ${props => props.$align};
`;
