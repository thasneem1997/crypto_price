import { createContext, useEffect, useState } from "react";
export const Appcontext = createContext();

const ContextProvider = (props) => {
  const [apicall, setapicall] = useState([]);
  const [currency, setcurrency] = useState({ name: "USD", symbol: "$" });
  const fetchdata =async () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-29rJX8qX5EhR54iNL55cYR3T'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(response => response.json())
        .then(response => setapicall(response))
        .catch(err => console.error(err));
  };
  useEffect(() => {fetchdata()}, [currency]);
  const api = {
    setcurrency,apicall,currency
  };
  return (
    <Appcontext.Provider value={api}>{props.children}</Appcontext.Provider>
  );
};

export default ContextProvider;
