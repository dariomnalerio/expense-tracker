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
  email: string,
  name: string,
  age: string,
  token: string
) => {
  try {
    const data = { email, name, age };

    const headers = {
      headers:{
        Authorization: token
      }
    }

    console.log(token)
    const response = await axios.put("http://localhost:3000/user/", data, headers)

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error submitting data");
  }
};
