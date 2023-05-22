import { getAuth, getIdToken } from "firebase/auth";
import * as jwt from "jsonwebtoken";
import { app } from "./firebaseConfig";
import admin from "firebase-admin";

export const verifyJwt = async (req: any, res: any, next: any) => {
  
  const token = req.headers.authorization;
  
  // idToken comes from the client app
  admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken: any) => {
      const uid = decodedToken.uid;
      next();
    })
    .catch((error: Error) => {
      console.log(error);
    });
};
