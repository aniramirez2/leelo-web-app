import axios from 'axios';

export const api = axios.create({
  baseURL: `http://aws-leelo-alb-services-799188184.us-east-1.elb.amazonaws.com/accounts/api/v1/`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

