'use client';

import {HeadingCustom} from './style';
import {ReactNode} from 'react';

interface HeadingProps {
  children: ReactNode;
  as?: string;
  align?: 'left' | 'center' | 'right';
  color?: string;
}

export default function Heading(props: HeadingProps) {
  const {children, align = 'left', color = 'white'} = props;

  return (
    <HeadingCustom $align={align} $color={color}>
      {children}
    </HeadingCustom>
  );
}
