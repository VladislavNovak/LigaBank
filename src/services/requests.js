export const rates = {};

export const getCurrencies = async (dateQuery = `https://www.cbr-xml-daily.ru/daily_json.js`) => {
  const response = await fetch(dateQuery);
  const data = await response.json();
  const result = await data;

  rates.date = result.Date;
  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
  rates.GBP = result.Valute.GBP;
};
