import axios from "axios";
import { User, UserCredential } from "firebase/auth";
import { verifyJwt } from "../../../server/middleware";
import { getIdToken } from "firebase/auth";

export const createUser = async (email: string | null, uid: string, token: string) => {
  try {
    const data = {
      email,
      uid,
    }
    
    const response = await axios.post("http://localhost:3000/user/", data, {
      headers:{
        Authorization: token
      }
    });
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
    const data = { uid, email, name, age };
    const response = await axios.put("http://localhost:3000/user/", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error submitting data");
  }
};
