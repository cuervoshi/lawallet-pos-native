import { AvailableCurrencies } from "../../hooks/useCurrencyConverter"

export const decimalsToUse = (currency: AvailableCurrencies): number => {
  switch (currency) {
    case 'SAT':
      return 0

    case 'ARS':
      return 2

    default:
      return 2
  }
}

export const roundToDown = (num: number, decimals: number): number => {
  const t = Math.pow(10, decimals)
  return Number(
    (
      Math.floor(
        num * t +
          (decimals > 0 ? 1 : 0) *
            (Math.sign(num) * (10 / Math.pow(100, decimals)))
      ) / t
    ).toFixed(decimals)
  )
}

export const roundNumber = (num: number, decimales: number = 5): number => {
  const signo: number = num >= 0 ? 1 : -1
  num = num * signo
  if (decimales === 0) return signo * Math.round(num)

  const multiplicador: number = Math.pow(10, decimales)
  num = Math.round(num * multiplicador) / multiplicador

  return signo * num
}