import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";
export const api = axios.create({
  baseURL: "http://localhost:8000",
});
//this is getting all the properties available
export const getAllProperties = async () => {
  try {
    const response = await api.get("/api/residency/allRes", {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};
//function to get the specific property
export const getProperty = async (id) => {
  try {
    const response = await api.get(`/api/residency/${id}`, {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};
