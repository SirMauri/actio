import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [error, setError] = useState('');

  const doRequest = async () => {
    try {
      setError([]);
      if (process.env.NODE_ENV === 'production') {
        const response = await axios[method](url, body);
        if (onSuccess) {
          onSuccess(response.data);
        }
        return response.data;
      } else {
        const response = await axios[method](`http://localhost:8081${url}`, body);
        if (onSuccess) {
          onSuccess(response.data);
        }
        return response.data;
      }
    } catch (err) {
      setError(err.response.data.error.message);
    }
  };

  return { doRequest, error };
};
