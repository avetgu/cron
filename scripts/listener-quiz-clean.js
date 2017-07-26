#!/usr/bin/env node

const Axios = require('axios');

const axiosListenerQuiz = Axios.create({
  baseURL: `${process.env.API_ADDRESS}/listener-quiz`,
  auth: {
    username: 'gwwl3',
    password: 'Amwtb2016!'
  }
});

axiosListenerQuiz.post('/clean')
  .then(function (res) {})
  .catch(function (err) { console.log(err) });