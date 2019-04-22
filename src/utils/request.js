import axios from 'axios';

axios.defaults.baseURL = 'http://118.24.64.174/api';
// axios.defaults.baseURL = 'http://localhost:81/api';

export function get(url, params = {}, callback) {
  axios({
    method: 'get',
    url: url,
    params: params
  })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function() {});
}

export function post(url, data = {}, callback) {
  axios({
    method: 'post',
    url: url,
    data: data
  })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function() {});
}

export function remove(url, id, callback) {
  axios({
    method: 'delete',
    url: url,
    params: { id: id }
  })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function() {});
}

export function update(url, data = {}, callback) {
  axios({
    method: 'put',
    url: url,
    data: data
  })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function() {});
}
