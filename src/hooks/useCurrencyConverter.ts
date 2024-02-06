import { useEffect, useState } from 'react'
import { decimalsToUse, roundToDown } from '../lib/utils/formatter'

const ENDPOINT_PRICE_BTC: string = 'https://api.yadio.io/exrates/btc'
const scaledBTC: number = 10 ** 8

export type AvailableCurrencies = 'SAT' | 'USD' | 'ARS'
export const CurrenciesList: AvailableCurrencies[] = ['SAT', 'USD', 'ARS']
type PricesInfo = Record<AvailableCurrencies, number>

export type UseConverterReturns = {
  pricesData: PricesInfo
  convertCurrency: (
    amount: number,
    currencyA: AvailableCurrencies,
    currencyB: AvailableCurrencies
  ) => number
}

const useCurrencyConverter = (): UseConverterReturns => {
  const [pricesData, setPricesData] = useState<PricesInfo>({
    ARS: 0,
    USD: 0,
    SAT: 1
  })

  const convertCurrency = (
    amount: number,
    currencyA: AvailableCurrencies,
    currencyB: AvailableCurrencies
  ): number => {
    let convertedAmount: number = 0
    if (!pricesData[currencyA] || !pricesData[currencyB]) return convertedAmount

    const multiplier: number = pricesData[currencyB] / pricesData[currencyA]
    convertedAmount = amount * multiplier

    return Number(
      roundToDown(convertedAmount, 8).toFixed(decimalsToUse(currencyB))
    )
  }

  const requestUpdatedPrices = (): Promise<PricesInfo | false> => {
    return fetch(ENDPOINT_PRICE_BTC)
      .then(res => res.json())
      .then(pricesResponse => {
        const BTCPrices = pricesResponse.BTC
        if (!BTCPrices) return false

        const updatedPrices: PricesInfo = {
          ARS: BTCPrices.ARS / scaledBTC,
          USD: BTCPrices.USD / scaledBTC,
          SAT: 1
        }

        return updatedPrices
      })
  }

  const updatePrices = async () => {
    try {
      const updatedPrices: PricesInfo | false = await requestUpdatedPrices()
      if (!updatedPrices) return

      setPricesData(updatedPrices)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    updatePrices()
  }, [])

  return { pricesData, convertCurrency }
}

export default useCurrencyConverter
