import React, { useState, useEffect, createContext } from "react";
import { Alert } from "react-native";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");
  const [exchangeRate, setExchangeRate] = useState("0");
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${baseCurrency}&to_currency=${quoteCurrency}&apikey=asdasdasdf`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data["Realtime Currency Exchange Rate"])
          throw new Error("Something went wrong");

        const rate = Number.parseFloat(
          data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        ).toFixed(4);
        setExchangeRate(rate);

        const extractDate = data["Realtime Currency Exchange Rate"][
          "6. Last Refreshed"
        ].split(" ")[0];

        setDate(new Date(extractDate));
      })
      .catch((error) => {
        Alert.alert("Something went wrong.", "Please try again later.", [
          { text: "OK", onPress: () => setErrorMess("") },
        ]);
      })
      .finally(() => setIsLoading(false));
  }, [baseCurrency, quoteCurrency]);

  return (
    <ConversionContext.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        quoteCurrency,
        setQuoteCurrency,
        exchangeRate,
        date,
        isLoading,
      }}
    >
      {children}
    </ConversionContext.Provider>
  );
};
