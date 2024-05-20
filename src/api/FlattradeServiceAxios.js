import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pi.flattrade.in/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

export default {
  getMarketData() {
    return apiClient.get('/market-data');
  },
  placeOrder(orderDetails) {
    return apiClient.post('/orders', orderDetails);
  }
};

