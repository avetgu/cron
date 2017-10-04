#!/usr/bin/env node

const Axios = require('axios');

const axiosListenerQuiz = Axios.create({
  baseURL: `${process.env.API_ADDRESS}/listener-quiz`,
  auth: {
    username: 'your_username',
    password: 'your_password'
  }
});

axiosListenerQuiz.post('/clean')
  .then(function (res) {})
  .catch(function (err) { console.log(err) });