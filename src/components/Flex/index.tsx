'use client';

import {ReactNode} from 'react';
import {FlexCustom} from './style';

interface FlexProps {
  children: ReactNode;
  gap?: 0 | 2 | 4 | 8 | 16 | 32 | 64;
  direction?: 'row' | 'column';
  flex?: 0 | 1 | 'initial';
  justify?: 'start' | 'end' | 'space-between' | 'center';
  align?: 'start' | 'center' | 'end';
}

export default function Flex(props: FlexProps) {
  const {
    children,
    gap = 0,
    direction = 'row',
    flex = '0',
    justify = 'start',
    align = 'start',
  } = props;

  return (
    <FlexCustom
      $gap={`${gap}px`}
      $direction={direction}
      $flex={flex as 0 | 1 | 'initial'}
      $justify={justify}
      $align={align}>
      {children}
    </FlexCustom>
  );
}
