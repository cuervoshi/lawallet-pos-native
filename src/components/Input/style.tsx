'use client';

import {styled} from 'styled-components/native';
import theme from '../../styles/theme';

interface InputCustomProps {
  $isSuccess?: boolean;
  $showValidate?: boolean;
}

export const Input = styled.TextInput<InputCustomProps>`
  flex: 1;
  min-height: 50px;
  width: 100%;

  padding: 8px;
  padding-left: 12px;

  background-color: ${theme.colors.gray15};
  border-radius: 8px;
  border: 1px solid
    ${props =>
      props.$showValidate
        ? theme.colors.gray20
        : props.$isSuccess
        ? theme.colors.success
        : theme.colors.error};

  color: ${theme.colors.text};
`;

export const InputButton = styled.View`
  display: flex;
  align-items: center;
  height: 100%;

  padding-right: 10px;
`;

export const InputGroup = styled.View`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: center;
`;

export const InputGroupRight = styled.View`
  display: flex;
  align-items: center;
  min-height: 50px;

  padding: 0 12px;

  background-color: ${theme.colors.gray10};
  border: 1px solid ${theme.colors.gray20};
  border-left: 0;
  border-radius: 0 8px 8px 0;
`;

interface FeedbackProps {
  $isShow: boolean;
  $isSuccess: boolean;
}

export const Feedback = styled.View<FeedbackProps>`
  opacity: ${props => (props.$isShow ? 1 : 0)};

  display: block;

  margin-top: 4px;

  color: ${props =>
    props.$isSuccess ? theme.colors.success : theme.colors.error};
`;

export const InputWithLabel = styled.View``;

interface InputBoxProps {
  $withIcon: boolean;
}

export const InputBox = styled.View<InputBoxProps>`
  position: relative;

  width: 100%;
`;

export const InputIcon = styled.View`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
`;

export const Textarea = styled.TextInput<InputCustomProps>`
  width: 100%;

  padding: 8px;
  padding-left: 12px;

  background-color: ${theme.colors.gray15};
  border-radius: 8px;
  border: 1px solid
    ${props =>
      props.$showValidate
        ? theme.colors.gray20
        : props.$isSuccess
        ? theme.colors.success
        : theme.colors.error};

  color: ${theme.colors.text};

  outline: none;
  resize: none;

  transition-duration: 0.3s;
`;
export const Pin = styled.View`
  width: 100%;
`;
