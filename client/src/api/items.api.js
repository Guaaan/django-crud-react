import axios from 'axios';

export const getAllItems = async () => {
      return axios.get('http://localhost:8000/items/api/v1/items')
}