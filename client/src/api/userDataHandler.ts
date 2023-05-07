import axios from "axios";
import { User, UserCredential } from "firebase/auth";

export const createUser = async (req: User) => {
  try {
    const response = await axios.post("http://localhost:3000/user/", req);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error submitting data");
  }
};

export const updateUser = async (
  uid: string,
  email: string,
  name: string,
  age: number
) => {
  try {
    const data = { uid, email, name, age};
    const response = await axios.put("http://localhost:3000/user/", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error submitting data");
  }
};
