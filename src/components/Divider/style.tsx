'use client';

import {styled} from 'styled-components/native';

interface DividerCustomProps {
  $x?: number;
  $y?: number;
}

export const DividerCustom = styled.View<DividerCustomProps>`
  width: 100%;

  min-height: ${props => props.$y}px;
`;
