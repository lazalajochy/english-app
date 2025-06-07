import axios, { AxiosRequestConfig } from 'axios';

export default async function request<T>(method: string = "GET", url: string = "", data?: any): Promise<T> {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: `https://english-note-backend.onrender.com/${url}`,
      data, 
    };

    const response = await axios.request<T>(config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
