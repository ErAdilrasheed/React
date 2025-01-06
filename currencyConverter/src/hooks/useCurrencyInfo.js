import { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(
      `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // Fixed missing parentheses for res.json()
      .then((res) => setData(res[currency]))
      .catch((err) => console.error('Failed to fetch currency data:', err)) // Added error handling
  }, [currency]) // Added 'currency' as dependency to update data when currency changes

  return data
}
export default useCurrencyInfo
