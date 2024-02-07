'use client';

import theme from '../../styles/theme';
import {ButtonCustom} from './style';
import {ReactNode} from 'react';

type Color = 'primary' | 'secondary' | 'error';
type Variant = 'filled' | 'bezeled' | 'bezeledGray' | 'borderless';
type Size = 'small' | 'normal';

interface ButtonProps {
  children: ReactNode;
  color?: Color;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  componentName?: string;
  tabIndex?: number;
  onClick: (e: any) => any;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

function variantsList(variant: Variant, color: Color) {
  const list = {
    filled: {
      background: theme.colors[color],
      color: theme.colors.black,
    },
    bezeled: {
      background: theme.colors[`${color}15`],
      color: theme.colors[color],
    },
    bezeledGray: {
      background: theme.colors.gray15,
      color: theme.colors[color],
    },
    borderless: {
      background: theme.colors.transparent,
      color: theme.colors[color],
    },
  };

  return list[variant];
}

export default function Button(props: ButtonProps) {
  const {
    children,
    color = 'primary',
    variant = 'filled',
    size = 'normal',
    loading = false,
    disabled = false,
    onClick,
    onTouchEnd,
  } = props;

  return (
    <ButtonCustom
      onPress={onClick}
      onLongPress={onTouchEnd}
      disabled={disabled || loading}
      $isSmall={size === 'small'}
      $background={variantsList(variant, color)?.background}
      $color={variantsList(variant, color)?.color}>
      {children}
    </ButtonCustom>
  );
}
