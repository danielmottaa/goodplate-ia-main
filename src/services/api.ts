import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers: {
    "Authorization": "Key 7814f94d93194cde9f751847207afa89"
  }
})