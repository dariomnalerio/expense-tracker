import axios from "axios";

export const createUser = async (email: string) => {
  try {
    const data = { email };
    const response = await axios.post("http://localhost:3000/user/", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error submitting data");
  }
};

export const updateUser = async (email: string, name: string, age: number) => {
  try {
    const data = { email, name, age };
    const response = await axios.put("http://localhost:3000/user/", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error submitting data");
  }
};