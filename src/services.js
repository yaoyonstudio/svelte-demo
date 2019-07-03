import {
  API_URL
} from './constants'

export const blogServices = {
  fetchPostService: async (page, per_page) => {
    const res = await fetch(
      `${API_URL}/posts?per_page=${per_page}&page=${page}&_embed`
    );
    const data = await res.json();
    return data
  }
}