'use client';
import {Input, InputBox} from './style';

interface InputProps {
  placeholder: string;
  value?: string;
  type?: 'text' | 'password' | 'number' | 'email';
  id?: string;
  name?: string;
  status?: 'success' | 'error';
  autoFocus?: boolean;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  isLoading?: boolean;
  isChecked?: boolean;
  isError?: boolean;
  disabled?: boolean;
}

export default function Component(props: InputProps) {
  const {
    placeholder,
    value,
    id = '',
    status,
    autoFocus = false,
    onChange,
    onFocus,
    onBlur,
    isLoading = false,
  } = props;

  return (
    <InputBox $withIcon={isLoading}>
      <Input
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        id={id}
        value={value}
        $showValidate={!status}
        $isSuccess={status && status === 'success'}
        autoFocus={autoFocus}
      />
    </InputBox>
  );
}
