import { ReceiverInformation } from "../../context/AppContext";

export interface LNRequestResponse {
  tag: string;
  callback: string;
  metadata: string;
  commentAllowed: number;
  minSendable?: number;
  maxSendable?: number;
  k1?: string;
  minWithdrawable?: number;
  maxWithdrawable?: number;
}

export const nowInSeconds = (): number => {
  return Math.floor(Date.now() / 1000);
};

export const validateEmail = (email: string): RegExpMatchArray | null => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

export const getPayRequest = async (url: string): Promise<LNRequestResponse> => {
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) return null;
      return res.json();
    })
    .then((walletInfo) => {
      if (!walletInfo) return null;

      return walletInfo;
    })
    .catch(() => null);
};

export const splitHandle = (handle: string): string[] => {
  if (!handle.length) return [];

  try {
    if (handle.includes('@')) {
      const [username, domain] = handle.split('@');
      return [username!, domain!];
    } else {
      return [handle, "lawallet.ar"];
    }
  } catch {
    return [];
  }
};

export const parseLUD16Info = async (data: string) => {
  const [username, domain] = splitHandle(data);
  const payRequest = await getPayRequest(`https://${domain}/.well-known/lnurlp/${username}`);
  if (!payRequest) return;

  const receiverInfo: ReceiverInformation = {
    lud16: `${username}@${domain}`,
    payRequest: payRequest,
  };

  return receiverInfo;
};

export const claimLNURLw = async (
  callback: string,
  k1: string,
  pr: string
): Promise<boolean> => {
  if (!callback || !k1 || !pr) return false;

  try {

    let urlCallback: string = `${callback}?k1=${k1}&pr=${pr}`;

    return fetch(urlCallback).then((res) => {
      return res.status === 200;
    });
  } catch (err) {
    console.log(err)
    return false;
  }
};

export const generateInvoice = (callback: string, mSats: number) =>
  fetch(`${callback}?amount=${mSats}`)
    .then((res) => res.json())
    .then((invoiceInfo) => (invoiceInfo && invoiceInfo.pr ? invoiceInfo.pr.toLowerCase() : ''))
    .catch(() => '');