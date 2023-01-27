import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    apikey: process.env.REACT_APP_API_KEY,
  },
  baseURL:
    "https://api.apilayer.com/exchangerates_data/latest?symbols=&base=rub",
});

export default axiosInstance;
