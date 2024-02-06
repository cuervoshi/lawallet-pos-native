'use client';

import ReactQRCode from 'react-qr-code';
import {QRCode as QRCodeStyles} from './style';
import theme from '../../styles/theme';
import Clipboard from '@react-native-clipboard/clipboard';

interface ComponentProps {
  value: string;
  size?: number;
  borderSize?: number;
  showCopy?: boolean;
  textToCopy?: string;
}

export function QRCode({value, size = 150, borderSize = 40}: ComponentProps) {
  const handleCopy = (text: string) => {
    // copy(text).then(res => {
    //   setShowToast(false);
    //   notifications.showAlert({
    //     description: res ? t('SUCCESS_COPY') : t('ERROR_COPY'),
    //     type: res ? 'success' : 'error',
    //   });
    // });

    Clipboard.setString(text);
  };

  return (
    <QRCodeStyles size={size + borderSize} onPress={() => handleCopy(value)}>
      <ReactQRCode
        value={value}
        size={size}
        fgColor={theme.colors.black}
        bgColor={theme.colors.white}
      />
    </QRCodeStyles>
  );
}
