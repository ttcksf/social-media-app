import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

//リクエストを送る前の共通処理
API.interceptors.request.use((req) => {
  //ローカルストレージのプロフィールの値を確認
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.stringify(
      localStorage.getItem("profile").token
    )}`;
  }
  return req;
});

export const getUser = (userId) => API.get(`/user/${userId}`);

export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);

export const getAllUser = () => API.get("/user");

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data);

export const unfollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);
