import {
  API_URL
} from './constants'

import {
  jqueryAjax
} from './utils'

export const blogServices = {
  getPostListService: async (params = {
    page: 1,
    per_page: 10
  }, fn, errFn) => {
    return await jqueryAjax(
      `${API_URL}/posts?per_page=${params.per_page}&page=${params.page}&_embed`,
      'GET',
      params,
      fn,
      errFn
    );
  },
  getPostDetailService: async (id) => {
    if (!id) return null
    return await jqueryAjax(`${API_URL}/posts/${id}?_embed`,
      'GET')
  },
  fetchPostService: async (page, per_page) => {
    const res = await fetch(
      `${API_URL}/posts?per_page=${per_page}&page=${page}&_embed`
    );
    const data = await res.json();
    return data
  }
}