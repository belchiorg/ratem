import axios from 'axios';
import type { Post } from '../types/Post';

const url = import.meta.env.VITE_SERVER_URL+'/api/posts';

const API = {
  fetchPosts: () => axios.get<Post[]>(url),
  
  fetchSinglePost: (id : number) => axios.get<Post>(`${url}/${id}`),
  
  createPost: (newPost : Post) => axios.post<Post>(url, newPost),
  
  updatePost: (id: number, updatedPost : Post) => axios.patch(`${url}/${id}`, updatedPost),
  
  deletePost: (id : number) => axios.delete(`${url}/${id}`)
}

export default API
