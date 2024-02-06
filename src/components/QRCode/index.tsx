'use client';

import ReactQRCode from 'react-qr-code';
import {QRCode as QRCodeStyles} from './style';
import theme from '../../styles/theme';

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
  };

  return (
    <QRCodeStyles size={size + borderSize}>
      <ReactQRCode
        value={value}
        size={size}
        fgColor={theme.colors.black}
        bgColor={theme.colors.white}
      />
    </QRCodeStyles>
  );
}
