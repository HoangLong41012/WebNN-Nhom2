import axios from 'axios';
import _ from 'lodash';

export const baseApi = "http://localhost:3030";

export const getApiResponse = async ({
  url,
  query,
}) => {
  const option = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let baseUrlWithVersion = `${baseApi}${url}`;
  if (query) {
    baseUrlWithVersion = `${baseUrlWithVersion}?query=${query}`;
  }
  const fetchResult = await axios.get(baseUrlWithVersion, option);
  const result = await fetchResult.data;
  return result;
};

export const PostApiResponse = async ({
  url,
  body,
  query,
}) => {
  const option = {
    headers: {
      'Accept': '*',
      'Content-Type': 'application/sparql-results+json; charset=utf-8',
      'Content-Encoding': 'gzip, deflate, br',
      'Transfer-Encoding': 'chunked',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': true
    },
  };

  let baseUrlWithVersion = `${baseApi}${url}`;
  if (query) {
    baseUrlWithVersion = `${baseUrlWithVersion}?query=${query}`;
  }
  const fetchResult = await axios.post(baseUrlWithVersion, body, option);
  const result = await fetchResult.data;
  return result;
};

export const postApiResponse = async ({
  url,
  body,
  token,
  lang,
  version = 'v1',
}) => {
  const option = {
    headers: {
      'Content-Type': 'application/json',
      appid: 'mmenu-customer',
      lang: lang || _getLang(),
    },
  };

  if (token || getJWTToken()) {
    _.set(option, 'headers.authorization', `Bearer ${token || getJWTToken()}`);
  }
  let baseUrlWithVersion = baseUrl;
  if (version === 'v2') {
    baseUrlWithVersion = baseUrl.replace(/v1/, 'v2');
  }
  const urlWithBase = `${baseUrlWithVersion}${url}`;
  const fetchResult = await axios.post(urlWithBase, body, option);
  const result = await fetchResult.data;
  return result;
};
