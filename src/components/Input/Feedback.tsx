'use client';

import {ReactNode} from 'react';
import {Feedback} from './style';
import {Text} from 'react-native';

interface FeedbackProps {
  children: ReactNode;
  status?: null | 'success' | 'error';
  show?: boolean;
}

export default function Component(props: FeedbackProps) {
  const {children, status, show = false} = props;

  return (
    <Feedback $isShow={show} $isSuccess={status === 'success'}>
      <Text>{children}</Text>
    </Feedback>
  );
}
