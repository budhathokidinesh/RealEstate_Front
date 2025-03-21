import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";
export const api = axios.create({
  baseURL: "https://realestate-back-1g3x.onrender.com",
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
//Function to create user in backend
export const createUser = async (email, token) => {
  try {
    await api.post(
      "/api/user/register",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong. Please try again. Thanks");
    throw error;
  }
};
//function for the book visit
export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/api/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something gone wrong, please try again.");
    throw error;
  }
};
//function to remove booking
export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/api/user/cancelBooking/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try later");
    throw error;
  }
};
//function to add in favourite list
export const toFev = async (id, email, token) => {
  try {
    await api.post(
      `/api/user/toFav/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try later");
    throw error;
  }
};
// function to get all fevourites
export const getAllFav = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/api/user/allFav`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["favResidenciesID"];
  } catch (error) {
    toast.error("Something went wrong, please try later");
    throw error;
  }
};
//Function to get all bookings
export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/api/user/allBookings`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data["bookedVisits"];
  } catch (error) {
    toast.error(
      "Something went wrong while fetching bookings, please try later"
    );
    throw error;
  }
};

//Function to create residency
export const createResidency = async (data, token) => {
  try {
    await api.post(
      `/api/residency/create`,
      {
        data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error(
      "Something wrong happened while uploading property, please try later"
    );
    throw error;
  }
};
