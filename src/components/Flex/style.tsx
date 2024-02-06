'use client';

import {styled} from 'styled-components/native';

interface FlexCustomProps {
  $gap?: string;
  $direction: 'row' | 'column';
  $flex?: 0 | 1 | 'initial';
  $justify?: 'start' | 'end' | 'space-between' | 'center';
  $align?: 'start' | 'center' | 'end';
}

export const FlexCustom = styled.View<FlexCustomProps>`
  position: relative;
  display: flex;
  flex-direction: ${props => props.$direction};
  gap: ${props => props.$gap};
  flex: ${props => props.$flex};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  width: 100%;
`;
